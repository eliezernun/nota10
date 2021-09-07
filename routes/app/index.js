import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Image } from 'react-native';
import AdicionarProva from '../../src/dashboard/Atividades/AdicionarProva.js';
import AdicionarTrabalho from '../../src/dashboard/Trabalhos/AdicionarTrabalho.js';
import Dashboard from '../../src/dashboard/index.js';
import Adicionar from '../../src/dashboard/adicionar';
import Detalha from '../../src/dashboard/detalha';
import Notas from '../../src/notas/index.js';
import Calendario from '../../src/calendario/index.js';
import EditarProva from '../../src/dashboard/Atividades/EditarProva.js';
import EditarTrabalhos from '../../src/dashboard/Trabalhos/EditarTrabalhos.js';

const notaIco = require('../../img/nota.png')
const notaIcoSelec = require('../../img/nota-selected.png')
const homeIco = require('../../img/home.png')
const homeIcoSelec = require('../../img/home-selected.png')
const caleIco = require('../../img/calendario.png')
const caleIcoSelec = require('../../img/calendario-selected.png')
const Dash = createStackNavigator();

const Home = () =>{
    return(
        <Dash.Navigator>
            <Dash.Screen name='Dashboard' component={Dashboard}
             initialParams={{ update: false }}/>
            <Dash.Screen name='Adicionar' component={Adicionar}/>
            <Dash.Screen name='Detalha' component={Detalha}
                initialParams={{ update: null, materia: null }}
            />
            <Dash.Screen name='Nova Prova' component={AdicionarProva}
            initialParams = {{materia : null, id: null, color: null, onGoBack: ''}}/>
            <Dash.Screen name='Editar Prova' component={EditarProva}/>
            <Dash.Screen name='Editar Trabalhos' component={EditarTrabalhos}/>
            <Dash.Screen name='Novo Trabalho' component={AdicionarTrabalho} 
            initialParams = {{materia : null, id: null, color: null, onGoBack: ''}}/>
            
        </Dash.Navigator>
    )
}

const NotasNav = createStackNavigator();

const SNotas = () =>{
    return(
    <NotasNav.Navigator>
        <NotasNav.Screen name='Notas' component={Notas}
        />
    </NotasNav.Navigator>
    )
}

const CalenNav = createStackNavigator();

const SCalendario = () =>{
    return(
        <CalenNav.Navigator>
            <CalenNav.Screen name='Provas e Atividades' component={Calendario}/>
        </CalenNav.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export default function App(){


    return(
        <NavigationContainer
        
        >
            <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Minhas Notas') {
                    iconName = focused
                      ? notaIcoSelec : notaIco;
                  } else if (route.name === 'Home') {
                    iconName = focused ? homeIcoSelec : homeIco;
                  }
                  else if(route.name === 'Calendario'){
                      iconName = focused ? caleIcoSelec : caleIco;
                  }
                  // You can return any component that you like here!
                  return <Image source={iconName} width={10} height={10} />;
                },
                tabBarStyle:{size: 30},
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
              })}
            >
                <Tab.Screen name='Minhas Notas' component={SNotas}/>
                <Tab.Screen name='Home' component={Home}/>
                <Tab.Screen name='Calendario' component={SCalendario}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#222222'
    }
})