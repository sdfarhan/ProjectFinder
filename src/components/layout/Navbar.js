import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SingedinLinks from './SingedinLinks';
import SingedoutLinks from './SingedoutLinks';
import { connect } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

class Navbar extends Component{
    render(){
        const { auth, profile } = this.props; 
        const links = auth.uid ? <SingedinLinks profile={profile}/> : <SingedoutLinks/>;
        return (
            <>
                <nav className=" grey darken-3">
                    <div className="nav-wrapper">
                        <div  className="container">
                            <Link to='/' className="brand-logo">Project Finder</Link>
                            <Link to='#' data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                            <ul className="right hide-on-med-and-down">
                                {isLoaded(auth) && links}
                            </ul>
                        </div>
                    </div>
                </nav>
                <ul class="sidenav" id="mobile-demo">
                    {isLoaded(auth) && links}
                </ul>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile 
    }
}

export default connect(mapStateToProps)(Navbar);