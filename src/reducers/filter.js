const initialState = {
    type: "walking",
    startTime: "00:00",
    endTime: "23:59",
  };
  
  export default function filterReducer(state = initialState, action) {
    const { payload, type } = action;
 
    switch (type) {
      case 'CHANGE_TYPE':
        return {
          ...state,
          type: payload
        };
      case 'CHANGE_TIME':
        return {
          ...state,
          startTime: payload.startTime,
          endTime: payload.endTime,
        };
  
      default:
        return state;
    }
  }
  