import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import HomeComponent from './components/home-component/HomeContainer';
import LoginComponent from './components/login-component/LoginContainer';
import NavbarComponent from './components/navbar-component/NavbarContainer';
import MainReimbComponent from './components/MainReimb-component/MainReimbContainer';
import MainUserComponent from './components/MainUser-component/MainUserContainer';

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
            <Route path='/users' render={() => <MainUserComponent />} />
            <Route path='/reimbs' render={() => <MainReimbComponent />} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
