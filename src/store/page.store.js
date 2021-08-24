const INITIAL_STATE = {
  type: 'mural'
};

export const setPageType = (payload) => ({
    type: 'TYPE_CHANGE',
    payload
  });

export default function pageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TYPE_CHANGE':
      return {
        ...state,
        type: action.payload.type
      };

    default:
      return state;
  }
}
