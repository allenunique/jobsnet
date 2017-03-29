import React from 'react';  //引入react组件
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';

import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
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

  handleSelect(selectedKey){
      console.log("id :"+selectedKey);
  }


  render(){
    return (
        <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
              <LinkContainer to="/home">
                  <Navbar.Brand>
                      <a href="#">Home</a>
                  </Navbar.Brand>
              </LinkContainer>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav >
                <LinkContainer to="/jobs">
                    <NavItem eventKey={1}>Home</NavItem>
                </LinkContainer>
                <LinkContainer to="/companies">
                    <NavItem eventKey={2}>Companies</NavItem>
                </LinkContainer>
            </Nav>
            <Nav pullRight>
              {this.userInfo}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
    );
  }
}

const styles = {
  navStyles:{
    color:'#777'
  }
};

