import React from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import ProvasItens from './provasItens';

export default function Provas({data, navigation, color, materia, onGoBack }){
  
   const handlerEdit = (event, item) =>{
       navigation.navigate('Editar Prova', {id: item.id, idpai: item.idDono, nota : item.nota, grupo: item.grupoNota, data: item.data, titulo: item.titulo, status: item.status, color, materia, onGoBack})
   }
   

    if(data.length == 0){
        return (<View style={{alignSelf: 'center'}}>
                    <Text style={{color: '#ffff', opacity: 100.00}}>Ainda não existem Provas</Text>
                </View>
        )
    }
    else{
        return <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item})=>(<TouchableOpacity
                onPress={(event)=> handlerEdit(event, item)}
                ><ProvasItens data={item}/></TouchableOpacity>)}        
        />
    }


}