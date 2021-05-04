import { IToggleDropdownAction } from '../store/actions/toggleDropdownAction'

export interface IAppProps {
    showDropdown: boolean
    hideDropdown: () => IToggleDropdownAction
}
