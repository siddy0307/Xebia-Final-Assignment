import actions from '../action-types.js';

export function toggleLoginBtnStatus(status) {
  return {
    type: actions.TOGGLE_LOGIN_BTN_STATUS,
    status,
  }
}

export function loginErrorMessageAction(message) {
  return {
    type: actions.LOGIN_ERROR,
    message,
  }
}

export function loggedInUserDetailsSave(details) {
  return {
    type: actions.SAVE_USER_DETAILS,
    details,
  }
}

export function loginAction(props, username, password) {
  return (dispatch, getState) => {
    fetch("https://swapi.co/api/people/?search="+ username)
        .then(response => response.json())
          .then(data =>{
            let users = data.results , userFound = false;
        if (users.length === 0) {
          dispatch(loginErrorMessageAction("No users found with the name of " + username));
        } else {
          users.forEach((user, index) => {
            if (user.name === username &&  user.birth_year === password) {
              dispatch(loggedInUserDetailsSave(user));
              props.history.push('/planets');
              userFound = true;
            }
          });
          if (!userFound) {
            dispatch(loginErrorMessageAction("Please check your username or password"));
          }
        }
        dispatch(toggleLoginBtnStatus(true));
            })
      .catch(function (error) {
        dispatch(loginErrorMessageAction(error));
        dispatch(toggleLoginBtnStatus(true));
      });
    };
}
