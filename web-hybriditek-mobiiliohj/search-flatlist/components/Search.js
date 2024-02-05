import React, {useState} from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function Search ({executeSearch}) {
    const [search,setSeacrh] = useState('');

    return (
        <View style={styles.searchBox}>
            <TextInput 
                value={search}
                onChangeText={text => setSeacrh(text)}
                placeholder="Search.."
                returnKeyType="search"
                onSubmitEditing={() => executeSearch(search)}
            />
        </View>
    )
}

const styles = StyleSheet.create ({
    searchBox: {
        marginBottom: 20,
        borderColor: '#333',
        borderWidth: 1,
        padding: 3,
    },
});