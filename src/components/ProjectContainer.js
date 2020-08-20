import React, { Component } from 'react';
import Data from '../Data.json';

export default class ProjectContainer extends Component {

    state = {
        data: Data
    }
    render() {
        const { data } = this.state;
        console.log(data.projects)
        return (
            <div>
                {data.projects.map( ( project,index ) => (
                    <div key={index}>
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
                ))}
            </div>
        )
    }
}
