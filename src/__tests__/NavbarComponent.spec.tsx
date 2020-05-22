import * as React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import NavbarComponent, { INavbarProps } from '../components/navbar-component/NavbarComponent'
import { FormControl } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

const props: INavbarProps = {
    authUser: undefined,
    username: '',
    logoutAction: jest.fn()
}

const navbarComponent = <NavbarComponent {...props} />;

describe('<NavbarComponent />', () => {

    const wrapper: ReactWrapper = mount(<BrowserRouter><NavbarComponent {...props}/></BrowserRouter>);

    test('Renders the component', () => {

        expect(wrapper.exists()).toBeTruthy();
    })

})