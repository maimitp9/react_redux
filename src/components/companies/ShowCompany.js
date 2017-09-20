import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShowCompany extends Component{

  componentDidMount(){
    this.props.fetchCompany(this.props.match.params.id)
  }

  render(){
    const { company, error, loading } = this.props.activeCompany;
    if(loading){
      return <div className="container"><h1>Company</h1><h3>Loading...</h3></div>
    }else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>      
    } else if(!company){
      return <span />
    }
    return(
      <div>
        <CompanyDetails company = {company}/>
      </div>
    )
  }
}

function CompanyDetails(companyList){
  return(
    <div>
      <div className="panel panel-primary">
        <div className="panel-heading">Company Details</div>
        <div className="panel-body">
          <p><strong>Company Name: </strong>{ companyList.company.name }</p>
          <p><strong>Total Employees: </strong>{ companyList.company.numberOfEmployees }</p>
        </div>
        <div className="panel-body">
          <div><strong>Copmany Employees</strong><hr/></div>
          <EmployeesDetails employeeList={companyList.company.users} />    
        </div>
      </div>
    </div>
  )
}

function EmployeesDetails(props){
  const employeeList = props.employeeList
  return(
    <table className="table table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Gender</th>
        <th>Ptofile Picture</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        employeeList.map( (employee, index) => {
         return <EmployeeRow employee={employee} index={++index} key={index} />
        })
      }
    </tbody>
  </table>
  )
}

function EmployeeRow(props){
  const employee = props.employee;
  const index = props.index
  return(
    <tr>
      <th scope="row">{index}</th>
      <td>{employee.fname}</td>
      <td>{employee.lname}</td>
      <td>{employee.gender === "1" ? "Male" : "Female"}</td>
      <td><img src={`http://localhost:3000/uploads/${employee.filename}`} alt={employee.filename}/></td>
      <td><Link to={`/users/${employee._id}/profile`} className= "btn btn-success">Show</Link>
          <Link to={`/users/${employee._id}/edit`} className= "btn btn-default">Edit</Link>        
          {/* <button onClick={this.props.deleteUser.bind(this,employee._id, this.props.usersList.users)} className="btn btn-danger">Delete</button> */}
      </td>
    </tr>
  )
}