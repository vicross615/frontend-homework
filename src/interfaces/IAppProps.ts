import { IToggleDropdownAction } from "../store/actions/toggleDropdownAction";

export interface IAppProps {
  showDropdown: () => IToggleDropdownAction;
  hideDropdown: () => IToggleDropdownAction;
}
