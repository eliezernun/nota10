import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Notas(){
    return(
        <View style={styles.container}>
            <View style={styles.center}>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#222222'
    },
    center:{
        flex:1,
        padding: 10,
    }
})