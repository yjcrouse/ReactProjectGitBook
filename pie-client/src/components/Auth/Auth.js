import React, { Component } from 'react';

import './Auth.css';

class Auth extends Component {
    constructor() {
        super();
        this.state = {
            login: true,
            firstName:'',
            lastName: '',
            email:'',
            password:'',
        } 
    }

        handleChange = (event) => {
            this.setState({[event.target.id]: event.target.value})
        }
    loginToggle = (e) => {
        e.preventDefault();
        const _login = this.state.login;
        this.setState({
            login: !_login,
            firstName: '',
            lastName: '',
            email: '',
            password: '',


        })
    }

    render() {
        let title = this.state.login ? 'Login' : 'Signup'
        let signupFields = this.state.login
            ? null
            : (
                <React.Fragment>
                    <label htmlFor="firstName">First Name:</label><br />
                    <input onChange ={this.handleChange} type="text" id="firstName" /><br />
                    <label htmlFor="lastName">Last Name:</label><br />
                    <input onChange={this.handleChange} type="text" id="lastName" /><br />
                </React.Fragment>
            )
        return (
            <form className="cardLike" onSubmit={this.handleSubmit}>
                <h1>{title}</h1>
                {signupFields}
                <label htmlFor="email">Email:</label><br />
                <input onChange ={this.handleChange} type="text" id="email" /><br />
                <label htmlFor="password">Password:</label><br />
                <input onChange={this.handleChange} type="password" id="password" /><br />
                <button onClick={this.loginToggle}>Login/Signup Toggle</button><br />
                <button type="submit">Submit User Data</button>
            </form>
        )
    }
}

export default Auth;