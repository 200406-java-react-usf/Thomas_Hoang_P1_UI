import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import HomeComponent from './components/home-component/HomeContainer';
import LoginComponent from './components/login-component/LoginContainer';
import NavbarComponent from './components/navbar-component/NavbarContainer';
import createUserComponent from './components/createUser-component/createUserContainer';
import ReimbComponent from './components/newReimb-component/ReimbContainer';

import { Provider } from 'react-redux';
import { store } from './Store';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <AppBar color="primary" position="static">
            <Toolbar>
              <Typography variant="h5" color="inherit">
                <NavbarComponent />
              </Typography>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route path='/home' render={() => <HomeComponent />} />
            <Route path='/login' render={() => <LoginComponent />} />
            <Route path='/register' render={() => <RegisterComponent />} />
            <Route path='/reimb' render={() => <ReimbComponent />} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
