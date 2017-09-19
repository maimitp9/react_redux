import axios from 'axios';

export const getCompanies = ()  =>{
  let request = axios({
    method: 'get',
    url: 'http://localhost:3000/companies',
    headers: []
  });

  return{
    type: "COMPANY_LIST",
    payload: request
  }
}

export const getCompaniesSuccess = (companies) =>{
  return{
    type: "GET_COMPANIES_SUCCESS",
    payload: companies
  }
}

export const getCompaniesFailure = (err) =>{
  return{
    type: "GET_COMPANIES_FAILURE",
    payload:  err
  }
}