import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function Texto({children, style}) {
  let estilos = styles.texto;   
  if(style?.fontWeight === "bold") { 
    estilos = styles.textoNegrito
  }

  return (
    <Text style={[style, estilos]}>{children}</Text>
  )
}


const styles = StyleSheet.create({
  texto: { 
    fontFamily: "MontserratRegular",
    fontWeight: "normal"

  },
  textoNegrito: { 
    fontFamily: "MontserratBold",
    fontWeight: "normal"
  }
})