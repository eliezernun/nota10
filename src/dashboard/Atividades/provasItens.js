import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { DeletaProvas } from '../../../functions/remove/deleteProvas';
const deleteIco = require('../../../img/deleteico.png')

export default function ProvasItens({data, refresh}){

    let titulo = data.titulo == null ? '--' : data.titulo
    console.log(data.id)
    var dateobj = new Date(data.data)

    function pad(n) {return n < 10 ? "0"+n : n;}

    var result = pad(dateobj.getDate())+"/"+pad(dateobj.getMonth()+1)+"/"+dateobj.getFullYear();
    
    async function handlerCallDelete(){
        const deleta = await  DeletaProvas(data)
         if(deleta == true){
             refresh()
         }
        }
    return(
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <Text style={styles.textTitle}>grupo:</Text>
                <Text style={styles.text}>{data.grupoNota}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.textTitle}>titulo:</Text>
                <Text style={styles.text}>{titulo == null ?titulo : 'NF'}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.textTitle}>nota:</Text>
                <Text style={styles.text}>{data.nota.toFixed(2)}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.textTitle}>data:</Text>
                <Text style={styles.text}>{result}</Text>
            </View>
            <View style={{...styles.itemContainer, justifyContent: 'center'}}>
                <TouchableOpacity  onPress={
                    handlerCallDelete
                }>
                    <Image source={deleteIco}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row', 
        padding: 5, 
        backgroundColor: 'rgba(255, 255, 255, 0.3)', 
        margin: 1, 
        borderRadius: 5
    },
    itemContainer:{
        flex: 1, 
        alignItems: 'center'
    },
    text:{
        color: '#ffff',
        fontSize: 17,
        fontWeight: 'bold'
    },
    textTitle:{
        color: '#ffff',
        fontSize: 13,
        fontWeight: 'bold'
    }
})