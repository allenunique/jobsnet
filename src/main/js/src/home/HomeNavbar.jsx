import React from 'react';  //引入react组件

import{
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';

import { browserHistory } from 'react-router'

export default class HomeNavbar extends React.Component {

  constructor(props){
    super(props);
    this.userInfo = null;
      //判断是否登录，来确定显示的内容
    if(this.props.username == "anonymousUser"){
      this.userInfo = (
          <NavItem
              eventKey={1}
              onClick = {this.props.showLogin}>
            Login
          </NavItem>);
    } else {
      this.userInfo =(
          <NavDropdown eventKey={3} title={this.props.username}  id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>My Profile</MenuItem>
            <MenuItem eventKey={3.2}>Settings</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Log out</MenuItem>
          </NavDropdown>);
    }

  }

  toHome(e){
      e.preventDefault();
        browserHistory.push("/");
  }

  onSelect(key,e){
      e.preventDefault();
      let path;
      switch(key){
          case 1:
              path = "/jobs";
              break;
          case 2:
              path = "/companies";
              break;
      }
      browserHistory.push(path);
  }

  render(){
    return (
        <div>
        <Navbar collapseOnSelect onSelect={this.onSelect}>
          <Navbar.Header>
              <Navbar.Brand>
                  <a onClick={this.toHome}>Home</a>
              </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1}>Jobs</NavItem>
                <NavItem eventKey={2}>Companies</NavItem>
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


