import React, { Component } from 'react'
import { StyleSheet, Image, View, Dimensions, Text } from 'react-native';
import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'
import Texto from '../componentes/Texto';

const width = Dimensions.get('screen').width

export default function Cesta() {
  return(
    <>
      <Image source={topo} style={styles.topo}></Image>
      <Texto style={styles.titulo}>Detalhe da cesta</Texto> 

      <View style={styles.cesta}> 
        <Texto style={styles.nome}>Cesta de verduras</Texto> 

        <View style={styles.fazenda}>
          <Image source={logo} style={styles.imagemFazenda}/>
          <Texto style={styles.nomeFazenda}>SB Farms</Texto> 
        </View>

        <Texto style={styles.descricao}>
          Uma cesta com produtos selecionados 
          da fazenda direto para sua cozinha 
        </Texto>
        <Texto style={styles.preco}>R$89.99</Texto> 

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  topo: {
    width: '100%',
    height: 578 / 768 * width,
    fontFamily: "MontserratRegular"
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
    paddingHorizontal: 16,
  },
  nome: { 
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  }, 
  fazenda: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: "center"
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  descricao: { 
    color: "#a3a3a3",
    lineHeight: 26
  },
  nomeFazenda: { 
    fontSize: 16,
    lineHeight: 16, 
    marginLeft: 12,
  },
  preco: { 
    color: "#2a9f85",
    fontWeight: "bold", 
    fontSize: 16,
    lineHeight: 26, 
    marginTop: 8
  }
})