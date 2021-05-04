import { IToggleDropdownAction } from '../store/actions/toggleDropdownAction'
import { ICompany } from './ICompany'

export interface IDropdownLinkProps {
  toggle: boolean
  showDropdown: () => IToggleDropdownAction
  hideDropdown: () => IToggleDropdownAction
  selectedCompany: ICompany
}
