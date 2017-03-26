'use strict';

import React from 'react';  //导入react相关模块
import ReactDOM from 'react-dom';
import App from './src/home/HomeApp.jsx' //导入App组件所在的模块文件


const render = () => {	
	ReactDOM.render(
		<App />,
		document.getElementById('app')
	);
};

render();
//webpack-dev-server
