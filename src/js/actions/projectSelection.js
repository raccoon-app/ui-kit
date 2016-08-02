import { getProject } from './project';

export const GET_PROJECT_LIST = 'GET_PROJECT_LIST';

const projectList = [
    {
        url: 'http://design.oweather.net/',
        title: 'weather',
        _id: 'wthr',
        image: 'http://design.oweather.net/6D6CF3F4-6064-4B05-AFBB-EBFC79333CC2/artboard.png',
    },
    {
        url: 'http://mokhovyk.com/raccoon/',
        title: 'raccoon design',
        _id: 'rccn',
        image: 'http://design.oweather.net/6D6CF3F4-6064-4B05-AFBB-EBFC79333CC2/artboard.png',
    },
];

export function getProjectList(activeProjectId = null) {
    return dispatch => {
        return fetch('', {})
            .then((response) => {
                dispatch({
                    type: GET_PROJECT_LIST,
                    projectList,
                });
            })
            .then((response) => {
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

