import React from 'react';  //引入react组件
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';

export default class HomeNavbar extends React.Component {


  constructor(props){
    super(props);
    this.userInfo = null;
    if(this.props.username == "anonymousUser"){
      this.userInfo = (
          <NavItem
              eventKey={1}
              onClick = {this.props.showLogin}>
            Login
          </NavItem>);
    } else {
      this.userInfo =(
          <NavDropdown eventKey={3} title={this.props.username} id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>My Profile</MenuItem>
            <MenuItem eventKey={3.2}>Settings</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Log out</MenuItem>
          </NavDropdown>);
    }



  }

  render(){
    return (
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Jobs-Net</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Jobs</NavItem>
              <NavItem eventKey={2} href="#">Componies</NavItem>
            </Nav>
            <Nav pullRight>
              {this.userInfo}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}
