import * as React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import LoginComponent, { ILoginProps } from '../components/login-component/LoginComponent'
import { BrowserRouter } from 'react-router-dom';
import { Typography, FormControl, InputLabel, Input, Button, makeStyles } from '@material-ui/core';

const props: ILoginProps = {
    authUser: undefined,
    errorMessage: '',
    loginAction: jest.fn,
}


const loginComponent = <LoginComponent {...props} />;

describe('<LoginComponent />', () => {

    const wrapper: ReactWrapper = mount(<BrowserRouter><LoginComponent {...props}/></BrowserRouter>);

    test('Renders 1 Typography', () => {

        expect(wrapper.find(Typography)).toHaveLength(1);
    })

    test('Renders 2 FormControl', () => {

        expect(wrapper.find(FormControl)).toHaveLength(2);
    })

    test('Renders 2 InputLabel', () => {

        expect(wrapper.find(InputLabel)).toHaveLength(2);
    })

    test('Renders 2 Input', () => {

        expect(wrapper.find(Input)).toHaveLength(2);
    })

    test('Renders 1 Button', () => {

        expect(wrapper.find(Button)).toHaveLength(1);
    })
    
    describe('Form field behavior', () => {

        let wrapper: ReactWrapper;

        beforeEach(() => {
            wrapper = mount(loginComponent);
        })

        it('should call prop loginAction when button is clicked', () => {
            wrapper.find('button').simulate('click');
            expect(props.loginAction).toHaveBeenCalled();
        });

    })

})