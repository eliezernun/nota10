import React, {useState, useEffect} from 'react'
import { View, Text, TextInput, TouchableOpacity, Image,  Modal, Alert, StyleSheet, Animated  } from 'react-native'
import { Slider } from 'react-native-elements';
import DatePicker from 'react-native-date-picker'
import  FNAdicionarTrabalhos from '../../../functions/AdicionarTrabalhos'
// Import dos Icones---------------------------------
const Edit = require('../../../img/edit-24.png')
const nota = require('../../../img/nota-24-branco.png')
const save = require('../../../img/save.png')
const unchecked = require('../../../img/unchecked-24.png')
const checked = require('../../../img/checked-24.png')
//-----------------------------------------------------

export default function AdicionarTrabalho({navigation, route}){
    let tipoTrabalho = ['A1', 'A2', 'A3', 'A4', 'A5','APS']
    const [Trabalho, setTrabalho] = useState(null)
    const [ERRO, SetERRO] = useState(false)
    const [Titulo, setTitulo] = useState(null)
    const [MostarData, setMostarData] = useState(false)
    const [date, setDate] = useState(new Date())
    const [inputDate, setinputDate] = useState(date.toLocaleDateString('pt-BR'))
    const [Nota, setNota] = useState(0.00)
    const {materia, id, color, onGoBack} = route.params;
    let hoje;

    const UpdateTipo = (event, item) =>{
        setTrabalho(item)
    }

    const Tipo = ()=>{
        return(
            <View style={{padding: 10, flexDirection: 'row', justifyContent: 'space-between', borderWidth: Trabalho == null && ERRO == true ? 2: 0}}>
                {
                    tipoTrabalho.map(item =>(
                        <TouchableOpacity 
                        style={{flex: 1, alignItems: 'center', padding: 10, margin: 4, borderRadius: 5, backgroundColor: Trabalho == item ? '#34d3eb' : '#ffff'}}
                        key={item} onPress={ (event) => UpdateTipo(event, item)}>
                            <Image source={Trabalho == item ? checked : unchecked }/><Text style={{fontWeight:'bold'}}>{item}</Text>
                        </TouchableOpacity>))
                }
            </View>
        )
    }

    const handler =()=>{
        var dateobj = date
        function pad(n) {return n < 10 ? "0"+n : n;}
        var result = pad(dateobj.getDate())+"/"+pad(dateobj.getMonth()+1)+"/"+dateobj.getFullYear();
        setinputDate(result)
    }

    useEffect(()=>{
       handler() 
    },[date])

    const handlerSetData =(item)=>{
        handler()
        setDate(item)
    }

    async function Salvar(){
        let dados ={
            id: String(new Date().getTime()),
            idDono: id,
            titulo: Titulo,
            grupoNota: Trabalho,
            nota: Nota,
            data: String(date),
            status: false, 
        }
       let result = await FNAdicionarTrabalhos(dados)
       if (result == true){
           onGoBack()
           navigation.goBack()
       }
    }

    const Confirm = () =>{
        if(!Trabalho){
            SetERRO(true)
            Alert.alert("Selecione o tipo de Trabalho!")
        }
        else{
            Alert.alert("Confirmação:", `Você cononfirmar os seguintes dados:
            Titulo: ${Titulo == null ? '(não obrigatório)': Titulo} \n
            Tipo: ${Trabalho} \n
            data: ${inputDate}\n
            nota: ${Nota != 0 ? Nota : '(não obrigatório)'} \n
            `,
               [
                {
                   text: 'Confirmar',
                   onPress: () =>{Salvar()}
               },
               {
                   text: 'Cancelar',
                   onPress: ()=>{}
               }
            ]
            )
        }
    }

    const DATEPIK = () =>{
        return(
            <DatePicker
            date={date} onDateChange={(item)=>{handlerSetData(item)}}
            locale={'pt-BR'}
            textColor={'#00bfff'}
            mode={'date'} 
            />
        )
    }

    return(
        <View style={{backgroundColor: color, flex: 1}}>
            <View style={{alignItems: 'center', flexDirection: 'column', padding: 10, margin: 10}}>
                <Text style={{color: '#ffff', fontSize: 23}}>
                    {materia}
                </Text>
                <Text style={{color: '#ffff', fontSize: 18}}>
                    Adicionar Trabalho:
                </Text>
            </View>
            <View>
                <Tipo/>
            </View>
            <View style={{flex: 1, margin: 10}}>
                <TextInput 
                placeholder="Titulo da Trabalho? (Não obrigatório)." 
                onChangeText={text => setTitulo(text)}
                style={{backgroundColor: '#ffff', padding: 10, borderRadius: 5 }}/>

                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 10, backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: 5, padding: 5}}>
                    <Text style={{padding: 10, color: '#ffff', fontSize: 17}}>Dia da Trabalho:</Text>
                    <View style={{flexDirection: 'row-reverse', justifyContent: 'center'}}>
                        <Text
                        style={{color: '#ffff', fontSize: 17, marginLeft: 5}}
                        onPress={()=>{setMostarData(!MostarData)}}
                        >{inputDate}</Text>
                        <Image source={Edit}/>
                    </View>
                    <Modal 
                    visible={MostarData}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                      }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={{fontWeight: 'bold', padding: 5, color: '#00bfff', fontSize: 17}} >Escolha a Data da Trabalho:</Text>
                                    <DATEPIK/>
                                        <TouchableOpacity
                                        onPress={()=>{setMostarData(!MostarData)}} 
                                        style={styles.Button}>
                                            <Text style={{color: '#ffff', fontWeight: 'bold'}}>Concluir</Text>
                                        </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
                <View style={{marginTop: 10, backgroundColor: 'rgba(255, 255, 255, 0.3)',borderRadius: 5}}>
                        <Text style={{alignSelf: 'center', color: '#ffff', fontSize: 17}}>Nota: {Nota.toFixed('2')}</Text>
                   <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center', margin: 30}}>
                   <Slider
                        value={Nota}
                        maximumValue={10.00}
                        minimumValue={0.00}
                        step={0.01}
                        onValueChange={(value) => setNota(value)}
                        thumbStyle={{ height: 10, width: 20, backgroundColor: 'transparent' }}
                        trackStyle={{ height: 5 }}
                        thumbProps={{
                            children: (<Image source={nota} style={{ bottom: 20, right: 20}}/>) 
                        }}
                    />
                </View>
                </View>
                <View style={{marginTop: 10, backgroundColor: 'rgba(255, 255, 255, 0.3)',borderRadius: 5}}>
                    <TouchableOpacity
                    onPress={Confirm}
                    style={{padding: 10, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: 5}}>
                     <Image style={{margin: 4}} source={save}/><Text style={{margin: 4, color: '#ffff', fontSize: 17}}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      Button:{
        marginTop: 10, padding: 10, backgroundColor: '#00e5ff', borderRadius: 5
      }
})