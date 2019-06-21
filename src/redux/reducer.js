const initialState = 'default message';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_MESSAGE': {
      return action.payload == state ? initialState : action.payload;
    }
    default: {
      return state;
    }
  }
};
