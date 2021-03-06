import React, { Component } from 'react';
import CompanyForm from './CompanyForm'

class NewCompany extends Component{
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps){
    if(newProps.newCompanyData.status){
      this.props.history.push("/companies")
    }
  }

  handleSubmit(values){
    this.props.newCompany(values)
  }
  render(){
    const { error, loading } = this.props.newCompanyData
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
            <CompanyForm onSubmit={this.handleSubmit} />   
          </div>
        </div>
      </div>
    )
  }
}

export default NewCompany;