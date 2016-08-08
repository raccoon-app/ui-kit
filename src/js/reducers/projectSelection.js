import { GET_PROJECT_LIST } from '../actions/projectSelection';

const initialState = [];

const projectSelection = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_PROJECT_LIST:
            return action.projectList;
        default:
            return state;
    }
};

export default projectSelection;
