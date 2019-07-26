import React, { Component } from 'react';

class Logout extends Component {

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.logout.push("/");
    }
    render(){
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <div className="input-field">
                        <button className="btn">Logout</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Logout
