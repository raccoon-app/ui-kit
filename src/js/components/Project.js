import React, { PropTypes, Component } from 'react';
import Nav from '../containers/Nav';
import Header from './Header';
import Artboard from '../containers/Artboard';
import Tools from '../containers/Tools';
import ArtboardTitle from '../containers/ArtboardTitle';
import Spinner from './Spinner';

class Project extends Component {
    componentDidMount() {
        const { projectList } = this.props;
        const { id } = this.props.params;

        const activeProject = projectList.find(item => (
            item._id === id)
        );

        if (activeProject && activeProject.url) {
            this.props.getProject(activeProject.url);
        } else {
            console.log(id)
            this.props.getProjectList(id);
        }
    }

    render() {
        const { project } = this.props;
        const isFetching = !project.folders.length;

        return (
            <div className="app">
                <Header name={project.name} headerInfo={<ArtboardTitle />} />

                {isFetching ?
                    <div className="main">
                        <Spinner />
                    </div>
                    :
                    <div className="main">
                        <Nav />
                        <Artboard />
                        <Tools />
                    </div>
                }
            </div>
        );
    }
}

Project.propTypes = {
    params: PropTypes.object,
    project: PropTypes.object.isRequired,
    projectList: PropTypes.array.isRequired,
    getProject: PropTypes.func.isRequired,
    getProjectList: PropTypes.func.isRequired,
};

export default Project;