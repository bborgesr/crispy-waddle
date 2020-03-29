import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import HomePage from './components/HomePage';
import Header from './components/common/Header';
import PageNotFound from './components/PageNotFound';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';

import { useAuth0 } from './react-auth0-spa';
import history from './utils/history';

import './App.css';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container-fluid'>
      <Router history={history}>
        <header>
          <Header />
        </header>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <PrivateRoute path='/profile' component={Profile} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
