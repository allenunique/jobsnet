import React from 'react';
import {
    ListGroupItem,
} from 'react-bootstrap';

import {browserHistory} from 'react-router';

export default class Company extends React.Component {
    constructor(props){
        super(props);
        this.showDetail = this.showDetail.bind(this);
    }

    showDetail(e){
        e.preventDefault();
        browserHistory.push({
            pathname:'/companyDetail',
            state:this.props.company.entity
        });
    }

    render(){
        return (
            <ListGroupItem onClick={this.showDetail} header={this.props.company.entity.name}>Info</ListGroupItem>
        )
    }


}