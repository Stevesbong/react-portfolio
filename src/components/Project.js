import React from 'react'

const Project = ({project}) => {
    return (
        <div>
            <div>
                <p>{project.project_name}</p>
                <p>{project.description}</p>
                <p>{project.github_link}</p>
                <p>{project.live_link}</p>
                <ul>
                    {project.image_urls.map( ( img, index ) => (
                        <li key={index}>{img}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Project
