import React from 'react';
import { View, StyleSheet} from 'react-native';
import Notas from './lista'
export default function LNotas({ navigation }){
    
    return(
        <View style={styles.container}>
            <View style={styles.center}>
                <Notas navigation={navigation}/>
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