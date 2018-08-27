import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

import { DrawerItems, SafeAreaView } from 'react-navigation';
import DrawerHeader from "./DrawerHeader";

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerHeader/>
      <DrawerItems {...props}  

       />
    </SafeAreaView>
  </ScrollView>
);

export default CustomDrawerContentComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});