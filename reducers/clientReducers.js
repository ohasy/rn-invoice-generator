import {GET_ERRORS,SET_CLIENT_DETAILS} from "../actions/types";
import isEmpty from "../validation/is-empty";
const initialState = {
    client:{
        name:null,
        address:null,
        gstin:null
    }
}

export default function(state= initialState,action){
    switch(action.type){
        case SET_CLIENT_DETAILS:
            return {
                ...state,
                client:action.payload
            }
        default:
            return state;
    }
}