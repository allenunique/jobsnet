import React from 'react';
import { 
  Grid,
  Row, 
  Col, 
  Clearfix,
  Jumbotron,
  Button,
  Well,
  ButtonToolbar,
  FormGroup,
  Form,
  FormControl,
  ControlLabel,
  Checkbox
} from 'react-bootstrap';
class UserSignUp extends React.Component {

  render() {
    return (
    <Grid>
  <Form horizontal>
    <FormGroup>
      <Col componentClass={ControlLabel} sm={4}>
        几秒轻松完成注册
      </Col>
    </FormGroup>
    <FormGroup controlId='formHorizontalName'>
      <Col componentClass={ControlLabel} sm={2}>
        Name
      </Col>
      <Col sm={5}>
        <FormControl type="name" placeholder="Name" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={5}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={5}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={7}>
        <Button type="submit">
          Sign Up
        </Button>
      </Col>
    </FormGroup>
  </Form>
    </Grid>

    );
  }

}

export default UserSignUp;