import {createStore} from 'redux';

const reducer = (state, action) => {
    if( action.type === 'DETAILS' ){
        state = {products: action.payload, showdb: true}
    }
    else if(action.type === 'CLOSE' ){
        state = {products: null, showdb: false}
    }
    return state;
}

export default createStore(reducer, {products: null, showdb: false});