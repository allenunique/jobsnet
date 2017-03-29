import React from 'react';

import { 
  ListGroup,
  ListGroupItem,
  Grid
} from 'react-bootstrap';

export default class JobList extends React.Component {
  constructor(props){
      super(props);
  }



  render(){
    let jobs = this.props.data.map((job)=>
        <ListGroupItem key={job.entity._links.self.href} header={job.entity.name}>{job.entity.detail}</ListGroupItem>
    );

    return (
      <Grid>
        <ListGroup>
          {jobs}
        </ListGroup>
      </Grid>
    );
  }
}

