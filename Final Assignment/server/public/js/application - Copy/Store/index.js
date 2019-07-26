import { createStore } from 'redux';

const HomeReducer = (state,action) => {
    switch(action.type){
        case "ADD":
        state = state + action.payload;
        break;
        case "SUBTRACT":
        state = state - action.payload;
        break;
    }
    return state;
}


const store = createStore(HomeReducer,1);

store.dispatch({
    type: 'ADD',
    payload: 10
})
store.subscribe(()=>{
    console.log("Store Updated", store.getState())
})