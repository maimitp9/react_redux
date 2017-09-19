import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ListCompanies extends Component{

  componentDidMount() {
    this.props.getCompanies();  
  }

  render(){
    const { companies, error, loading } = this.props.companiesList
    if(loading){
      return <div className="container"><h1>Users</h1><h3>Loading...</h3></div>
    }else if (error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }
    return(
      <div>
        <h1>Company List</h1>
        {this.createCompanyList(companies)}
      </div>
    );
  }

  createCompanyList(companies) {
    console.log(companies)
    return (this.companyDetails(companies))
  }

  companyDetails(companies) {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Company Name</th>
            <th>Total Employees</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => {
            return (
              this.companyRow(company, ++index)
            )
          })}
        </tbody>
      </table>
    );
  }

  companyRow(company, index) {
    return (
      <tr key={index}>
        <th scope="row">{index}</th>
        <td>{company.name}</td>
        <td>{company.numberOfEmployees}</td>
        <td><Link to="#" className="btn btn-success">Show</Link>
          <Link to="#" className="btn btn-default">Edit</Link>
          <button  className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  }
}

export default ListCompanies;