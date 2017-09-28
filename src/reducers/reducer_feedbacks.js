const INITIAL_STATE = {
  listFeedback: {feedbacks: [], error: null, loading: false},
  createFeedback: { feedback: null, error: null, loading: false}
}

const feedbacks = (state = INITIAL_STATE, action) =>{
  let error;
  switch (action.type) {

    //
    // ─── LIST FEEDBACKS ──────────────────────────────────────────────
    //
    case 'LIST_USER_FEEDBACK':
      return {...state, listFeedback: { feedbacks: [], error: null, loading:true}}
    case 'LIST_USER_FEEDBACK_SUCCESS':
      return {...state, listFeedback: { feedbacks: action.payload.feedback, error: null, loading: false, status: action.payload.success}}
    case 'LIST_USER_FEEDBACK_FAILURE':
      error = action.payload || {message: action.payload.message}
      return {...state, listFeedback: {feedbacks: [], error: error, loading: false}}
      
    //
    // ─── CREATE FEEDBACL ─────────────────────────────────────────────
    //
    case 'CREATE_FEEDBACK':
      return {...state, createFeedback: { feedback: null, error: false, loading: true} }
    case 'CREATE_FEEDBACK_SUCCESS':
      return {...state, createFeedback: { feedback: action.payload.feedback, error: null, loading: false, status: action.payload.success} }
    case 'CREATE_FEEDBACK_FAILURE':
      error = action.paylod || { message: action.paylod.message }
      return {...state, createFeedback: {feedback: null, error: error, loading: false}}

    default:
      return state;
  }
}

export default feedbacks;