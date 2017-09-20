const INITIAL_STATE = {
  companiesList: { companies: [], error: null, loading: null},
  activeCompany: { company: null, error: null, loading: null},
  newCompany: { company: null, error: null, loading: null}
}

const companies = ( state = INITIAL_STATE, action) => {
  let error;

  switch (action.type) {

    //
    // ─── COMPANIES LIST ────────────────────────────────────────────────
    //
    case "COMPANY_LIST":
      return {...state, companiesList: {companies: [], error: null, loading: true}}
    case "GET_COMPANIES_SUCCESS":
      return {...state, companiesList: { companies: action.payload, error: null, loading: false}}
    case "GET_COMPANIES_FAILURE":
      error = action.payload || { message: action.payload.message };
      return { ...state, companiesList: { companies: [], error: error, loading: false } }      
    // ─────────────────────────────────────────────────────────────────

    //
    // ─── GET COMPANY OR ACTIVE COMPANY ───────────────────────────────
    //
    case "FETCH_COMPANY":
      return {...state, activeCompany: { ...state.activeCompany, error: null, loading: true }}
    case "FETCH_COMPANY_SUCCESS":
      return {...state, activeCompany: { company: action.payload, error: null, loading: false } }
    case "FETCH_COMPANY_FAILURE":
      error = action.payload || { message: action.payload.message };
      return {...state, activeCompany: {company: null, error: error, loading: false}}

    //
    // ─── CREATE COMPANY ──────────────────────────────────────────────
    //
    case "NEW_COMPANY":
      return {...state, newCompany: { company: null, error: null, loading: true}}
    case "NEW_COMPANY_SUCCESS":
      return {...state, newCompany: { company: action.payload.company, error: null, loading: false, status: action.payload.success}}
    case "NEW_COMPANY_FAILURE":
     error = action.payload || { message: action.payload.message };    
     return {...state, newCompany: { company: null, error: error, loading: false}}
    
    default:
      return state;
  }
}

export default companies;