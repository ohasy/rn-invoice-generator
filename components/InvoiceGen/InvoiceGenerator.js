import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, Style, TextInput, ScrollView, RefreshControl } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Picker from 'react-native-picker'
import {STRINGS,LANG} from "../../utils/strings"
// import {getClientList} from "../../actions/clientAction"
// import {getItemList} from "../../actions/clientAction/itemAction"
// import {getItemList} from "../../actions/clientAction/driverAction"
import {images,width,height,colors} from "../../utils/graphics"
import styles from "../../utils/styles"
export class InvoiceGenerator extends Component {
  static propTypes = {
    itemsList:PropTypes.array,
    clientList:PropTypes.array,
    driverList:PropTypes.array
  }

  constructor(props){
      super(props);
      this.state={
          itemList:this.props.itemList,
          clientList:this.props.clientList,
          driverList:this.props.driverList,
          clientDetails:34,
          refreshing:false

      }
  }
    componentWillReceiveProps(nextProps) {
        this.setState({
            itemList:nextProps.itemList,
            clientList:nextProps.clientList,
            driverList:nextProps.driverList
        })
    }

    componentWillMount(){
        console.log("as",STRINGS);
        console.log("sd",LANG);
        console.log("sdf",STRINGS[LANG].BILLNO)
    }

    renderPickerClientList = () => {

    }
    renderPickerDriverList = () => {

    }
    renderPickerItemList = () => {

    }

  render() {
    return (

        <ScrollView 
        style={{flex:1,backgroundColor:"white"}}
        contentContainerStyle={{justifyContent:"flex-start",alignItems:"center"}}
        refreshControl={
          <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}  
          />
        }>
            <View style={{width:"90%",elevation:3,shadowColor:"grey"}}>
            <Text style={{fontSize:20,fontWeight:"600",color:colors.black}}>{STRINGS[LANG].BILLNO}</Text>
            <TextInput
                style={{
                  height: 41,
                  paddingLeft: 10,
                  color: "white",
                  fontWeight: "400",
                  fontSize: 16,
                  backgroundColor: "rgba(255,255,255, 0.2)",
                  borderRadius: 4,
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  fontStyle: "italic",
                  marginBottom: 12
                }}
                onChangeText={text => {
                  this.setState({ username: text });
                }}
                value={this.state.username}
                autoCorrect={false}
                placeholder={global.strings[global.lang].START.LOGIN.USERNAME_PLACEHOLDER}
                placeholderTextColor={"skyblue"}//skyblue
                underlineColorAndroid={"transparent"}
                maxLength={52}
                keyboardType={"email-address"}
                returnKeyType={"next"}
              />
            </View>
        </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
    // clientList:state.clientList,
    // itemList:state.itemList,
    // driverList:state.driverList
})

const mapDispatchToProps = {
    // getClientList,
    // getItemList,
    // getDriverList
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceGenerator)
