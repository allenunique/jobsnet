'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import UserList from './components/user/UserList.jsx';

import entityUtils from './utils/entityUtils';
import pageUtils from './utils/pageUtils';

const stompClient = require('./websocket-listener');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {users:[],attributes:[],page: 1,totalPages:-1,pageSize:4,links:{}};

        this.onDelete = entityUtils.onDelete.bind(this);
        this.onCreate = entityUtils.onCreate.bind(this);
        this.onUpdate = entityUtils.onUpdate.bind(this);
        this.loadFromServer = entityUtils.loadFromServer.bind(this);

        this.onNavigate = pageUtils.onNavigate.bind(this);
        this.refreshCurrentPage = pageUtils.refreshCurrentPage.bind(this);
        this.refreshAndGoToLastPage = pageUtils.refreshAndGoToLastPage.bind(this);
        this.refreshFixedPage = pageUtils.refreshFixedPage.bind(this);

    }

    componentDidMount() {
        this.loadFromServer(this.state.pageSize);
        stompClient.register([
            {route: '/topic/newUser', callback: this.refreshAndGoToLastPage},
            {route: '/topic/updateUser', callback: this.refreshCurrentPage},
            {route: '/topic/deleteUser', callback: this.refreshCurrentPage}
        ]);
    };

    render() {
        return (
            <div>
                <CreateDialog attributes={this.state.attributes} onCreate={this.onCreate}/>
                <UserList onNavigate={this.onNavigate}
                          onDelete={this.onDelete}
                          onUpdate={this.onUpdate}
                          refreshFixedPage={this.refreshFixedPage}
                          users={this.state.users}
                          links={this.state.links}
                          totalPages={this.state.totalPages}
                          pageSize={this.state.pageSize}
                          attributes={this.state.attributes}/>
            </div>
        )
    }

}



// tag::createDialog
class CreateDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e){
        e.preventDefault();
        var newUser = {};
        this.props.attributes.forEach(attribute => {
            newUser[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
        });
        // console.log(newUser);

        this.props.onCreate(newUser);

        this.props.attributes.forEach(attribute => {
            ReactDOM.findDOMNode(this.refs[attribute]).value = ''; // clear out the dialog's inputs
        });
        window.location = "#";
    }

    render() {
        var inputs = this.props.attributes.map(attribute =>
            <p key={attribute}>
                <input type="text" placeholder={attribute} ref={attribute} className="field"/>
            </p>
        );

        return (
            <div>
                <button type="button"  className="btn btn-default"><a href="#createUser">Create</a></button>

                <div id="createUser" className="modalDialog">
                    <div>
                        <a href="#" title="Close" className="close">X</a>

                        <h2>Create new User</h2>

                        <form>
                            {inputs}
                            <button type="button" className="btn btn-default" onClick={this.handleSubmit}>Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
        
    }
}
// end::createDialog

// tag::updateDialog
class UpdateDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var updatedUser = {};
        this.props.attributes.forEach(attribute => {
            updatedUser[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
        });
        this.props.onUpdate(this.props.user, updatedUser);
        window.location = "#";
    }

    render() {
        var inputs = this.props.attributes.map(attribute =>
            <p key={this.props.user.entity[attribute]}>
                <input type="text" placeholder={attribute}
                       defaultValue={this.props.user.entity[attribute]}
                       ref={attribute} className="field" />
            </p>
        );

        var dialogId = "updateUser-" + this.props.user.entity._links.self.href;

        return (
                <button className="btn btn-default" type="button">
                    <a href={"#" + dialogId}>Update</a>
                    <div id={dialogId} className="modalDialog">
                        <div>
                            <a href="#" title="Close" className="close">X</a>

                            <h2>Update an user</h2>

                            <form>
                                {inputs}
                                <a onClick={this.handleSubmit}>Update</a>
                            </form>
                        </div>
                    </div>
                </button>

        )
    }

}
// end::updateDialog

//获取html页面中的标签并且渲染
ReactDOM.render(
    <App />,
    document.getElementById('react')
);
