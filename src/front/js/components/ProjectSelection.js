import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Spinner from './Spinner';
import Header from './Header';

class ProjectSelection extends Component {
    componentDidMount() {
        this.props.getProjectList();
    }

    render() {
        const { projectSelection } = this.props;
        const isFetching = !projectSelection.length;

        return (
            <div className="app">
                <Header name="My Projects" />
                <div className="main project-selection">
                    {isFetching ?
                        <Spinner />
                    :
                        <ul className="project-list">
                            {projectSelection.map((project) => (
                                <li className="project-list__item">
                                    <Link className="project-list__link" to={`project/${project._id}`}>
                                        <img className="project-list__plate" src={project.image} alt={project.title} />
                                        {project.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
            </div>
        );
    }
}

ProjectSelection.propTypes = {
    projectSelection: PropTypes.array,
    getProjectList: PropTypes.func.isRequired,
};

export default ProjectSelection;