import axios from 'axios';

//
// ─── COMPANIES LIST ─────────────────────────────────────────────────────────────
//
export const getCompanies = ()  =>{
  let request = axios({
    method: 'get',
    url: '/companies',
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

export const fetchCompany = (id) =>{
  let request = axios({
    method: 'get',
    url: `/company/${id}`,
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

export const fetchCompanyFailure = (err) => {
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
    url: `/company/create`,
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

//
// ─── UPDATE COMPANY ─────────────────────────────────────────────────────────────
//
export const editCompany = (companyData) =>{
  let request = axios({
    method: 'post',
    url: `/company/${companyData._id}/update`,
    headers: [],
    data: companyData
  })
  return{
    type: "EDIT_COMPANY",
    payload: request
  }
}

export const editCompanySuccess = (companyData) =>{
  return{
    type: 'EDIT_COMPANY_SUCCESS',
    payload: companyData
  }
}

export const editCompanyFailure = (err) => {
  return{
    type: 'EDIT_COMPANY_FAILURE',
    payload: err
  }
}

export const resetEditCompany = () =>{
  return{
    type: "RESET_EDIT_COMPANY"
  }
}

//
// ─── DELETE COMPANY ─────────────────────────────────────────────────────────────
//
export const deleteCompany = (id) => {
  let request = axios({
    method: 'delete',
    url: `/company/${id}`,
    headers: []
  })
  return{
    type: 'DELETE_COMPANY',
    payload: request
  }
}

export const deleteCompanySuccess = (id, deletedCompany, companiesList) => {
  let company = companiesList.find(function(company){
    return company._id === id
  })
  console.log(company)
  companiesList.splice(companiesList.indexOf(company),1)
  return{
    type: 'DELETE_COMPANY_SUCCESS',
    payload: deleteCompany
  }
}

export const deleteCompanyFailure = (err) => {
  return{
    type: 'DELETE_COMPANY_FAILURE',
    payload: err
  }
}