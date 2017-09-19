const INITIAL_STATE = {
  companiesList: { companies: [], error: null, loading: null}
}

const companies = ( state = INITIAL_STATE, action) => {
  let error;

  switch (action.type) {

    //
    // ─── COMPANY LIST ────────────────────────────────────────────────
    //
    case "COMPANY_LIST":
      return {...state, companiesList: {companies: [], error: null, loading: true}}
    case "GET_COMPANIES_SUCCESS":
      return {...state, companiesList: { companies: action.payload, error: null, loading: false}}
    case "GET_COMPANIES_FAILURE":
      error = action.payload || { message: action.payload.message };
      return { ...state, companiesList: { companies: [], error: error, loading: false } }      
    // ─────────────────────────────────────────────────────────────────

    default:
      return state;
  }
}

export default companies;