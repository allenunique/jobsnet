import React from 'react';

import {
    ListGroup,
    ListGroupItem,
    Grid
} from 'react-bootstrap';
import Company from './Company.jsx';
export default class CompanyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }


    render() {
        let companies = this.props.data.map((company)=>
            //key={company.entity._links.self.href}
            <Company key={company.entity._links.self.href} company={company}>Info</Company>
        );

        return (
            <Grid>
                <ListGroup>
                    {companies}
                </ListGroup>
            </Grid>
        );
    }
}

