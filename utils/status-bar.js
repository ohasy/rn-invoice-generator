import React,{Component} from "react"
import {StatusBar} from "react-native";
import {colors} from "../utils/graphics"
const CustomStatusBar = () => (
        <StatusBar 
        barStyle = {"dark-content"} 
        backgroundColor={colors.white}/>
      
)
export default CustomStatusBar;