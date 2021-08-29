import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Provas from './Atividades/provas';
import Trabalhos from './Trabalhos/Trabalhos'
import getRealm from '../../DB/database'
export default function Detalha({navigation, route}){
    const { update, materia, id, color } = route.params;
    const [data, setData] = useState([])
    const [trabalhos, setTrabalhos] = useState([]) 

    async function GetProvas(){
        const realm = await getRealm()
        const dados = await realm.objects('Provas').filtered(`idDono == '${id}'`)
        setData(dados)
        navigation.setParams({update: false})
    }
    async function GetTrabalhos(){
        const realm = await getRealm()
        const dados = await realm.objects('Trabalhos').filtered(`idDono == '${id}'`)
        setTrabalhos(dados)
    }
    useEffect(()=>{
        GetProvas()
        GetTrabalhos()
    },[])
    const refresh =()=>{
        GetProvas()
    }
    const refreshT = () =>{
        GetTrabalhos()
    }

    const handlerAddProva =()=>{
        navigation.navigate('Nova Prova', {update, materia, id, color, onGoBack: ()=>{refresh()}})
    }
    const handlerAddTrabalho = () =>{
        navigation.navigate('Novo Trabalho', {update, materia, id, color, onGoBack: ()=>{refreshT()}})
    }
    

    return(
        <View style={{backgroundColor: color, flex: 1}} >
            <View style={styles.titleC}>
                <Text style={styles.title}>{materia}:</Text>
            </View>
            <View style={{flex: 1, margin: 5}}>
                <View style={styles.AtividadesC}>
                    <Text style={styles.title}>Provas:</Text>
                </View>

                <View style={styles.ProvasC}>
                    <Provas data={data} navigation={navigation} route={route} color={color} materia={materia} onGoBack={refresh}/>
                </View>
                <View style={{alignItems: 'stretch'}}>
                    <TouchableOpacity 
                     onPress={handlerAddProva}
                     style={{backgroundColor: 'rgba(255, 255, 255, 0.3)', padding: 5 , borderRadius: 5, marginTop: 4}}>
                        <Text style={{color: '#ffff', alignSelf: 'center'}}>
                            Adicionar 
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            <View style={{flex: 1, margin: 5}}>
                <View style={styles.AtividadesC}>
                    <Text style={styles.title}>Trabalhos:</Text>
                </View>
                <View style={styles.ProvasC}>
                    <Trabalhos data={trabalhos} navigation={navigation}/>
                </View>
                <View style={{alignItems: 'stretch'}}>
                    <TouchableOpacity 
                    onPress={handlerAddTrabalho}
                    style={{backgroundColor: 'rgba(255, 255, 255, 0.3)', padding: 5 , borderRadius: 5, marginTop: 4}}>
                        <Text style={{color: '#ffff', alignSelf: 'center'}}>
                            Adicionar 
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleC:{
        alignSelf: 'center',
        alignItems: 'stretch',
        padding: 10,
    },
    AtividadesC:{
        alignSelf: 'center',
        alignItems: 'stretch',
        padding: 10,
    },
    title:{
        color: '#ffff',
        fontSize: 17,

    },
    ProvasC:{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        flex:1, 
        borderRadius: 5
    },
    
})