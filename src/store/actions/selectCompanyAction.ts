import * as actionTypes from './actionTypes';
import {ICompany} from '../../interfaces/ICompany';

export interface ISelectCompanyAction {
    type: string;
    selectedCompany: ICompany;
}

export const selectCompanyAction = (selectedCompany: ICompany): ISelectCompanyAction => ({
    type: actionTypes.SET_COMPANY,
    selectedCompany,
});
