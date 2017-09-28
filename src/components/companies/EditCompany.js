import React, { Component } from 'react';
import CompanyForm from './CompanyForm';

class EditCompany extends Component{
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.props.fetchCompany(this.props.company_id)
  }

  componentWillUnmount(){
    this.props.resetMe();
  }

  componentWillReceiveProps(newProps){
    if(newProps.editCompanyData.status){
      this.props.history.push(`/company/${this.props.company_id}/profile`)
    }
  }

  handleSubmit(values){
    this.props.editCompany(values)
  }

  render(){
    const { company, error, loading } = this.props.activeCompany

    if(loading){
      return <div className="container"><h1>Company</h1><h3>Loading...</h3></div>
    }else if (error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return(
      <div className="col-md-6">
        <div className="panel panel-primary">
          <div className="panel-heading">New Company</div>
          <div className="panel-body">
            <CompanyForm onSubmit={this.handleSubmit} initialValues={ company } />
          </div>
        </div>
      </div>
    )
  }
}

export default EditCompany;