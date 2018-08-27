import React, { Component } from 'react'
import { View, Text, AppRegistry } from 'react-native'
import PropTypes from 'prop-types'
import App from "./App"
import { Provider } from 'react-redux'
import store from "./store"
import AppTarget from "./AppTarget"

export class INVOICEAPP extends Component{
    render(){
        return (
           <Provider store={store}>
            <App/>
            </Provider>
        )
    }
}

AppRegistry.registerComponent('bls', () => INVOICEAPP);
