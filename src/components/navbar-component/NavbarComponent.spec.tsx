import * as React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import NavbarComponent, { INavbarProps } from './NavbarComponent'
import { FormControl } from '@material-ui/core';

const props: INavbarProps = {
    authUser: undefined,
    username: ''
}

const navbarComponent = <NavbarComponent {...props} />;

describe('<NavbarComponent />', () => {

    const setState = jest.fn();
    const useStateMock: any (init: any) => [init, setState];
})