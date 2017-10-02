import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewFeedbackContainer from '../../containers/feedbacksContainer/NewFeedbackContainer';

export default class ShowCompany extends Component{
  componentDidMount(){
    this.props.fetchCompany(this.props.match.params.id)
    this.props.feedbackToggle(false)
  }

  handleFeedback = (selected) => {
    this.props.feedbackToggle(selected)
  }

  render(){
    const { company, error, loading } = this.props.activeCompany;
    const feedbackToggle = this.props.toggle
    if(loading){
      return <div className="container"><h1>Company</h1><h3>Loading...</h3></div>
    }else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>      
    } else if(!company){
      return <span />
    }
    return(
      <div>
        <CompanyDetails company={company} deleteUser={this.props.deleteUser.bind(this)} handleFeedback={this.handleFeedback} feedbackToggle={feedbackToggle}  />
      </div>
    )
  }
}

function CompanyDetails(props){
  const company = props.company
  return(
    <div>
      <div className="panel panel-primary">
        <div className="panel-heading">Company Details</div>
        <div className="panel-body">
          <p><strong>Company Name: </strong>{ company.name }</p>
          <p><strong>Total Employees: </strong>{ company.numberOfEmployees }</p>
        </div>
        <div className="panel-body">
          <div><strong>Copmany Employees</strong><hr/></div>
          <EmployeesDetails employeeList={company.users} deleteUser={props.deleteUser} handleFeedback={props.handleFeedback} feedbackToggle={props.feedbackToggle} />    
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
        <th>Profile Picture</th>
        <th>Actions</th>
      </tr>
    </thead>
      {
        employeeList.map( (employee, index) => {
          return <EmployeeRow employee={employee} index={++index} key={index} employeeList={employeeList} deleteUser={props.deleteUser} handleFeedback={props.handleFeedback} feedbackToggle={props.feedbackToggle}/>
        })
      }
  </table>
  )
}

function EmployeeRow(props){
  const employee = props.employee;
  const index = props.index;
  const { selected } = props.feedbackToggle;
  const feedback_id = "feedback_" + index
  return(
    <tbody>
    <tr>
      <th scope="row">{index}</th>
      <td>{employee.fname}</td>
      <td>{employee.lname}</td>
      <td>{employee.gender === "1" ? "Male" : "Female"}</td>
      <td><img src={`http://localhost:3000/uploads/${employee.filename}`} alt={employee.filename}/></td>
      <td>
          <button onClick={props.handleFeedback.bind(this, feedback_id)} className= {`btn btn-primary`} data-toggle="collapse" data-target={`#${feedback_id}`} >Feedback</button>
          <Link to={`/users/${employee._id}/profile`} className= "btn btn-success">Show</Link>
          <Link to={`/users/${employee._id}/edit`} className= "btn btn-default">Edit</Link>        
          <button onClick={props.deleteUser.bind(this, employee._id, props.employeeList)} className="btn btn-danger">Delete</button>
      </td>
    </tr>
    { selected === feedback_id && <NewFeedbackContainer employee_id={employee._id} company_id={employee.company} feedback_collapse={feedback_id} />}
  </tbody>
  )
}
