import React, { useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function CalendarioItens({data}){

     var dateobj = new Date(data.data)
     function pad(n) {return n < 10 ? "0"+n : n;}
     var result = pad(dateobj.getDate())+"/"+pad(dateobj.getMonth()+1)+"/"+dateobj.getFullYear();
    

    let titulo = data.titulo == "" ? '--' : data.titulo
    let tipo = 'Trabalho'

    if(data.tipo == 'N1' ||data.tipo ==  'N2' || data.tipo == 'SUB'){
        tipo = 'Prova'
    }
    else{
        tipo = 'Trabalho'
    }
    
    return(
        <View style={{...styles.container, backgroundColor: data.cor}}>
            <Text style={{...styles.text, alignSelf: 'center', marginBottom: 5}}>{data.materia}</Text>
            <View style={styles.itemConatiner}>
                <View style={styles.subItem}>
                    <Text style={styles.text}>{tipo}:</Text>
                    <Text style={styles.text}>{data.tipo}</Text>
                </View>
                <View style={styles.subItem}>
                    <Text style={styles.text}>Titulo:</Text>
                    <Text style={styles.text}>{titulo}</Text>
                </View>   
                <View style={styles.subItem}>
                    <Text style={styles.text}>data:</Text>
                    <Text style={styles.text}>{result} </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 5,
        margin: 2,
        borderRadius: 5
    },
    text:{
        color: '#ffff',
        fontSize: 13,
        fontWeight: '400',
        textShadowColor: '#000000',
        textShadowRadius: 10
    },
    itemConatiner:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    subItem:{
        flexDirection: 'column', 
        alignItems: 'center',
        flex: 1,
    }
})