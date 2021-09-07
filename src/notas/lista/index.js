import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import ListItemNotas from './ListItemNotas'
import { BuscaNotas } from '../../../functions/Notas/buscanotas';

export default function LNotas({navigation}){
    const [Data, setData] = useState([])
   
    const HandlerUpdateData = (data) =>{
        setData(data)
     }
    const Busca =()=>{
        BuscaNotas(HandlerUpdateData)
    }
    navigation.addListener('focus', ()=>{
        Busca()
    })
    
    useEffect(()=>{
        Busca()
    },[navigation])
    
    if(Data == null){
    return(
     <View style={{alignItems: 'center'}}>
        <Text style={{color: '#fff', fontSize: 17}}>Inda não existem notas...</Text>
     </View>)
    }
    else if(Data){
    return(
        <FlatList
         data={Data}
         keyExtractor={item => item.id}
         renderItem={({item})=>(<ListItemNotas data={item}/>)}
        />
    )
}    
}