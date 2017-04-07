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
  <Form horizontal>
      <FormGroup controlId="resumeSelect">
          <Col sm={12}>
          <ControlLabel>选择简历</ControlLabel>
          <FormControl componentClass="select" placeholder="选择简历">
              <option value="select">java工程师</option>
              <option value="other">新建</option>
          </FormControl>
          </Col>
      </FormGroup>
      <FormGroup controlId="edu">
      <Col sm={12}>
          <ControlLabel>教育背景</ControlLabel>
          <FormControl style={styles.myTextArea} componentClass="textarea" placeholder="教育背景" />
      </Col>
    </FormGroup>

    <FormGroup controlId="exp">
      <Col sm={12}>
      <ControlLabel>工作经验</ControlLabel>
      <FormControl style={styles.myTextArea} componentClass="textarea" placeholder="工作经验" />
      </Col>
    </FormGroup>

    <FormGroup controlId="skill">
      <Col sm={12}>
      <ControlLabel>工作技能</ControlLabel>
      <FormControl style={styles.myTextArea} componentClass="textarea" placeholder="工作技能" />
      </Col>
    </FormGroup>

    <FormGroup controlId="glory">
      <Col sm={12}>
      <ControlLabel>奖项荣誉</ControlLabel>
      <FormControl style={styles.myTextArea} componentClass="textarea" placeholder="奖项荣誉" />
      </Col>
    </FormGroup>

    <FormGroup controlId="selfknow">
      <Col sm={12}>
      <ControlLabel>自我评价</ControlLabel>
      <FormControl style={styles.myTextArea} componentClass="textarea" placeholder="自我评价" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col sm={12}>
        <Button type="submit">
          添加到我的简历
        </Button>
      </Col>
    </FormGroup>

  </Form>
    );
  }

}

const styles ={
    myTextArea:{
        height: "130px",
    }
};

export default ResumeInfo;