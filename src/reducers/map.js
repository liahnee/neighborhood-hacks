const initialState = {
    zoom: 5,
    center: { lat: 24.886, lng: -70.268 },
    mapTypeId: "terrain",
    colorCoords: [],
  };
  
  export default function mapReducer(state = initialState, action) {
    const { payload = {}, type } = action;
    const { coords } = payload;
  
    switch (type) {
      case 'COLORCOORDS/CALL':
        return {
          ...state,
          colorCoords: coords
        };
      case 'COLORCOORDS/ADD':
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
  