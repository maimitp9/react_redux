const INITIAL_STATE = {
  companiesList: { companies: [], error: null, loading: false},
  activeCompany: { company: null, error: null, loading: false},
  newCompany: { company: null, error: null, loading: false},
  editCompany: { company: null, error: null, loading: false},
  feedbackToggle: { status: null }
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

    //
    // ─── UPDATE COMPANY ──────────────────────────────────────────────
    //
    case 'EDIT_COMPANY':
      return {...state, editCompany: {...state.editCompany, error: null, loading: true}}
    case 'EDIT_COMPANY_SUCCESS':
      return {...state, editCompany: {company: action.payload.company , error: null, loading: false, status: action.payload.success}}
    case 'EDIT_COMPANY_FAILURE':
      error = action.payload || { message: action.payload.message}
      return {...state, editCompany: { company: null, error: error, loading: false}}
    case 'RESET_EDIT_COMPANY':
      return {...state, editCompany: { company: null, error: null, loading: false}}

    //
    // ─── DELETE COMPANY ──────────────────────────────────────────────
    //
    case 'DELETE_COMPANY':
      return {...state, deleteCompany: {...state.deleteCompany, error: null, loading: true}}
    case 'DELETE_COMPANY_SUCCESS':
      return {...state, deleteCompany: {company: action.payload  , error: null, loading: false}}
    case 'DELETE_COMPANY_FAILURE':
      error = action.payload || { message:  action.payload.message }
      return {...state, deleteCompany: {company: null, error: error, loading: false}}
    case 'FEEDBACK_TOGGEL':
      return {...state, feedbackToggle: { status: action.payload.status, selected: action.payload.selected } }

    default:
      return state;
  }
}

export default companies;