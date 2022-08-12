
import {Reducer,initialState} from "./reducer";
import { legacy_createStore as createStore } from 'redux';

export const ConfigureStore = ()=>{
    const store = createStore(
        Reducer,
        initialState
    );
    return store;
}