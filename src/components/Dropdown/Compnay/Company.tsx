import React from 'react'
import { selectCompanyAction } from '../../../store/actions/selectCompanyAction'
import { connect } from 'react-redux'
import { toggleDropdownAction } from '../../../store/actions/toggleDropdownAction'
import { ICompanyProps } from '../../../interfaces/ICompanyProps'
import { ICompany } from '../../../interfaces/ICompany'
import { IState } from '../../../interfaces/store/IState'

const Company: React.FC<ICompanyProps> = ({
  onCompanyChange,
  selectedCompany,
  company,
  hideDropdown,
}: ICompanyProps) => {
  const onCompanyChanged = (): void => {
    onCompanyChange(company)
    hideDropdown()
  }

  return (
    <div
      className={
        `dropdown__company--item ` +
        (company.value === selectedCompany.value ? 'selected-company' : '')
      }
      onClick={() => onCompanyChanged()}
    >
      <span> {company.value}</span>
      {company.value === selectedCompany.value && (
        <i className="material-icons-outlined dropdown__company--icon">done</i>
      )}
    </div>
  )
}

const mapStateToProps = (state: IState) => ({
  selectedCompany: state.company.selectedCompany,
})

const mapDispatchToProps = (dispatch: any) => ({
  onCompanyChange: (company: ICompany) =>
    dispatch(selectCompanyAction(company)),
  hideDropdown: () => dispatch(toggleDropdownAction(false)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Company)
