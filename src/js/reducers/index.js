import { combineReducers } from 'redux';
import project from './project';
import artboard from './artboard';
import tools from './tools';
import measure from './measure';
import control from './control';
import setting from './setting';

export default combineReducers({
    project,
    artboard,
    tools,
    measure,
    control,
    setting,
});

