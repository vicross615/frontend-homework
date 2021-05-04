import React from 'react';
import DropDown from './Dropdown';
import {mount, ReactWrapper, shallow} from 'enzyme';
import {Provider} from 'react-redux';
import {ICompany} from '../../interfaces/ICompany';
import configureMockStore from 'redux-mock-store';

describe('DropDown', () => {
    const mockStore = configureMockStore([]);
    let store: any;
    let companyInfo: ICompany;

    beforeEach(() => {
        companyInfo = {id: 123, value: 'mock-name'};
        store = mockStore({
            dropdown: {},
            company: {
                companies: [
                    {id: 123, value: 'mock-company-1'},
                    {id: 124, value: 'mock-company-1'}
                ],
                selectedCompany: {id: 123, value: 'mock-company-1'}
            },
        });
    });


    it('snapshot', () => {
        const DropDownComponent = shallow(
            <Provider store={store}>
                <DropDown/>
            </Provider>
        ).dive();

        expect(DropDownComponent).toMatchSnapshot();
    });

    it('should render companies list', () => {
        const DropDownComponent = mount(
            <Provider store={store}>
                <DropDown/>
            </Provider>
        );

        const list: ReactWrapper = DropDownComponent.find('Company');
        expect(list.length).toBe(2);
    });
});
