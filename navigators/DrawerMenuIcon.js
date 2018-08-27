import React, { Component } from 'react'
import { Text, View, Image,StyleSheet} from 'react-native'
import {images,width,height,colors} from "../utils/graphics"

export default class DrawerMenuIcon extends Component {
     state={
        color:this.props.color
     }
     componentWillReceiveProps(nextProps) {
         this.setState({
            color:nextProps.color
         })
     }
  render() {
    return (
      <View>
            <Image
            source={this.props.source}
            style={[styles.drawerItemIconStyle,{tintColor:this.state.color}]}
            />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    drawerItemIconStyle:{
        width:20,
        height:20,
        tintColor:colors.black
    }
})

