import axios from 'axios';

//
// ─── LIST FEEDBACK based on user_id ──────────────────────────────────────────────────────────────
//
export const listFeedback = (user_id) => {
  const request = axios({
    method: 'post',
    url: '/user/feedbacks',
    headers: {},
    data: user_id 
  })
  return{
    type: 'LIST_USER_FEEDBACK',
    payload: request
  }
}

export const listFeedbackCompany = (company_id) => {
  const request = axios({
    method: 'post',
    url: '/company/feedbacks',
    headers: {},
    data: company_id
  })

  return{
    type: 'LIST_COMPANY_FEEDBACK',
    payload: request
  }
}

export const listFeedbackSuccess = (feedbscks) =>{
  return{
    type: 'LIST_FEEDBACK_SUCCESS',
    payload: feedbscks
  }
}

export const listFeedbackFailure = (err) =>{
  return{
    type: 'LIST_FEEDBACK_FAILURE',
    payload: err
  }
}

//
// ─── CREATE FEEDBACK ────────────────────────────────────────────────────────────
//
export const createFeedback = (feedbackData) => {
  const request = axios({
    method: 'post',
    url: '/feedback/create',
    headers: {},
    data: feedbackData
  })

  return{
    type: 'CREATE_FEEDBACK',
    payload: request
  }
}

export const createFeedbackSuccess = (feedbackData, feedbacks) =>{
  feedbacks.unshift(feedbackData.feedback)
  return{
    type: 'CREATE_FEEDBACK_SUCCESS',
    payload: feedbackData,
    feedback_list: feedbacks
  }
}

export const createFeedbackFailure = (err) =>{
  return{
    type: 'CREATE_FEEDBACK_FAILURE',
    payload: err
  }
}