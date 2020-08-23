import React, { Component } from 'react';
import Data from '../Data.json';
import Project from './Project';

export default class ProjectContainer extends Component {

    state = {
        data: Data
    }
    render() {
        const { data } = this.state;
        console.log(data.projects)
        return (
            <div>
                { data.projects.map( ( project, index ) => 
                    <Project project={project} key={index} />
                ) }
            </div>
        )
    }
}