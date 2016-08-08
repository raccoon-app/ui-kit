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
        image: 'http://mokhovyk.com/raccoon/076FEA6F-2118-4F87-AD9F-2043812E9DF9/artboard.png',
    },
    {
        url: 'http://design.oweather.net/',
        title: 'weather 2',
        _id: 'wthr2',
        image: 'http://design.oweather.net/6D6CF3F4-6064-4B05-AFBB-EBFC79333CC2/artboard.png',
    },
    {
        url: 'http://mokhovyk.com/raccoon/',
        title: 'raccoon design 2',
        _id: 'rccn2',
        image: 'http://mokhovyk.com/raccoon/076FEA6F-2118-4F87-AD9F-2043812E9DF9/artboard.png',
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

