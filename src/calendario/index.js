import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BuscaAtividades from '../../functions/atividades/buscaAtividades';
import CalendarioItens from './calendario';
export default function Calendario({navigation}){

    const [Dados, setDados] = useState([])
    
    async function UpdateData(){
        
        function SetData(item){
            setDados(item)
        }

        BuscaAtividades(SetData)
        
    }
   
    useEffect(()=>{
        UpdateData()
    },[navigation])

    return(
        <View style={styles.container}>
            <FlatList 
            data={Dados}
            keyExtractor={item => item.id}
            renderItem={
                ({item})=>(
                    <CalendarioItens data={item}/>
                )
            }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#222222'
    }
})