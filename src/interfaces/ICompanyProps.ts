import {ICompany} from './ICompany';
import {ISelectCompanyAction} from '../store/actions/selectCompanyAction';
import {IToggleDropdownAction} from '../store/actions/toggleDropdownAction';

export interface ICompanyProps {
    onCompanyChange: ((company: ICompany) => (ISelectCompanyAction));
    selectedCompany: ICompany;
    company: ICompany;
    hideDropdown: (() => (IToggleDropdownAction));
}
