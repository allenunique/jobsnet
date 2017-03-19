/**
 * Created by Allen on 2017/3/19.
 */

//noinspection JSUnresolvedVariable
import React,{Component} from 'react';


import User from './User.jsx';

// tag::userList
export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.handleNavFirst = this.handleNavFirst.bind(this);
        this.handleNavPrev = this.handleNavPrev.bind(this);
        this.handleNavNext = this.handleNavNext.bind(this);
        this.handleNavLast = this.handleNavLast.bind(this);
        // this.handleInput = this.handleInput.bind(this);
    }


    handleNav(e,id){
        this.props.refreshFixedPage(id,this.props.pageSize);
    }

    handleNavFirst(e) {
        e.preventDefault();
        this.props.onNavigate(this.props.links.first.href);
    }

    handleNavPrev(e) {
        e.preventDefault();
        this.props.onNavigate(this.props.links.prev.href);
    }

    handleNavNext(e) {
        e.preventDefault();
        this.props.onNavigate(this.props.links.next.href);
    }

    handleNavLast(e) {
        e.preventDefault();
        this.props.onNavigate(this.props.links.last.href);
    }

    render() {
        //获取从props传过来的users集合
        var users = this.props.users.map(user =>
            <User key={user.entity._links.self.href}
                  onDelete={this.props.onDelete}
                  onUpdate={this.props.onUpdate}
                  attributes={this.props.attributes}
                  user={user}/>
        );

        var navLinks = [];


        if ("prev" in this.props.links) {
            navLinks.push(<li key="prev"><a onClick={this.handleNavPrev}>Prev</a></li>);
        }

        for(let i = 0;i<this.props.totalPages;i++){
            navLinks.push(<li key={"pageNum"+i}><a onClick={(e)=>{this.handleNav(e,i)}}>{i+1}</a></li>);
        }

        if ("next" in this.props.links) {
            navLinks.push(<li key="next"><a onClick={this.handleNavNext} >Next</a></li>);
        }


        return (
            <div className="list-group">
                <a href="#" className="list-group-item active">Home</a>
                {users}
                <ul className="pagination">
                    {navLinks}
                </ul>
            </div>

        )
    }


}
// end::userList