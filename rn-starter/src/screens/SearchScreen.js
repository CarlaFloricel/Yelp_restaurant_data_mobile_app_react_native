import React, { useState, useEffect } from 'react';
import { Text, ScrollView, StyleSheet, View, TouchableOpacity} from 'react-native';  
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/Results';
import useResults from '../hooks/useResults';
import RNSensorOutput from '../components/RNSensorOutput';
import { Accelerometer } from 'expo-sensors';

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults();
    const [data, setData] = useState({});
    const [schimb, setSchimb] = useState(false)
    const [prevTerm, setPrevTerm] = useState('')
   
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })

    }
    const _toggle = () => {
    
        const subscription = Accelerometer.addListener(accelerometerData => {
            setData(accelerometerData);
          });
      };

    const history_change = (term) => {

        return term

    }

    const onDeviceMovement = (t, tPrev) => {
        let t1=''
        

            if(schimb == true && t1.length >=0){
                
                if (z > 0.94 && z<0.99){
                    setPrevTerm(t)
                    t1 = t.slice(0,-1)
                    setTimeout(function() {
                        setTerm(t1)
                    }, 1000);
                }
                if(z < 0) {
                    
                    
                    setTimeout(function() {
                        if(tPrev.length > 0)
                        setTerm(tPrev)
                    }, 1000);
                   
                }

            }

        
        
    }

    useEffect(() => {
    _toggle();
        if(schimb){

            onDeviceMovement(term, prevTerm)
        }  
    });
   
    let { z } = data;
    let last_history=[''];
    return(
        <>
            <View>
                <TouchableOpacity onPress={_toggle} />
            </View>
            <SearchBar term={term} 
            onTermChange={(term_nou) => {
                t = history_change(term_nou)
                setTerm(t)
            }}
            onTermSubmit={() =>{
                searchApi(term)
                last_history = term
                setSchimb(false)
            } }
            onTermFocus={()=> {
               setSchimb(true)
            }}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList results = {filterResultsByPrice('$')} title="Cost Effective"/>
                <ResultsList results = {filterResultsByPrice('$$')} title="Bit Pricier" />
                {/* <ResultsList results = {filterResultsByPrice('$$$')} title="Big Spender"/> */}
            </ScrollView>
            
        </>
    );
};


export default SearchScreen;