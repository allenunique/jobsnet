import React from 'react';
import ReactDOM from 'react-dom';
import {
  Col,
  Button,
  FormGroup,
  Form,
  FormControl,
  ControlLabel,
  Modal,

} from 'react-bootstrap';
class UserLogin extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          show:this.props.show,
      };

  }



  handleSubmit (e) {
      e.preventDefault();
      var currentUser = {};
      currentUser['username'] = document.getElementById('username').value.trim();
      currentUser['password'] = document.getElementById('password').value.trim();
        console.log("username"+currentUser['username']);

      var xhr = new XMLHttpRequest();

      xhr.open("POST", "/login", true);
      xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      xhr.onreadystatechange = function(){
          var XMLHttpReq = xhr;
          if (XMLHttpReq.readyState == 4) {
              if (XMLHttpReq.status == 200) {
                  var text = XMLHttpReq.responseText;

                  console.log(text);
              }
          }
      };
      xhr.send({
          email:'root',
          password:'root'
      });

      window.location = "#";
  }



  render() {
    return (
        <Modal show={this.props.show} onHide={this.props.close}>
            <Form id="loginForm" method = "POST" action="/login" horizontal >

            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>

          <Modal.Body>
              <FormGroup controlId="email">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={5}>
                  <FormControl name="username" type="text" placeholder="Email" />
                </Col>
              </FormGroup>

              <FormGroup controlId="password">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={5}>
                  <FormControl name="password" type="password" placeholder="Password" />
                </Col>
              </FormGroup>
            </Modal.Body>
          <Modal.Footer>
              <Button bsStyle="primary" type='submit' >Login</Button>
              <Button onClick={this.props.close}>Close</Button>
          </Modal.Footer>
        </Form>
        </Modal>
    );

  }

}

export default UserLogin;