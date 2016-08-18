import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <form>
            <div className="Login-username-input">
                Username &nbsp;
                <input name="username"type="text" />
            </div>
            <div className="Login-password-input">
                Password &nbsp;&nbsp;
                <input name="password"type="password" />
            </div>
        </form> 
      </div>
    );
  }
}

export default Login;