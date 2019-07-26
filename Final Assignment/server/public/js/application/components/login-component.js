import React from 'react';
import PropTypes from 'prop-types';
import {
  toggleLoginBtnStatus,
  loginAction
} from '../store/action-creators/login-actions';

export default class Login extends React.Component {
  constructor() {
    super();
  }

  login = (e) => {
    let username = this.usernameField.value,
        password = this.passwordField.value,
        userFound = false,
        props = this.props,
        { store } = this.context;
    e.preventDefault();
    store.dispatch(toggleLoginBtnStatus(false));
    store.dispatch(loginAction(props, username, password));
  }

  render() {
    let { store } = this.context;
    let storeData = store.getState();
    let loginPageData = storeData.loginReducer;

    return (
      <div className="col-md-12 col-sm-12 no-padding">
        <div className="login-box">
          <form onSubmit={this.login}>
            <label htmlFor="username-login">
              Username
            </label>
            <input
              type="text"
              id="username-login"
              ref={ (input) => { this.usernameField = input } }
            />
            <label htmlFor="password-login">
              Password
            </label>
            <input
              type="password"
              id="password-login"
              ref={ (input) => { this.passwordField = input } }
            />
            <span className="error">
              { loginPageData.errMsg }
            </span>
            <button disabled={ loginPageData.loginBtnEnabledStatus === false ? "disabled" : "" }>
              Login
            </button>
            <div className="clearfix" />
          </form>
        </div>
      </div>
    );
  }
};

Login.contextTypes = {
  store: PropTypes.object
};
