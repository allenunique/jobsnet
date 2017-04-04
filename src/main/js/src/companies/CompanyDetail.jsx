import React from 'react';
import {
    PageHeader,
    Grid,
    Row,
    Col,
    Button,
} from 'react-bootstrap';
import client from '../../api/client';

import JobList from '../jobs/JobList.jsx';

import {browserHistory} from 'react-router'

export default class CompanyDetail extends React.Component {

    constructor(props) {
        super(props);
        this.loadFromServer();
        this.state = {
            data: [],
        }
    }

    loadFromServer() {
        client({
            method: 'GET',
            path: this.props.company._links.jobs.href,
        }).then((jobs)=> {
            this.setState({
                data: jobs.entity._embedded.jobs
            });
        })
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <PageHeader >
                            {this.props.company.name}
                            <small>{'   '}Info</small>
                        </PageHeader>
                        <JobList data={this.state.data }/>
                    </Col>
                    <Col xs={6} md={4}>
                        <PageHeader >
                            <Button>联系我们</Button>
                        </PageHeader>
                    </Col>
                </Row>
            </Grid>
        );
    }
}