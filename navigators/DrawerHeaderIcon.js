import React, { Component } from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

import {images,width,height,colors} from "../utils/graphics"

const DrawerHeaderIcon = (navigation) => {
	return (
    <View>
      <TouchableOpacity style={styles.touchable}  onPress={() => {
          navigation.openDrawer()}
          }>
        <View style={styles.container}>
                <Image
                source={images.menu}
                style={styles.icon}
                />
      </View>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    touchable:{
        width:40,
        height:40,
    },
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    icon:{
        width:20,
        height:20,
        tintColor:colors.black
    }
})

export default DrawerHeaderIcon;