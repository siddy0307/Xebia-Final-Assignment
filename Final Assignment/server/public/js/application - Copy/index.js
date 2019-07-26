// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./routing";

// ReactDOM.render(<App />, document.getElementById("root"));
import { createStore } from 'redux';

const store = createStore(HomeReducer,initialState);

store.dispatch(Add)
store.subscribe(()=>{
    console.log("Store Updated", store.getState())
})