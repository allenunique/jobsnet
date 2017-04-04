import React from 'react';
import { 
  Grid,
  Col,
  Button,
  FormGroup,
  Form,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';

class ResumeInfo extends React.Component {

  render() {
    return (
    <Grid>
  <Form horizontal>
      <FormGroup controlId="edu">
      <Col smOffset={2} sm={7}>
          <ControlLabel>教育背景</ControlLabel>
          <FormControl componentClass="textarea" placeholder="教育背景" />
      </Col>
    </FormGroup>

    <FormGroup controlId="exp">
      <Col smOffset={2} sm={7}>
      <ControlLabel>工作经验</ControlLabel>
      <FormControl componentClass="textarea" placeholder="工作经验" />
      </Col>
    </FormGroup>

    <FormGroup controlId="skill">
      <Col smOffset={2} sm={7}>
      <ControlLabel>工作技能</ControlLabel>
      <FormControl componentClass="textarea" placeholder="工作技能" />
      </Col>
    </FormGroup>

    <FormGroup controlId="glory">
      <Col smOffset={2} sm={7}>
      <ControlLabel>奖项荣誉</ControlLabel>
      <FormControl componentClass="textarea" placeholder="奖项荣誉" />
      </Col>
    </FormGroup>

    <FormGroup controlId="selfknow">
      <Col smOffset={2} sm={7}>
      <ControlLabel>自我评价</ControlLabel>
      <FormControl componentClass="textarea" placeholder="自我评价" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={7}>
        <Button type="submit">
          添加到我的简历
        </Button>
      </Col>
    </FormGroup>

  </Form>
    </Grid>
    );
  }

}

export default ResumeInfo;