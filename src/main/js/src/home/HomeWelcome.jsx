import React from 'react';  //引入react组件
import { 
  Grid,
  Row, 
  Col, 
  Clearfix,
  Jumbotron,
  Button,
  Well,
  ButtonToolbar,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';


class HomeWelcome extends React.Component {
  render() {
    return (
    <Col>
      <Jumbotron>
        <h1>找到属于你的</h1>
        <p>还在没有工作而烦恼吗？下面是简介，简介，介绍介绍，我的各种好处，暂时没有想好，于是就用这个东西占着吧。</p>
        <p><Button bsStyle="primary">Get Started</Button></p>
      </Jumbotron>
    </Col>
    )
  };

}

export default HomeWelcome;