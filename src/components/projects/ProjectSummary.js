import React from 'react';
import moment from 'moment';

function ProjectSummary({project}) {
    return (
        <div className="card z-depth-0 blue-grey darken-1 project-summary">
            <div className="card-content white-text">
                <span className="card-title">{project.title}</span>
                    <p>Posted by {project.authorFirstName + ' '+ project.authorLastName}</p>
                    <p>{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default ProjectSummary