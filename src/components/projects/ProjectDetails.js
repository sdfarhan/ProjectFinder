import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

function ProjectDetails({ project, auth }) {

    if(!auth.uid) return <Redirect to='/signin' />

    if(project){
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content grey-text">
                        <span className="card-title">{project.title}</span>
                            <p>{project.content}</p>
                    </div>
                    <div className="card-action">
                        <div>Created By {project.authorFirstName} {project.authorLastName}</div>
                        <div>12th August</div>
                    </div>
                </div>
            </div>
        )
    } else{
        return (
            <div className="container center">
                <h5>Loading Project Details</h5>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;  
    return {
        project,
        auth: state.firebase.auth
    }
}

export default compose(
    firestoreConnect(() => ['projects']),
    connect(mapStateToProps)
    )(ProjectDetails)