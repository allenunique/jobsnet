'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import CreateCompany from './components/company/CreateCompany.jsx';


class App extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {

    };

    render() {
        return (
            <div>
                <CreateCompany/>
            </div>
        )
    }

}


//获取html页面中的标签并且渲染
ReactDOM.render(
    <App />,
    document.getElementById('react')
);
