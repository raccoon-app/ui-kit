import React from 'react';
import { Route } from 'react-router';
import { IndexRoute } from 'react-router';
import Auth from './containers/Auth';
import ProjectList from './components/ProjectList';
import Project from './components/Project';


export default () => (
    <Route path="/" >
        <IndexRoute component={Auth} />
        <Route path="select" component={ProjectList} />
        <Route path="project/:id" component={Project} />
    </Route>
);
