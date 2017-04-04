import React from 'react';

import { 
  ListGroup,
  Grid,
} from 'react-bootstrap';

import Job from './Job.jsx';

export default class JobList extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    let jobs = this.props.data.map((job)=>
        <Job key={job._links.self.href} job = {job}/>
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

