import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function ListItemNotas({data}){
    const Corte = 6.00;  
    let N1 = data.N1 + data.A1 + data.A2 + data.A3 + data.A3 + data.pe
        N1 = (N1 * 0.4) + data.M1
        N1 = N1 > 10 ? 10.00 : N1.toFixed(2)
        N1 = Number(N1)

    let N2;

        if(data.N2 < data.Sub){
            N2 =  data.APS + data.Sub + data.pe2
        }
        else{
            N2 = data.APS + data.N2 + data.pe2
        }
        N2 = (N2 * 0.6) + data.M2
        N2 = N2> 10 ? 10.00 : N2.toFixed(2)

        N2 = Number(N2)
    
    if(N1 == 0 && N2 == 0){
        return(
            <View style={{...styles.container, backgroundColor: data.cor}}>
                <Text style={{...styles.text, alignSelf: 'center'}}>{data.materia}</Text>
                <Text style={{...styles.text, alignSelf: 'center'}}>Inda não existem notas, ou Notas zeradas</Text>
            </View>)
    }
    else if( N1 > 0 && N2 <=0){
        
        let media = (N1 + N2) / 2
        let falta = Corte - media
        return(
            <View style={{...styles.container,backgroundColor: data.cor}}>
                <Text style={{...styles.text, alignSelf: 'center'}}>{data.materia}</Text>
                <View style={styles.subCont}>
                    <Text style={styles.text}>N1: {N1} </Text>
                    <Text style={styles.text}>N2: {N2} </Text>
                    <Text style={styles.text}>Média: {media.toFixed(2)}</Text>
                    <Text style={styles.text}>Corte: {Corte.toFixed(2)}</Text>
                    <Text style={styles.text}>falta: {falta.toFixed(2)}</Text>
                </View>
            </View>)
    }
    else if(N1 > 0 && N2 > 0){
        let media = (N1 + N2) / 2
        let status;
        if( media > Corte){
            status = 'APROVADO'
        }
        else{
            let falta = Corte - media
            status = `Nota para aprovação: ${falta.toFixed(2)}`
        }
        return(
            <View style={{...styles.container, backgroundColor: data.cor}}>
                <Text style={{...styles.text, alignSelf: 'center'}}>{data.materia}</Text>
                <View style={styles.subCont}>
                    <Text style={styles.text}>N1: {N1} </Text>
                    <Text style={styles.text}>N2: {N2}</Text>
                    <Text style={styles.text}>Média: {media.toFixed(2)}</Text>
                </View>
                <Text style={{...styles.text, alignSelf: 'center'}}>Situação: {status}</Text>

            </View>)
    }

   
}

const styles = StyleSheet.create({
    container:{
        padding: 8,
        borderRadius: 5,
        margin: 2,
    },
    text:{
        color: '#ffff',
        fontSize: 15,
        fontWeight: '400',
        textShadowColor: '#000000',
        textShadowRadius: 10
    },
    subCont:{flexDirection: 'row', justifyContent: 'space-around'}
})