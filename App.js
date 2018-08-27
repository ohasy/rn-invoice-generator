import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import AppNavigator from "./navigators/ScreenNavigators"
import StatusBar from "./utils/status-bar"
const App = () => (
    <View style={{flex:1}}>
    <StatusBar/>
    <AppNavigator/>
    </View>
)
export default App;