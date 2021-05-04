import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

describe('rendering components', () => {
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

    it('Renders App component without crashing', () => {
        const AppComponent = shallow(
            <Provider store={store}>
                <App/>
            </Provider>
        ).dive();
        expect(AppComponent);
    });

    it('snapshot', () => {
        const AppComponent = shallow(
            <Provider store={store}>
                <App/>
            </Provider>
        ).dive();
        expect(AppComponent).toMatchSnapshot();
    });
});

describe('App', () => {
});
