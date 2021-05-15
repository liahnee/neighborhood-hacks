const initialState = {
    loggedIn: false,
    userId: '',
    profileUrl: '',
  };
  
  export default function userReducer(state = initialState, action) {
    const { payload = {}, type } = action;
    const { userId, profileUrl } = payload;
  
    switch (type) {
      case 'USER/LOGIN':
        return {
          ...state,
          loggedIn: true,
          userId,
          profileUrl,
        };
      case 'USER/LOGOUT':
        return {
          ...state,
          loggedIn: false,
          userId: '',
          profileUrl: '',
        };
  
      default:
        return state;
    }
  }
  