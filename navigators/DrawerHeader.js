import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {images,width,height,colors} from "../utils/graphics"

export default class DrawerHeader extends Component {
  render() {
    return (
      <View style={styles.drawerTopContainer}>
        <Text style={styles.drawerTopText}> INVOICE APP </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    drawerTopContainer:{
        height:200,
        backgroundColor:"#e2e2e2",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    drawerTopText:{
        fontSize:14,
        color:colors.black
    }
})
