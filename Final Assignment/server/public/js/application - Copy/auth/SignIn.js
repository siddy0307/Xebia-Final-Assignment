import React, { Component } from 'react';

class SignIn extends Component {
    state = {
        username:'',
        password:'',
        // firstName:'',
        // lastName:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.value]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.history.push('/Search');
    }
    render(){
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5>Sign In</h5>
                    <div className="input-field">
                        <label type="username">User Name</label>
                        <input type="username" id="username" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label type="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}></input>
                    </div>
                    {/* <div className="input-field">
                        <label type="firstname">First Name</label>
                        <input type="firstname" id="firstname" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label type="lastname">Last Name</label>
                        <input type="lastname" id="lastname" onChange={this.handleChange}></input>
                    </div> */}
                    <div className="input-field">
                        <button className="btn">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
