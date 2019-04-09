import * as AuthActions from './auth.actions'

export interface State {
  token: string;
  authenticated: boolean;
}

const initialState: State = {
  token: null,
  authenticated: false
};

export function authReducers(state = initialState, action: AuthActions.AuthActions): State {
  switch (action.type){
    case AuthActions.AUTH_SIGNUP:
    case AuthActions.AUTH_SIGNIN:
      return {
        ... state,
        authenticated: true
      };
    case AuthActions.AUTH_LOGOUT:
      return {
        ... state,
        token: null,
        authenticated: false
      };
    case AuthActions.SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
}
