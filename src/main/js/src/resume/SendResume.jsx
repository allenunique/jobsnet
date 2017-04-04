import React from 'react';
import {Grid,Button,Panel} from 'react-bootstrap';

export default class SendResume extends React.Component {

    constructor(props){
        super(props);
        this.state={
            resumeId:1
        }
    }

    onHandleSubmit(e){
        e.preventDefault();
        alert("Hello World");
    }

    render() {
        return (
          <Grid>
            <h1>请确认您的简历无误~<Button onClick={this.onHandleSubmit}>确认发送</Button></h1>
              <Panel>
                  您的将要应聘___{this.props.job.name}
              </Panel>
          </Grid>);
    }
}