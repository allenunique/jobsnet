/**
 *
 * Created by Allen on 2017/3/19.
 */

import React,{Component} from 'react';

export default class CreateCompany extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <form role="form">
                <div className="form-group">
                    <label for="inputEmail">Email</label>
                    <input type="email" className="form-control" id="inputEmail" />
                </div>
                <div className="form-group">
                    <label for="inputName">Company Name</label>
                    <input type="text" className="form-control" id="inputName" />
                </div>
                <div className="form-group">
                    <label for="inputAddress">Company Address</label>
                    <input type="text" className="form-control" id="inputAddress" />
                </div>
                <div className="form-group">
                    <label for="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" />
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" />Check me out</label>
                </div> <button type="submit" className="btn btn-default">Sign Up</button>
            </form>

        )



    }




}