import React, { useState, useEffect } from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import TrabalhosItens from './trabalhosItens';
export default function Trabalhos({data, navigation, color, materia, refreshT}){

   let Data = data
   const HandlerEditar =(event, item)=>{
        navigation.navigate('Editar Trabalhos', {
            id: item.id, 
            idpai: item.idDono, 
            nota : item.nota, 
            grupo: item.grupoNota, 
            data: item.data, 
            titulo: item.titulo, 
            status: item.status, 
            color, materia,
            onGoBack: () => {refreshT()}
        })
   }

    
    if(Data.length == 0){
        return (<View style={{alignSelf: 'center'}}>
                    <Text style={{color: '#ffff', opacity: 100.00}}>Ainda não existem Trabalhos</Text>
                </View>
        )
    }
    else{
        return <FlatList
                data={Data}
                keyExtractor={item => item.id}
                renderItem={({item})=>(<TouchableOpacity
                onPress={(event) => HandlerEditar(event, item)}
                ><TrabalhosItens data={item} refreshT={refreshT}/></TouchableOpacity>)}        
        />
    }


}