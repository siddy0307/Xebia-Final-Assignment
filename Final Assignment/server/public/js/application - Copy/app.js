import React from "react";
import ReactDOM from "react-dom";
import App from "./routing";

ReactDOM.render(<App />, document.getElementById("root"));


// import { createStore } from 'redux';

// const reducer = (state,action) => {
//     switch(action.type){
//         case "ADD":
//         state = state + action.payload;
//         break;
//         case "SUBTRACT":
//         state = state - action.payload;
//         break;
//     }
//     return state;
// }


// const store = createStore(reducer,1);

// // store.dispatch({
// //     type: 'ADD',
// //     payload: 10
// // })
// // store.dispatch({
// //     type: 'SUBTRACT',
// //     payload: 10
// // })
// console.log("Store Updated", store.getState())
// store.subscribe(()=>{
//     document.body.innerText = store.getState();
// })

// document.addEventListener('click',()=>{
//     store.dispatch({
//         type: 'ADD',
//         payload: 10
//     })
// })