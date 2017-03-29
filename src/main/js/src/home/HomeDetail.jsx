import React from 'react';  //引入react组件
import {
    Grid,
} from 'react-bootstrap';

import HomeWelcome from './HomeWelcome.jsx';
import HomeEntry from './HomeEntry.jsx';

class Home extends React.Component {
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