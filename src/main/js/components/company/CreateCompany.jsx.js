/**
 *
 * Created by Allen on 2017/3/19.
 */

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import client from '../../api/client';
import follow from '../../api/follow';

const root = 'api';

export default class CreateCompany extends Component {

    constructor(props){
        super(props);
        this.state = {attributes:[]};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loadAttributes = this.loadAttributes.bind(this);
    }

    componentDidMount() {
        this.loadAttributes();
    }

    loadAttributes() {
        follow(client,root,[
            {rel:'companies'}
        ]).then(companyCollection => {
            return client({
                method:'GET',
                path:companyCollection.entity._links.profile.href,
                headers:{'Accept':'application/schema+json'}
            }).then(schema => {
                this.setState({
                    attributes: Object.keys(schema.entity.properties),
                });
            });
        })
    }

    checkSubmit(newCompany){
        if(newCompany['name'] == ''){
            return false;
        }
        if(newCompany['address'] == ''){
            return false;
        }
        if(newCompany['website'] == ''){
            return false;
        }
    }

    handleSubmit(e){
        e.preventDefault();
        var newCompany = {};

        this.state.attributes.forEach(attribute => {
            newCompany[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
        });
        if(this.checkSubmit(newCompany)){
            this.onCreate(newCompany);
            this.state.attributes.forEach(attribute => {
                ReactDOM.findDOMNode(this.refs[attribute]).value = ''; // clear out the dialog's inputs
            });
            window.location = "#";
        }else{
            alert("请填写必要选项！");
        }


    }


    onCreate(newCompany) {
        follow(client, root, ['companies']).then(response => {
            return client({
                method: 'POST',
                path: response.entity._links.self.href,
                entity: newCompany,
                headers: {'Content-Type': 'application/json'}
            })
        }).done(()=>{
            alert("注册成功，请前去登陆");
        });
    }

    render(){
        var inputs = this.state.attributes.map(attribute =>
            <div key={attribute} className="form-group">
                <label htmlFor="inputName">{attribute}</label>
                <input type="text" placeholder={attribute} ref={attribute} className="form-control"/>
            </div>
        );

        return (
            <form role="form">
                { inputs }
                <button type="submit" onClick={this.handleSubmit} className="btn btn-default">Sign Up</button>
            </form>

        )



    }




}