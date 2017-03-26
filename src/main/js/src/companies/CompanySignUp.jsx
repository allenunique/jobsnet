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
class CompanySignUp extends React.Component {

  render() {
    return (
    <Grid>
  <Form horizontal formAction='#'>
    <FormGroup>
      <Col componentClass={ControlLabel} sm={4}>
        几秒轻松完成注册
      </Col>
    </FormGroup>
    <FormGroup controlId='formHorizontalName'>
      <Col componentClass={ControlLabel} sm={2}>
        公司名称
      </Col>
      <Col sm={5}>
        <FormControl type="name" placeholder="公司名称" />
      </Col>
    </FormGroup>

    <FormGroup controlId="website">
      <Col componentClass={ControlLabel} sm={2}>
        公司网站
      </Col>
      <Col sm={5}>
        <FormControl type="text" placeholder="网站" />
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

export default CompanySignUp;