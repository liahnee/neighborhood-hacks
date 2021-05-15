const initialState = {
    loggedIn: false,
    userId: '',
  };
  
  export default function userReducer(state = initialState, action) {
    const { payload = {}, type } = action;
    const { userId } = payload;
  
    switch (type) {
      case 'LOGIN':
        return {
          ...state,
          loggedIn: true,
          userId,
        };
      case 'LOGOUT':
        return {
          ...state,
          loggedIn: false,
          userId: '',
        };
  
      default:
        return state;
    }
  }
  