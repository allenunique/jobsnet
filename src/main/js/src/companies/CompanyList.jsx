import React from 'react';

import {
    ListGroup,
    ListGroupItem,
    Grid
} from 'react-bootstrap';

export default class CompanyList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
        };
    }


    render(){
        let companies = this.props.data.map((company)=>
            <ListGroupItem key={company.entity._links.self.href} header={company.entity.name}>Info</ListGroupItem>
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

