const initialState = {
    type: "walking",
    startTime: "00:00",
    endTime: "23:59",
  };
  
  export default function rateReducer(state = initialState, action) {
    const { payload, type } = action;
 
    switch (type) {
      case 'CHANGE_RATE_TYPE':
        return {
          ...state,
          type: payload
        };
      case 'CHANGE_RATE_TIME':
        return {
          ...state,
          startTime: payload.startTime,
          endTime: payload.endTime,
        };
  
      default:
        return state;
    }
  }
  