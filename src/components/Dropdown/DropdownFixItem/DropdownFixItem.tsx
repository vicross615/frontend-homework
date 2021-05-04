import React from 'react'
import { IDropdownFixItemProps } from '../../../interfaces/IDropdownFixItemProps'

const DropdownFixItem: React.FC<IDropdownFixItemProps> = ({
  text,
  icon,
}: IDropdownFixItemProps) => {
  const className: string = `dropdown__item ${
    icon === 'logout' ? 'color-red' : ''
  }`

  return (
    <div className={className}>
      <i className="material-icons-outlined dropdown__item--icon">{icon}</i>
      {text}
    </div>
  )
}

export default DropdownFixItem
