import React from 'react';  //引入react组件
import {
    Grid,
} from 'react-bootstrap';

import HomeWelcome from './HomeWelcome.jsx';
import HomeEntry from './HomeEntry.jsx';

class Home extends React.Component {  //定义组件，也可以用React.createClass方法创建组件\

    render() {
        return (
            <Grid>
                <HomeWelcome />
                <HomeEntry />
            </Grid>
        );
    }
}
export default Home;   //将App组件导出