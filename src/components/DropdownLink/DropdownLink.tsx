import React from 'react'
import { connect } from 'react-redux'
import { toggleDropdownAction } from '../../store/actions/toggleDropdownAction'
import { IDropdownLinkProps } from '../../interfaces/IDropdownLinkProps'
import { IState } from '../../interfaces/store/IState'

const DropdownLink: React.FC<IDropdownLinkProps> = ({
  toggle,
  showDropdown,
  hideDropdown,
  selectedCompany,
}: IDropdownLinkProps) => {
  const toggleDropdown = (): void => {
    toggle ? hideDropdown() : showDropdown()
  }

  return (
    <div className="nav__link" onClick={() => toggleDropdown()}>
      <div className="nav__link-text-wrapper">
        <div className="nav__link-text">Elon Musk</div>
        <div className="nav__link-subtext">{selectedCompany.value}</div>
      </div>
      <i className="material-icons-outlined nav__link-icon">settings</i>
    </div>
  )
}

const mapStateToProps = (state: IState) => ({
  selectedCompany: state.company.selectedCompany,
  toggle: state.dropdown.showDropdown,
})

const mapDispatchToProps = (dispatch: any) => ({
  hideDropdown: () => dispatch(toggleDropdownAction(false)),
  showDropdown: () => dispatch(toggleDropdownAction(true)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DropdownLink)
