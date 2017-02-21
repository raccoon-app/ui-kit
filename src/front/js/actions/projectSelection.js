import { getProject } from './project';
import { projectList as mockProjectList } from '../__mockData';

export const GET_PROJECT_LIST = 'GET_PROJECT_LIST';

export function getProjectList(activeProjectId = null) {
    return dispatch => {
        return fetch('', {})
            .then((response) => {
                // mock response
                const projectList = mockProjectList;

                dispatch({
                    type: GET_PROJECT_LIST,
                    projectList,
                });
            })
            .then((response) => {
                // mock response
                const projectList = mockProjectList;

                if (activeProjectId) {
                    const activeProject = projectList.find(item => (
                        item._id === activeProjectId)
                    );

                    if (activeProject && activeProject.url) {
                        dispatch(getProject(activeProject.url));
                    }
                }
            })
            .catch(error => {
                console.log(error);
            });
    };
}

