import React from 'react'

const Project = ({project}) => {
    return (
        <div className='cell'>
            <a href={`project/${project.id}`}>
                <img className='thumbnail' src={project.image_thumbnail_urls} alt='' />
                <h5 style={{zIndex: 1000, position: "relative"}}>{project.project_name}</h5>
                {/* <ul>
                    {project.image_urls.map( ( img, index ) => (
                        <li key={index}>{img}</li>
                    ))}
                </ul> */}
            </a>
        </div>
    )
}

export default Project
