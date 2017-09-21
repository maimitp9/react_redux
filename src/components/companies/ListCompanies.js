import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ListCompanies extends Component{
  constructor(){
    super()
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.getCompanies();  
  }

  handleDelete(id, companies){
    this.props.deleteCompany(id, companies)
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
        <h1>Company List
          <Link to="/company/new" className="btn btn-primary pull-right">New Company</Link>
        </h1>
        <CompanyDetails companies = {companies} onDelete = {this.handleDelete} />
      </div>
    );
  }
}

  const CompanyDetails = (props) => {
    const { companies , onDelete} = props
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
              <CompanyRow key={index} companies={companies} company={company}  index={++index} onDelete={onDelete} />
            )
          })}
        </tbody>
      </table>
    );
  }

  const CompanyRow = (props) => {
    const {companies, company, index, onDelete} = props
    return (
      <tr>
        <th scope="row">{index}</th>
        <td>{company.name}</td>
        <td>{company.numberOfEmployees}</td>
        <td>
          <Link to={`/users/${company._id}/new-user`} className="btn btn-primary">New User</Link>
          <Link to={`/company/${company._id}/profile`} className="btn btn-success">Show</Link>
          <Link to={`/company/${company._id}/edit`} className="btn btn-default">Edit</Link>
          <button onClick = {onDelete.bind(this,company._id, companies)} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  }

export default ListCompanies;