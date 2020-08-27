import React from 'react'

const Project = ({project}) => {
    return (
        <div className='cell'>
            <div>
                {/* <p>{project.project_name}</p>
                <p>{project.description}</p>
                <p>{project.github_link}</p>
                <p>{project.live_link}</p> */}
                <img className='thumbnail' src={project.image_thumbnail_urls} alt='' />
                <h5>{project.project_name}</h5>
                {/* <ul>
                    {project.image_urls.map( ( img, index ) => (
                        <li key={index}>{img}</li>
                    ))}
                </ul> */}
            </div>
        </div>
    )
}

export default Project
