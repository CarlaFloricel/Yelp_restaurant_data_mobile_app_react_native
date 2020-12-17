import React from 'react';
import { View, TextInput, StyleSheet} from 'react-native'; 
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit, onTermFocus}) => {
    return(
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder={"Search"}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                onFocus={onTermFocus}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: "#E8E8E8",
        height:50,
        borderRadius: 5, 
        marginHorizontal:15,
        flexDirection:'row',
        marginBottom:10,
        marginTop:10
    },
    inputStyle:{
        fontSize:18,
        flex:1
    },
    iconStyle:{
        fontSize:35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;