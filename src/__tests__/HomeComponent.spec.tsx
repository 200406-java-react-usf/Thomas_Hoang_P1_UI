import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import HomeComponent, { IHomeProps } from '../components/home-component/HomeComponent'
import { BrowserRouter } from 'react-router-dom';

const props: IHomeProps = {
    username: 'test',
}

const homeComponent = <HomeComponent {...props} />;

describe('<HomeComponent />', () => {

    const wrapper: ReactWrapper = mount(<BrowserRouter><HomeComponent {...props}/></BrowserRouter>);

    test('Renders the home page', () => {

        expect(wrapper.find('h1')).toHaveLength(1);
    })

})