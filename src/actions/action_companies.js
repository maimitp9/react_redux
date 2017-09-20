import axios from 'axios';

//
// ─── COMPANIES LIST ─────────────────────────────────────────────────────────────
//
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
// ────────────────────────────────────────────────────────────────────────────────

//
// ─── FETCH COMPANY BASED ON ID ──────────────────────────────────────────────────
//

export const fetchCompany= (id) =>{
  let request = axios({
    method: 'get',
    url: `http://localhost:3000/company/${id}`,
    headers: []
  })
  return{
    type: 'FETCH_COMPANY',
    payload: request
  }
}

export const fetchCompanySuccess = (companyData) =>{
  return{
    type: 'FETCH_COMPANY_SUCCESS',
    payload: companyData
  }
}

export const fetchCompanyfailure = (err) => {
  return{
    type: 'FETCH_COMPANY_FAILURE',
    payload: err
  }
}
// ────────────────────────────────────────────────────────────────────────────────


//
// ─── CREATE COMPANY ─────────────────────────────────────────────────────────────
//
export const newCompany = (companyData) =>{
  let request = axios({
    method: 'post',
    url: `http://localhost:3000/company/create`,
    headers: [],
    data: companyData
  })
  return{
    type: "NEW_COMPANY",
    payload: request
  }
}

export const newCompanySuccess = (companyData) =>{
  return{
    type: "NEW_COMPANY_SUCCESS",
    payload: companyData
  }
}

export const newCompanyFaulire = (err) =>{
  return{
    type: "NEW_COMPANY_FAILURE",
    payload: err
  }
}