import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from './store/app-store';
import LoginComponent from './components/login-component';
import PlanetsComponent from './components/planets-component';

class AppContainer extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let { store } = this.context;
    store.subscribe(() => {
      this.forceUpdate();
    })
  }

  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={LoginComponent} />
            <Route path="/planets" component={PlanetsComponent} />
          </div>
        </Router>
    )
  }
}

AppContainer.contextTypes = {
  store: PropTypes.object
};

ReactDom.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);



// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./routing";

// ReactDOM.render(<App />, document.getElementById("root"));


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