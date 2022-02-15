const initialState = {
  tickets: [],
  loading: false,
  check: true
};

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'load/tickets/start':
      return {
        ...state,
        loading: true
      }

    case 'load/tickets/success':
      return {
        ...state,
        tickets: action.payload,
        loading: false
      }

    default: return state;
  }
}