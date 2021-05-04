import * as actionType from '../actions/actionTypes';
import {companies} from '../../data';
import {ISelectCompanyAction} from '../actions/selectCompanyAction';
import {ICompanyState} from '../../interfaces/store/ICompanyState';

const initialState: ICompanyState = {
    companies,
    selectedCompany: companies[0],
};

const selectCompanyReducer = (state: ICompanyState = initialState, action: ISelectCompanyAction | any): ICompanyState => {
    switch (action.type) {
        case actionType.SET_COMPANIES:
            return {...state, companies: action.companies};

        case actionType.SET_COMPANY:
            return {...state, selectedCompany: action.selectedCompany};

        default:
            return state;
    }
};

export default selectCompanyReducer;
