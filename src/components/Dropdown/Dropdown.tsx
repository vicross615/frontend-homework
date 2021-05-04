import React from 'react';
import {connect} from 'react-redux';
import DropdownFixItem from './DropdownFixItem/DropdownFixItem';
import Company from './Compnay/Company';
import {IDropdownProps} from '../../interfaces/IDropdownProps';
import {IState} from '../../interfaces/store/IState';

const Dropdown: React.FC<IDropdownProps> = ({companies}: IDropdownProps) => {
    return (
        <div className="nav__list">
            <div className="nav__list__item nav__list__item--company-title">
                Your companies
            </div>
            <div className="nav__list__item__company">
                <div className="nav__list__item__company--wrapper">
                    {companies.map((item) => (
                        <Company key={item.id} company={item}/>
                    ))}
                </div>
            </div>
            <DropdownFixItem icon="phone_iphone" text="Get the mobile app"/>
            <DropdownFixItem icon="people" text="Community"/>
            <DropdownFixItem icon="class" text="Knowledge base"/>
            <div className="nav__list__item--border"></div>
            <DropdownFixItem icon="settings" text="Settings"/>
            <DropdownFixItem icon="logout" text="Log out"/>
        </div>
    );
};

const mapStateToProps = (state: IState) => ({
    companies: state.company.companies,
});

export default connect(mapStateToProps)(Dropdown);
