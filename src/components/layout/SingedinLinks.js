import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
function SingedinLinks(props) {
    return (
        <>
            <li><Link to='/createproject'>New Project</Link></li>
            <li><Link to='/signin' onClick={props.signOut}>Log Out</Link></li>
            <li><Link to='/' className="btn btn-floating pink lighten-1">{props.profile.initials}</Link></li>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut : () => dispatch(signOut())
    } 
}

export default connect(null, mapDispatchToProps)(SingedinLinks)
