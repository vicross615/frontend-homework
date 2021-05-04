import {IToggleDropdownAction} from '../store/actions/toggleDropdownAction';

export interface IDropdownLinkProps {
    toggle: boolean;
    showDropdown: (() => (IToggleDropdownAction));
    hideDropdown: (() => (IToggleDropdownAction));
    selectedCompany: any;
}
