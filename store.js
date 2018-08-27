import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers"
import devToolsEnhancer from 'remote-redux-devtools';
const initialState = {}
const middleware = [thunk];

const store = createStore(
    rootReducer,
    devToolsEnhancer()
)

export default store;
