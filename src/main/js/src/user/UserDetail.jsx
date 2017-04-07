import React from 'react';
import {
    Tab,
    Row,
    Col,
    Nav,
    NavItem,
    Grid,
} from 'react-bootstrap';

import ResumeInfo from '../resume/ResumeInfo.jsx';
import UserInfo from './UserInfo.jsx';


export default class UserDetail extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid>
                <Tab.Container id="left-tabs-example" defaultActiveKey="info">
                    <Row className="clearfix">
                        <Col sm={3}>
                            <Nav bsStyle="pills" stacked>
                                <NavItem eventKey="info">
                                    My Info
                                </NavItem>
                                <NavItem eventKey="resumes">
                                    My Resumes
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm={6}>
                            <Tab.Content animation>
                                <Tab.Pane eventKey="info">
                                    <UserInfo />
                                </Tab.Pane>
                                <Tab.Pane eventKey="resumes">
                                    <ResumeInfo />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Grid>
        )
    }

}