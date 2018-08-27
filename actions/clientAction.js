import {GET_ERRORS,GET_CLIENT_DETAILS,GET_ITEM_DETAILS,SET_CLIENT_DETAILS} from "./types"
import {AsyncStorage} from "react-native"
export const setClient = (clientData)  => {
    return {
        type:SET_CLIENT_DETAILS,
        payload:clientData
    }
}
async const  getClientsFromStorage = () => {
    await AsyncStorage.getItem('')
}
export const registerClient = (clientName) => {
    AsyncStorage.getItem('clients')
    AsyncStorage.setItem()
}

export const getClient = (clientName) => {
    return {
        type:GET_CLIENT_DETAILS
    }
}