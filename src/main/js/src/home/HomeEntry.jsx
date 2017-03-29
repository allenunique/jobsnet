import React from 'react';  //引入react组件
import {
  Row,
  Col, 
  Panel,
  Label
} from 'react-bootstrap';

import { browserHistory } from 'react-router';

class HomeEntry extends React.Component {

  toCompanies(e){
      e.preventDefault();
      browserHistory.push("/companies");

  }

  toJobs(e){
      e.preventDefault();
      browserHistory.push("/jobs");
  }


  render() {
    return (
      <Row>
      <Col md={6} mdPush={6}>
          <Panel onClick={this.toCompanies}>
          <Label bsStyle="default">Find companies</Label>&nbsp;
          <h3>找公司</h3>
          <p>在这里，你可以找到多家入驻的公司。</p>
          </Panel>
      </Col>

      <Col md={6} mdPull={6}>
          <Panel onClick={this.toJobs}>
              <Label bsStyle="default">Find jobs</Label>&nbsp;
              <h3>找工作</h3>
              <p>在这里，你可以找到各种工作，总有一个适合你</p>
          </Panel>
      </Col>
      </Row>)
  };

}

export default HomeEntry;