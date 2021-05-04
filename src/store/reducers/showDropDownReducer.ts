import * as actionType from '../actions/actionTypes'
import { IToggleDropdownAction } from '../actions/toggleDropdownAction'
import { IDropdownState } from '../../interfaces/store/IDropdownState'

const initialState: IDropdownState = {
  showDropdown: false,
}

const showDropDownReducer = (
  state: IDropdownState = initialState,
  action: IToggleDropdownAction
): IDropdownState => {
  switch (action.type) {
    case actionType.SHOW_DROPDOWN:
      return { ...state, showDropdown: action.showDropdown }

    default:
      return state
  }
}

export default showDropDownReducer
