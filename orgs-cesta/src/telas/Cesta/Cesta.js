import React, { Component } from 'react'
import { StyleSheet, Image, View, Dimensions, Text } from 'react-native';
import Detalhes from './Componentes/Detalhes';
import Texto from '../../componentes/Texto';
import Topo from './Componentes/Topo';


export default function Cesta() {
  return(
    <>
      <Topo/>
      <View style={styles.cesta}> 
        <Detalhes></Detalhes>
      </View>
    </>
  )
}

const styles = StyleSheet.create({

  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

})