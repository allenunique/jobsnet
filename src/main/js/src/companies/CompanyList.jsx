import React from 'react';

import { 
  ListGroup,
  ListGroupItem,
  Grid
} from 'react-bootstrap';

export default class CompanyList extends React.Component {
  render(){
    return (
      <Grid>
        <ListGroup>
          <ListGroupItem header="Heading 1">Some body text</ListGroupItem>
          <ListGroupItem header="Heading 2" href="#">Linked item</ListGroupItem>
          <ListGroupItem header="Heading 3" bsStyle="danger">Danger styling</ListGroupItem>
        </ListGroup>
      </Grid>
    );
  }
}

