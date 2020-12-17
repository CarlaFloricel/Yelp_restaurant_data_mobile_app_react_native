import React, {useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }
    
    useEffect(() => {getResult(id)},[]);
    
    if (!result){
        return null;
    }

    return (
    <View>
        <Text style={styles.title}> {result.name}</Text>
        <Text style={styles.subtitle}>  {result.location.country},  {result.location.state}, {result.location.city}</Text>
        <Text style={styles.subtitle}>  {result.location.display_address}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) => {
                
                return <Image style={styles.image} source={{uri: item}}/>
            }}
        />
    </View>
    );
};

const styles =  StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold'
    },
    subtitle:{
        fontSize:15,

    },
    image:{
        width:200,
        height:300,
        margin:10
    }
})
export default ResultsShowScreen