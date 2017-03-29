'use strict';

import React from 'react';  //导入react相关模块
import ReactDOM from 'react-dom';


import { Router, Route, hashHistory,IndexRoute,Link } from 'react-router'


import App from './src/home/HomeApp.jsx' //导入App组件所在的模块文件

import Home from './src/home/Home.jsx';

// import CompanySignUp from './src/companies/CompanySignUp.jsx';

import JobList from './src/jobs/JobList.jsx';

const render = () => {
	ReactDOM.render(
	    <div>
            <Router history={hashHistory}>
                <Route exact path="/" component={App}>
                    <IndexRoute component={Home}/>

                    <Route path="/jobs" component={JobList}/>
                    <Route path="/home" component={Home}/>
                </Route>
            </Router>
        </div>,
		document.getElementById('app')
	);
};

render();


//webpack-dev-server
