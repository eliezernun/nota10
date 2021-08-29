import React, { useState, useEffect } from 'react';
import {FlatList, Text, View} from 'react-native';
import TrabalhosItens from './trabalhosItens';
export default function Trabalhos({data, color, materia}){

   let Data = data
    
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
                renderItem={({item})=>(<TrabalhosItens data={item}/>)}        
        />
    }


}