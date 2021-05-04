import React from 'react'
import { connect } from 'react-redux'
import DropdownFixItem from './DropdownFixItem/DropdownFixItem'
import Company from './Compnay/Company'
import { IDropdownProps } from '../../interfaces/IDropdownProps'
import { IState } from '../../interfaces/store/IState'

const Dropdown: React.FC<IDropdownProps> = ({ companies }: IDropdownProps) => {
  return (
    <div className="dropdown">
      <div className="dropdown--title">Your companies</div>
      <div className="dropdown__company">
        {companies.map((item) => (
          <Company key={item.id} company={item} />
        ))}
      </div>
      <DropdownFixItem icon="phone_iphone" text="Get the mobile app" />
      <DropdownFixItem icon="people" text="Community" />
      <DropdownFixItem icon="class" text="Knowledge base" />
      <div className="dropdown__item--border"></div>
      <DropdownFixItem icon="settings" text="Settings" />
      <DropdownFixItem icon="logout" text="Log out" />
    </div>
  )
}

const mapStateToProps = (state: IState) => ({
  companies: state.company.companies,
})

export default connect(mapStateToProps)(Dropdown)
