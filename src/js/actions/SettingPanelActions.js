/**
 * Created by Viktoriia_Goncharuk on 7/25/2016.
 */
import { TOGGLE_SETTING_PANEL } from '../constants/ActionTypes';

export function toggleSettingPanel() {
    return { type: TOGGLE_SETTING_PANEL };
}

export function setSwitcherColor(type, color) {
    return { type: `SET_${type}`, color };
}