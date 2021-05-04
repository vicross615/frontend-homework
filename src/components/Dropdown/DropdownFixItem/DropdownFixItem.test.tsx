import React from 'react';
import DropdownFixItem from './DropdownFixItem';
import {shallow, mount, ReactWrapper, ShallowWrapper} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

describe('DropdownFixItem', () => {
    const mockStore = configureMockStore([]);
    let store: any;

    beforeEach(() => {
        store = mockStore({
            company: {
                selectedCompany: {value: 'mock-name'},
            },
            dropdown: {
                showDropdown: false,
            },
        });
    });

    it('snapshot', () => {
        const DropdownFixItemComponent: ShallowWrapper = shallow(
            <Provider store={store}>
                <DropdownFixItem text="mock-text" icon="mock-icon"/>
            </Provider>
        ).dive();

        expect(DropdownFixItemComponent).toMatchSnapshot();
    });

    it('should set "color-red" css class for logout', () => {
        const DropdownFixItemComponent: ReactWrapper = mount(
            <Provider store={store}>
                <DropdownFixItem text="mock-text" icon="logout"/>
            </Provider>
        );
        const wrapper: ReactWrapper = DropdownFixItemComponent.find('div');

        expect(wrapper.hasClass('color-red')).toEqual(true);
    });

    it('should show item text', () => {

    });

    it('should show item icon', () => {

    });
});
