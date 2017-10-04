import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ListFeedback from '../../components/feedbacks/ListFeedback';

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

  companyFeedbacks = (company_id, selected) => {
    this.props.feedbackToggle(selected)
    this.props.listFeedbackCompany({company_id: company_id})
  }

  render(){
    const { companies, error, loading } = this.props.companiesList;
    const {selected} = this.props.toggle;
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
        <CompanyDetails companies = {companies} onDelete = {this.handleDelete} companyFeedbacks = {this.companyFeedbacks} feedback_list = {this.props.feedback_list} feedback_pagination={this.props.feedback_pagination} selected={selected} />
      </div>
    );
  }
}

  const CompanyDetails = (props) => {
    const { companies , onDelete, companyFeedbacks, feedback_list, selected, feedback_pagination} = props
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
          {companies.map((company, index) => {
            return (
              <CompanyRow key={index} companies={companies} company={company}  index={++index} onDelete={onDelete} companyFeedbacks={companyFeedbacks} feedback_list = {feedback_list} selected={selected} feedback_pagination={feedback_pagination} />
            )
          })}
      </table>
    );
  }

  const CompanyRow = (props) => {
    const {companies, company, index, onDelete, companyFeedbacks, feedback_list, selected, feedback_pagination} = props
    const feedback_id = "company_feedback_" + index;
    return (
      <tbody>      
      <tr>
        <th scope="row">{index}</th>
        <td>{company.name}</td>
        <td>{company.numberOfEmployees}</td>
        <td>
          <button onClick={companyFeedbacks.bind(this, company._id, feedback_id)} data-toggle="collapse" data-target={`#${feedback_id}`} className="btn btn-info">Show Feedback</button>
          <Link to={`/users/${company._id}/new-user`} className="btn btn-primary">New User</Link>
          <Link to={`/company/${company._id}/profile`} className="btn btn-success">Show</Link>
          <Link to={`/company/${company._id}/edit`} className="btn btn-default">Edit</Link>
          <button onClick = {onDelete.bind(this,company._id, companies)} className="btn btn-danger">Delete</button>
        </td>
      </tr>
      {
        selected === feedback_id &&
        <tr id={feedback_id} className={`collapse ${feedback_id === selected && `in`}`}>
          <td colSpan={4}>
            <ListFeedback feedback_list = {feedback_list} feedback_pagination={feedback_pagination} />
          </td>
        </tr>
      } 
      </tbody>
    )
  }

export default ListCompanies;