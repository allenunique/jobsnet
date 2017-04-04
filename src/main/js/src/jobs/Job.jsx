import React from 'react';
import {
    ListGroupItem,
} from 'react-bootstrap';

import {browserHistory} from 'react-router';

export default class Job extends React.Component {
    constructor(props){
        super(props);
        this.showDetail = this.showDetail.bind(this);
    }

    showDetail(e){
        e.preventDefault();
        browserHistory.push({
            pathname:'/jobsDetail',
            state:this.props.job
        });
    }

    render(){
        return (
            <ListGroupItem  header={this.props.job.name} onClick={this.showDetail}>
                {this.props.job.salary+"万 "} | {" "+this.props.job.degree+" "} | {" "+this.props.job.address}
            </ListGroupItem>
        )
    }


}