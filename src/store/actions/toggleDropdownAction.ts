import * as actionTypes from './actionTypes';

export interface IToggleDropdownAction {
    type: string;
    showDropdown: boolean;
}

export const toggleDropdownAction = (toggle: boolean): IToggleDropdownAction => ({
    type: actionTypes.SHOW_DROPDOWN,
    showDropdown: toggle,
});
