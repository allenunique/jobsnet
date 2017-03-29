import React from 'react';  //引入react组件


import HomeNavbar from './HomeNavbar.jsx';

import UserLogin from '../user/UserLogin.jsx';

class App extends React.Component {  //定义组件，也可以用React.createClass方法创建组件\

    constructor(props){
        super(props);
        let authName = document.getElementById("authName").value;
        this.state = {
            showLogin:false,
            username:authName,
        };
        console.log(this.state.username);
        this.showLogin = this.showLogin.bind(this);
        this.closeLogin = this.closeLogin.bind(this);
    }

    showLogin() {
        this.setState({
            showLogin:true
        });
    }
    closeLogin() {
        this.setState({
            showLogin:false
        });
    }

   render() {

      return (
         <div>
             <HomeNavbar username={this.state.username} showLogin={this.showLogin}/>
             <UserLogin close ={this.closeLogin} show = { this.state.showLogin }/>
             {this.props.children}
         </div>
      );
   }
}
export default App;   //将App组件导出