import './stylesheets/index.scss';
import DropdownLink from './components/DropdownLink/DropdownLink';
import Dropdown from './components/Dropdown/Dropdown';
import {connect} from 'react-redux';
import React, {useEffect} from 'react';
import {toggleDropdownAction} from './store/actions/toggleDropdownAction';
import {IAppProps} from './interfaces/IAppProps';
import {IState} from './interfaces/store/IState';

const App: React.FC<IAppProps> = ({showDropdown, hideDropdown}: IAppProps) => {
    const checkIfOutside = (event: any): boolean => {
        let clickedElement: any = event.target;

        while (clickedElement) {
            let navLinkOrDropDownClicked =
                clickedElement.classList.contains('nav__list') ||
                clickedElement.classList.contains('nav__link');
            if (navLinkOrDropDownClicked) {
                return false;
            }
            clickedElement = clickedElement.parentElement;
        }
        return true;
    };
    useEffect(() => {
        const onClick = (mouseEvent: any) => {
            if (checkIfOutside(mouseEvent)) {
                hideDropdown();
            }
        };
        window.addEventListener('click', (e) => onClick(e));
        return () => {
            window.removeEventListener('resize', onClick, false);
        };
    }, [hideDropdown]);
    return (
        <div>
            <nav className="nav">
                <DropdownLink/>
                {showDropdown && <Dropdown/>}
            </nav>
        </div>
    );
};

const mapStateToProps = (state: IState) => ({
    showDropdown: state.dropdown.showDropdown,
});

const mapDispatchToProps = (dispatch: any) => ({
    hideDropdown: () => dispatch(toggleDropdownAction(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
