import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Keyboard, TouchableOpacity } from 'react-native';
import AdicionarMateria from '../../functions/DBMaterias'
export default function Adicionar({navigation}){
    const Dias = ['Segunda-feira', 'Terça-Feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    const Colors = ['#ff0000', '#fc4444', '#fc6404', '#fcd444', '#8cc43c', '#029658', '#1abc9c', '#5bc0de', '#6454ac', '#fc8c84' ]
    const [Materia, setMateria] = useState('')
    const [Professor, setProfessor] = useState('')
    const [DiaSemana, setDiaSemana] = useState('')
    const [Color, setColor] = useState('#666666')
    const [Error, setError] = useState('')
    const [info, setinfo]=useState([])
    let ID =  new Date().getTime()
    ID = Number.parseInt(ID)

    useEffect(()=>{
        if(Error){
            if(Materia.length > 3 && Error == 'Materia'){
                setError('')
            }
            else if(Professor.length > 3 && Error == 'Professor'){
                setError('');
            }
            else if(DiaSemana.length > 0 && Error == 'DiaSemana'){
                setError('')
            }
        }
        else{
            let data={
                id : String(ID),
                materia: String(Materia),
                professor: String(Professor),
                diaSemana: String(DiaSemana),
                color: String(Color),
                status: false,

                /* id: {type: 'string', indexed: true},
                    materia: 'string',
                    rofessor: 'string',
                    diaSemana: 'string',
                    color: 'string',
                    status: 'bool', */
            }

            setinfo(data)

        }
    }, [DiaSemana, Professor, Materia, Error, Color])

    const handlerUPDia = (event, item) =>{
        setDiaSemana(item)
    }
 
    const handlerCor = (event, item) =>{
        setColor(item)
    }

    async function handlerGravar(){
        let v = await AdicionarMateria(info)

        if(v == true){
            navigation.navigate('Dashboard', {update: true})
        }
        else{
            
        }
    }

    const handlerSave = () =>{

        if(Materia.length <= 0){
            setError('Materia')
        }
        else if(Professor.length <= 0){
            setError('Professor')
        }
        else if(!DiaSemana){
            setError('DiaSemana')
        }
        else if(Error == ''){
           handlerGravar()
        }


    }


    const ColorPicker = ()=>{
        return(
            <View style={styles.containerDias}>
                {
                    Colors.map(item =>(
                        <TouchableOpacity 
                        onPress={(event)=> handlerCor(event, item)}
                        key={item} style={{...styles.cores, backgroundColor: item, borderWidth: Color == item ? 2 : 2, 
                         borderColor: Color == item ? '#156225': item}}/>
                    ))
                }
            </View>
        )
    }

    const DiasAulas = () =>{
        return(
        <View style={{...styles.containerDias, borderWidth: Error == 'DiaSemana' ? 2: 0, borderColor: Error == 'DiaSemana' ? '#fc031c' : '#2222'}}>
            {
                Dias.map(item =>(
                <View key={item} style={styles.itemDias}>
                    <TouchableOpacity style={{ ...styles.Diabutton,
                        
                        backgroundColor: DiaSemana == item ? '#156225':'#4444', 
                        }}
                        onPress={(event)=>{handlerUPDia(event, item)}}
                        >
                        <Text style={styles.text}>{item}</Text>
                    </TouchableOpacity>
                </View>
                ))
            }
        </View>
        )
    }

   

    return(
        <View style={styles.container}>
            <View style={styles.center}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Adicionar Máteria</Text>
                    <View style={styles.containerIputm}>
                        <TextInput
                            onChangeText={(text)=>{setMateria(text)}}
                            style={{...styles.input, borderWidth: Error == 'Materia' ? 2 : 0, borderColor: Error == 'Materia' ? '#fc031c': '#222222'}}
                            placeholder="Matéria"
                        />
                         <TextInput
                            onChangeText={(text)=>{setProfessor(text)}}
                            style={{...styles.input, borderWidth: Error == 'Professor' ? 2 : 0, borderColor: Error == 'Professor' ? '#fc031c': '#222222'}}
                            placeholder="Professor"
                        />
                        <ColorPicker/>
                        <DiasAulas/>
                        
                    </View>
                    <View style={{padding: 10, flexDirection: 'row'}}>
                        <TouchableOpacity
                            style={styles.salvarBtn}
                            onPress={handlerSave}
                        >
                            <Text style={styles.buttonText}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.cancelarBtn}
                            onPress={handlerSave}
                        >
                            <Text
                            style={styles.buttonText}
                            >Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222222',
    },
    center:{
        flex: 1,
        padding: 20,
        alignItems: 'stretch'
    },
    titleContainer:{
        alignItems: 'center'
    },
    title:{
        color: '#ffff',
        fontSize: 17,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    containerIput:{
        alignSelf: 'stretch'
    },
    input:{
        alignSelf: 'stretch',
        backgroundColor: '#ffff',
        borderRadius: 5,
        marginTop: 10,
    },
    containerDias:{
        flexDirection: 'row',
        margin: 10,
        flexWrap: 'wrap',
        alignContent: 'center',
        borderRadius: 5
    },
    itemDias:{
        flexDirection: 'row'
    },
    text:{
        color: '#ffff',
    },
    Diabutton:{
        margin: 4, 
        borderRadius: 5, 
        padding: 10
    },
    cancelarBtn:{
        backgroundColor: '#fc8403', 
        padding: 10, 
        borderRadius: 5, 
        alignItems: 'center', 
        flex: 1, 
        margin: 2
    },
    salvarBtn:{
        backgroundColor: '#03b1fc', 
        padding: 10, 
        borderRadius: 5, 
        alignItems: 'center', 
        flex: 1, 
        margin: 2
    },
    buttonText:{
        color: '#ffff',
        fontSize: 17,
        fontWeight: 'bold',
    },
    cores:{
        borderRadius: 180, 
        padding: 25, 
        margin: 5,
    }
})