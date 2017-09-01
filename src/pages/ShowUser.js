import React, {Component} from 'react';
import UserShowContainer from '../containers/usersContainer/UserShowContainer';

class ShowUser extends Component{
  render(){
    return(
      <div>
        <UserShowContainer userId= {this.props.match.params.id} />
      </div>
    )
  }
}

export default ShowUser;
