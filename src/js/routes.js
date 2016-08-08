import React from 'react';
import { Route } from 'react-router';
import { IndexRoute } from 'react-router';
import Auth from './containers/Auth';
import ProjectSelection from './containers/ProjectSelection';
import Project from './containers/Project';


export default () => (
    <Route path="/" >
        <IndexRoute component={Auth} />
        <Route path="projects" component={ProjectSelection} />
        <Route path="project/:id" component={Project} />
    </Route>
);
