import React from 'react';  //引入react组件
import {
  Button,
  Row,
  Col, 
  Panel,
  Label
} from 'react-bootstrap';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import { browserHistory } from 'react-router'

class HomeEntry extends React.Component {

  render() {
    return (
      <Row>
      <Col md={6} mdPush={6}>
          <LinkContainer to="/companies">
                <Panel>
                  <Label bsStyle="default">Find companies</Label>&nbsp;
                  <h3>找公司</h3>
                  <p>在这里，你可以找到多家入驻的公司。</p>
              </Panel>
          </LinkContainer>

      </Col>

      <Col md={6} mdPull={6}>
          <LinkContainer to="/jobs">
              <Panel>
                  <Label bsStyle="default">Find jobs</Label>&nbsp;
                  <h3>找工作</h3>
                  <p>在这里，你可以找到各种工作，总有一个适合你</p>
              </Panel>
          </LinkContainer>
      </Col>
      </Row>
    )
  };

}

export default HomeEntry;