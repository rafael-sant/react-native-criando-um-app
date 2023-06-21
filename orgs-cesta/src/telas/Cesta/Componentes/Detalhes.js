import React from 'react'
import { StyleSheet, Image, View } from 'react-native';
import Texto from '../../../componentes/Texto';
import logo from '../../../../assets/logo.png'


export default function Detalhes() {
  return (
    <>
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
    </>
  )
}

const styles = StyleSheet.create({
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