import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

class Pagination extends Component {

  componentDidMount(props){
    const { data, currentPage, perPage} = this.props;
    this.props.setPagination(data, currentPage, perPage)
  }
  handleClick = (data, perPage, event) => {
    this.props.setPagination(data, Number(event.selected+1), perPage)
  }

  render() {
    const { data, currentData, currentPage, perPage, loading} = this.props.pagination_list;
    if(loading){
      return <h3 className="text-center">Loading</h3>
    }


    // Logic for displaying page numbers
    const pageNumbers = Math.ceil(data.length / perPage);

    return (
      <div>
        <ul id="page-numbers">
          <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={pageNumbers}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={3}
                       onPageChange={this.handleClick.bind(this,data,perPage)}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
        </ul>
      </div>
    );
  }
}

export default Pagination;