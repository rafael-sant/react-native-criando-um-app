import React, { Component } from 'react'
import { StyleSheet, Image, View, Dimensions, Text } from 'react-native';
import topo from '../../assets/topo.png'


const width = Dimensions.get('screen').width

export default function Cesta() {
  return(
    <>
      <Image source={topo} style={stilos.topo}></Image>
      <Text style={stilos.titulo}>Detalhe da cesta</Text> 

      <View style={stilos.cesta}> 
        <Text style={stilos.nome}>Cesta de verduras</Text> 
        <Text style={stilos.nome}>SB Farms</Text> 
        <Text style={stilos.titulo}>
          Uma cesta com produtos selecionados 
          da fazenda direto para sua cozinha 
        </Text>
        <Text style={stilos.titulo}>R$89.99</Text> 

      </View>
    </>
  )
}

const stilos = StyleSheet.create({
  topo: {
    width: '100%',
    heigth: 578 / 768 * width,
  },
  titulo: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16
  }, 
  cesta: {
    	paddingVertical: 8,
    	paddingHorizontal: 26,
  },
  nome: { 
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646'
  }
})