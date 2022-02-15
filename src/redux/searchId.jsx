const initialState = {
  searchId: [],
  loading: false
};

export const idReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'load/id/start':
      return {
        ...state,
        loading: true
      }

    case 'load/id/success':
      return {
        ...state,
        searchId: action.payload,
        loading: false
      }

    default: return state;
  }
}
