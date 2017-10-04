const INITIAL_STATE = {
  setPagination: { data: [], currentData: [], currentPage: null, perPage: null, loading: true }
}

const pagination = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_PAGINATION':
      return { ...state, setPagination: { data: action.payload.data, currentData: action.payload.currentData, currentPage: action.payload.currentPage, perPage: action.payload.perPage }}
    default:
      return state;
  }
}

export default pagination;