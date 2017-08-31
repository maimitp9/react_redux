import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Drawer, MenuItem, IconButton } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class Header extends Component{

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle(){
     this.setState({open: !this.state.open})
  }
  render(){
    return(
      <div>
      <AppBar title="React Redux Demo" onLeftIconButtonTouchTap={this.handleToggle.bind(this)}></AppBar>
        <Drawer open={this.state.open}>
            <AppBar iconElementRight={<IconButton><NavigationClose /></IconButton>} onRightIconButtonTouchTap={this.handleToggle.bind(this)} />
            <MenuItem><Link to="/" className="link"> Home </Link></MenuItem>
            <MenuItem><Link to="/users">Users</Link></MenuItem>
        </Drawer>


      </div>
    )
  }
}
export default Header;
