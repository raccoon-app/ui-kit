export const CHANGE_VIEW_MODE = 'CHANGE_VIEW_MODE';
export const CHANGE_SIZE_DROPDOWN = 'CHANGE_SIZE_DROPDOWN';
export const CHANGE_FORMAT_DROPDOWN = 'CHANGE_FORMAT_DROPDOWN';
export const CLICK_DROPDOWN = 'CLICK_DROPDOWN';
export const TOGGLE_SETTING_PANEL = 'TOGGLE_SETTING_PANEL';

export function changeViewMode(mode) {
    return { type: types.CHANGE_VIEW_MODE, mode };
}

export function setSwitcherColor(type, color) {
    return { type: `SET_${type}`, color };
}

export function changeDropdownValue(name, currentValue) {
    switch (name) {
        case 'size':
            return { type: types.CHANGE_SIZE_DROPDOWN, currentValue };
        default:
            return { type: types.CHANGE_FORMAT_DROPDOWN, currentValue };

    }
}

export function toggleDropdown(name) {

    const dropdownName = name;
    return {
        type: types.CLICK_DROPDOWN, dropdownName
    }
}


export function toggleSettingPanel() {
    return { type: types.TOGGLE_SETTING_PANEL };
}

