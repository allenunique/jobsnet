/**
 * Created by Allen on 2017/3/19.
 */

//noinspection JSUnresolvedVariable
import React,{ Component } from 'react';

// tag::user
export default class User extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        //noinspection JSUnresolvedVariable
        this.props.onDelete(this.props.user);
    }


    render() {
        return (
            <div className="list-group-item">
                {this.props.user.entity.name}
                &emsp;
                {/*{this.props.employee.entity.manager.name}*/}
                &emsp;
                &emsp;
                &emsp;
                <div className="btn-group">
                    {/*<UpdateDialog attributes={this.props.attributes} user={this.props.user} onUpdate={this.props.onUpdate}/>*/}
                    <button type="button" className="btn btn-default"  onClick={this.handleDelete}>
                        Delete</button>
                </div>
            </div>
        );
    }


}
// end::user