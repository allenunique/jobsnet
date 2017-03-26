import React from 'react';  //引入react组件
import { 
  Row, 
  Col, 
  Button,
  Panel,
  Label
} from 'react-bootstrap';


class HomeEntry extends React.Component {
  render() {
    return (
      <Row>
      <Col md={6} mdPush={6}>
        <Panel>
          <Label bsStyle="default">Find companies</Label>&nbsp;          
          <h3>找公司</h3>
          <p>在这里，你可以找到多家入驻的公司。</p>
        </Panel>
      </Col>

      <Col md={6} mdPull={6}>
        <Panel>
          <Label bsStyle="default">Find jobs</Label>&nbsp;
          <h3>找工作</h3>

          <p>在这里，你可以找到各种工作，总有一个适合你</p>
        </Panel>
      </Col>
      </Row>
    )
  };

}

export default HomeEntry;