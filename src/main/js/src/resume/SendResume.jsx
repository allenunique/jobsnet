import React from 'react';
import {Grid, Button, Panel} from 'react-bootstrap';

import ResumeInfo from './ResumeInfo.jsx';
export default class SendResume extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resumeId: 1
        };
        this.onHandleSubmit = this.onHandleSubmit.bind(this);

    }

    onHandleSubmit(e) {
        e.preventDefault();
        alert("Hello World"+this.state.resumeId);
    }

    render() {
        return (
            <Grid>
                <h1>请确认您的简历无误~</h1>
                <Panel>
                    您的将要应聘<h3>{this.props.job.name}</h3>来自某某公司
                </Panel>
                <ResumeInfo />
                <Button onClick={this.onHandleSubmit}>确认发送</Button>
            </Grid>);
    }
}