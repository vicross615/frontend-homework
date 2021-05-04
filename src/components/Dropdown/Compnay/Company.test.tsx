import React from 'react';
import Company from './Company';
import {mount, ReactWrapper, shallow, ShallowWrapper} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {ICompany} from '../../../interfaces/ICompany';
import {ISelectCompanyAction} from '../../../store/actions/selectCompanyAction';

describe('Company', () => {
    const mockStore = configureMockStore([]);
    let store: any;
    let companyInfo: ICompany;

    beforeEach(() => {
        companyInfo = {id: 123, value: 'mock-name'};
        store = mockStore({
            dropdown: {},
            company: {
                selectedCompany: {value: 'mock-name'},
            },
        });
    });

    it('snapshot', () => {
        const CompanyComponent: ShallowWrapper = shallow(
            <Provider store={store}>
                <Company company={companyInfo}/>
            </Provider>
        ).dive();

        expect(CompanyComponent).toMatchSnapshot();
    });

    it('should show company name', () => {
        const CompanyComponent: ReactWrapper = mount(
            <Provider store={store}>
                <Company company={companyInfo}/>
            </Provider>
        );
        const companyName: ReactWrapper = CompanyComponent.find('span');
        expect(companyName.text()).toContain('mock-name');
    });

    it('should set "selected-company" css class for selected company', () => {
        const CompanyComponent: ReactWrapper = mount(
            <Provider store={store}>
                <Company company={companyInfo}/>
            </Provider>
        );
        const wrapper: ReactWrapper = CompanyComponent.find('div');

        expect(wrapper.hasClass('selected-company')).toEqual(true);
    });

    it('should show check icon when company has selected', () => {
        const CompanyComponent: ReactWrapper = mount(
            <Provider store={store}>
                <Company company={companyInfo}/>
            </Provider>
        );
        const icon: ReactWrapper = CompanyComponent.find('i');

        expect(icon.exists()).toEqual(true);
    });

    it('should hideDropdown when a company clicked', () => {
        const spyHideDropdown = jest.spyOn(store, 'dispatch');
        const CompanyComponent: ReactWrapper = mount(
            <Provider store={store}>
                <Company company={companyInfo}/>
            </Provider>
        );
        const expectedDispatch: ISelectCompanyAction = {
            selectedCompany: {id: 123, value: 'mock-name'},
            type: 'SET_COMPANY',
        };
        const wrapper: ReactWrapper = CompanyComponent.find('div');
        wrapper.simulate('click');

        expect(spyHideDropdown).toHaveBeenCalledTimes(2);
        expect(spyHideDropdown).toHaveBeenCalledWith(expectedDispatch);
    });
});
