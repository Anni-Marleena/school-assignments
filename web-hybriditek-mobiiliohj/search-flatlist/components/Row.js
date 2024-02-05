import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Row({person}) {
    
    return (
            <Text style={styles.row}>
                {person.lastname}, {person.firstname}
            </Text>
    )
}

const styles = StyleSheet.create ({
    row: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        marginTop: 2,
        marginBottom: 2,
    }
})