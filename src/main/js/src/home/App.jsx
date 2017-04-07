/**
 * Created by Allen on 2017/3/29.
 */
'use strict';

import React from 'react';  //导入react相关模块
import {Router, IndexRoute, Route, browserHistory} from 'react-router'

//导航栏还有登陆按钮
import HomeNavAndLogin from './HomeNavAndLogin.jsx'
import Home from './HomeDetail.jsx';


//导入工作，和公司的列表
import JobApp from '../jobs/JobApp';
import JobDetail from '../jobs/JobDetail.jsx';
import CompanyApp from '../companies/CompanyApp.jsx';
import CompanyDetail from '../companies/CompanyDetail.jsx';
import UserDetail from '../user/UserDetail.jsx';

import SendResume from '../resume/SendResume.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={browserHistory}>
                    <Route path="/" component={HomeNavAndLogin}>
                        <IndexRoute component={Home}/>
                        <Route path="jobs" component={JobApp}/>
                        <Route path="jobsDetail" component={(match)=> {
                            return <JobDetail job={match.location.state}/>
                        }}/>
                        <Route path="sendResume" component={(match)=> {
                            return <SendResume job={match.location.state}/>
                        }}/>
                        <Route path="companies" component={CompanyApp}/>
                        <Route path="companyDetail" component={(match)=> {
                            return <CompanyDetail company={match.location.state}/>
                        }}/>
                        <Route path="userDetail" component={(match)=> {
                            return <UserDetail />
                        }}/>
                    </Route>
                </Router>
            </div>);
    }
}
