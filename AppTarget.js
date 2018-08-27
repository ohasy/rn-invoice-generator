/**
 * Tax Invoice React Native App
 * https://www.github.com/yashojha19
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Linking,
  TouchableHighlight
} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import genHtmlString from "./genHtmlString"

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      billNo:null,
      date:null,
      driverDetails:null,
      itemDetails:null,
      clientDetials:null
    }
  }
  async createPDF() {
    let options = {
      html: genHtmlString(),
      fileName: 'blue3',
      directory: 'docs',
    };

    let file = await RNHTMLtoPDF.convert(options)
    console.log(file.filePath);
    console.log("file::?",file)
    console.log(Linking.canOpenURL(file.filePath))
    if(Linking.canOpenURL(file.filePath)){
      return Linking.openURL("file://"+file.filePath)
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight 
      style={styles.button}
      onPress={this.createPDF}>
        <Text style={styles.welcome}>Create PDF</Text>
      </TouchableHighlight>
    </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:"white",
    padding:8
  },
  button:{
    backgroundColor:"skyblue",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:4
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
