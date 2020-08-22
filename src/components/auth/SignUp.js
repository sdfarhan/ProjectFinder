import React, { Component } from 'react';
import { connect } from 'react-redux' 
import { Redirect } from 'react-router-dom';
import { isLoaded } from 'react-redux-firebase';
import { signUp } from '../../store/actions/authActions';

class SignOut extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }
    render() {
        const { auth, authError } = this.props;

        const comp = auth.uid ? <Redirect to='/' /> :
        <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName" >First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field" >
                        <label htmlFor="lastName" >Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email" >Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password" >Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Register</button>
                    </div>
                    <div className="red-text center">
                        { authError ? <p>{authError}</p> : null }
                    </div>
                </form>
            </div>
        
        return (
            <>
                { isLoaded(auth) && comp }
            </>      
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        authError : state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signUp : (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignOut)
