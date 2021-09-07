import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Touchable, TouchableOpacity } from 'react-native';
import Materias from './materias'
import BuscaMaterias from '../../functions/DBFILTERMaterias'
export default function Dashboard({navigation, route}){
    
    const {update} = route.params;
    const [Dados, setDados] = useState()
   
    async function Jojo(){
        const data = await BuscaMaterias()
        setDados(data)
    }

    useEffect(()=>{
        Jojo()
    }, [update])

    const handlerAdd = () =>{
        navigation.navigate('Adicionar')
    }

    const handlerDetalha = (event, item) =>{
        navigation.navigate('Detalha', {materia: item.materia, id: item.id, color: item.color})
    }
    

   if(!Dados){
        return(
            <View style={styles.container}>
            <View style={styles.center}>
                <Text style={{color:'#ffff', fontSize: 17, alignSelf: 'center'}}>Você ainda não tem nenhuma Matéria!</Text>
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity 
                onPress={handlerAdd}
                style={styles.buttonADD}>
                    <Text style={styles.text}>Adicionar Máterias</Text>
                </TouchableOpacity>
            </View>
        </View> 
        )
   }else{
    return(
        <View style={styles.container}>
            <View style={styles.center}>
            <FlatList
            data={ Dados }
            keyExtractor={item => item.id}
            renderItem={({item})=>(<TouchableOpacity
             onPress={(event)=>{handlerDetalha(event, item)}}
            ><Materias data={item} update={Jojo}/></TouchableOpacity>)}
            />  
            <TouchableOpacity 
                onPress={handlerAdd}
                style={styles.buttonADD}>
                    <Text style={styles.text}>Adicionar Máterias</Text>
            </TouchableOpacity>  
            </View>
    
        </View>
    )
   }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#222222'
    },
    center:{
        flex:1,
        padding: 10,
    },
   
    buttonADD:{
        marginBottom: 10,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#34d8eb',
        borderRadius: 5,
    },
    text:{
        color: '#ffff',
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        textShadowColor: '#000000',
        textShadowRadius: 10
    }
})