import React from 'react';
import {PageHeader,Grid,Row,Col,Button} from 'react-bootstrap';

import { browserHistory } from 'react-router'

export default class JobDetail extends React.Component {

    constructor(props){
        super(props);
        this.onSendResume = this.onSendResume.bind(this);
    }

    onSendResume(e){
        e.preventDefault();
        browserHistory.push({
            pathname:'/sendResume',
            state:this.props.job
        });
    }

    render(){
        return (
        <Grid>
            <Row className="show-grid">
                <Col xs={12} md={8}>
                    <PageHeader >
                        {this.props.job.name}
                        <small>{"    "}{this.props.job.address}{"    "}{this.props.job.salary}万</small>
                    </PageHeader>
                </Col>
                <Col xs={6} md={4}>
                    <PageHeader >
                        <Button onClick={this.onSendResume}>投放简历</Button>{'    '}
                        <Button>联系我们</Button>
                    </PageHeader>
                </Col>
            </Row>

        </Grid>
        );
    }
}