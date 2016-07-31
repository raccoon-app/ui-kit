import { connect } from 'react-redux';
import Project from '../components/Project';
import { getProject } from '../actions/project';
import { getProjectList } from '../actions/projectSelection';

const mapStateToProps = ({ project, projectSelection }) => ({
    project,
    projectList: projectSelection,
});

const mapDispatchToProps = (dispatch) => ({
    getProject: (url) => {
        dispatch(getProject(url));
    },
    getProjectList: (id) => {
        dispatch(getProjectList(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);