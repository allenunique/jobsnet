/**
 * Created by Allen on 2017/3/29.
 */
'use strict';

import React from 'react';  //导入react相关模块
import { Router, Route, hashHistory,IndexRoute } from 'react-router'

//导航栏还有登陆按钮
import HomeNavAndLogin from './HomeNavAndLogin.jsx'
import Home from './HomeDetail.jsx';


//导入工作，和公司的列表
import JobApp from '../jobs/JobApp';
import CompanyApp from '../companies/CompanyApp.jsx';

import { browserHistory } from 'react-router'

export default class App extends React.Component{

    render(){
        return (
          <div>
            <Router history={browserHistory}>
                <Route exact path="/" component={HomeNavAndLogin}>
                    {/*默认路由*/}
                    <IndexRoute component={Home}/>
                    {/*三个路由*/}
                    <Route path="/home" component={Home}/>
                    <Route path="/jobs" component={JobApp}/>
                    <Route path="/companies" component={CompanyApp}/>
                </Route>
            </Router>
          </div>);
    }
}
