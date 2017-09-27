import axios from 'axios';

//
// ─── CREATE FEEDBACK ────────────────────────────────────────────────────────────
//
export const createFeedback = (data) => {
  const request = axios({
    method: 'post',
    url: '/feedback/create',
    headers: [],
    body: data
  })

  return{
    type: 'CREATE_FEEDBACK',
    payload: request
  }
}