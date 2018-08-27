import React, { Component } from 'react'
import {createDrawerNavigator,createStackNavigator} from "react-navigation";

import CustomContentDrawerComponent from "./CustomContentDrawerComponent"

import InvoiceGenrator from "../components/InvoiceGen/InvoiceGenerator"
import ClientGenerator from "../components/ClientGen/ClientGenerator"
import ItemGenerator from "../components/ItemGen/ItemGenerator"
import DriverGenerator from "../components/DriverGen/DriverGenerator"
import VehicleGenerator from "../components/VehicleGen/VehicleGenerator"


import {images,width,height,colors} from "../utils/graphics"
import DrawerMenuIcon from "./DrawerMenuIcon"
import DrawerHeaderIcon from "./DrawerHeaderIcon"

// ------------------------> Bunch of Stack Navigators 

const InvoiceStack = createStackNavigator({
    invoice:{
        screen:InvoiceGenrator,
        navigationOptions: ({navigation}) => ({
            title:"Generate Invoice",
            headerLeft:DrawerHeaderIcon(navigation)
        })    
    },
},{
    initialRouteName:"invoice"
})

const ClientStack = createStackNavigator({
    clients:{
        screen:ClientGenerator,
        navigationOptions: ({navigation}) => ({
            title:"Add Client",
            headerLeft:DrawerHeaderIcon(navigation)
        })
    },
})

const ItemStack = createStackNavigator({
    items:{
        screen:ItemGenerator,
        navigationOptions: ({navigation}) => ({
            title:"Add Item",
            headerLeft:DrawerHeaderIcon(navigation)
        })
    },
})

const DriverStack = createStackNavigator({
    driver:{
        screen:DriverGenerator,
        navigationOptions: ({navigation}) => ({
            title:"Add Driver",
            headerLeft:DrawerHeaderIcon(navigation)
        })
    },
})

const VehicleStack = createStackNavigator({
    vehicle:{
        screen:VehicleGenerator,
        navigationOptions: ({navigation}) => ({
            title:"Add Vehicle",
            headerLeft:DrawerHeaderIcon(navigation)
        })
        
    }
})


// --------------------------> Main App Navigator

const AppNavigator = createDrawerNavigator({
    invoiceStack:{
        screen:InvoiceStack,
        navigationOptions:({navigation}) => ({
            title:"Generate Invoice",
            drawerIcon:({tintColor})=><DrawerMenuIcon source={images.invoice} color={tintColor}/>,
            
        })
    },
    clientStack:{
        screen:ClientStack,
        navigationOptions:({navigation}) => ({
            title:"Add Client",
            drawerIcon:({tintColor})=><DrawerMenuIcon source={images.network} color={tintColor}/>,
        })
    },
    itemStack:{
        screen:ItemStack,
        navigationOptions:({navigation}) => ({
            title:"Add Item",
            drawerIcon:({tintColor})=><DrawerMenuIcon source={images.item} color={tintColor}/>,
        })
    },
    driverStack:{
        screen:DriverStack,
        navigationOptions:({navigation}) => ({
            title:"Add Driver",
            drawerIcon:({tintColor})=><DrawerMenuIcon source={images.driver} color={tintColor}/>,

        })
    },
    vehicleStack:{
        screen:VehicleStack,
        navigationOptions:({navigation}) => ({
            title:"Add Vehicle",
            drawerIcon:({tintColor})=><DrawerMenuIcon source={images.vehicle} color={tintColor}/>,
        })
    }

},{
    initialRouteName:"invoiceStack",
    contentComponent: CustomContentDrawerComponent,
    drawerWidth: 250,
})

export default AppNavigator;