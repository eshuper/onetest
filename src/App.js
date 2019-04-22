import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from "./components/login";
import Profile from "./components/profile";
import ErrorBoundary from "./components/ErrorBoundary/index"

class App extends Component {
  state = {
    isAuth: false
  }
  login = () => {
    this.setState({isAuth:true})
  }
  logout = () => {
    this.setState({isAuth:false})
  }
  render() {
    
    return (
      <ErrorBoundary>
        <div className="App">
          <Login
            onLogin={this.login}
            onLogout={this.logout}
          />
          <Profile auth = {this.state.isAuth}

          />
        </div>
      </ErrorBoundary>
    );
    
  }
}

export default App;
