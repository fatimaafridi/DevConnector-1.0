import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './App.css';
import Alert from './components/layout/Alert';
import * as actionCreater from './actions/index';
import setAuthToken from './utility/setAuthToken';
import Dashboard from './components/dashboard/dashboard';
import PrivateRouter from './components/routing/privateRoute';
import CreateProfile from './components/profile-form/createProfile';
import EditProfile from './components/profile-form/editProfile';
import AddExperience from './components/profile-form/addExperience';
import AddEducation from './components/profile-form/addEducation';
import Profiles from './components/profiles/profiles';
import Profile from './components/profile/profile';
import Posts from './components/posts/posts';
import Post from './components/post/post';
//Bring redux
import { Provider } from 'react-redux';
import store from './store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(actionCreater.loadUser(), []);
  });
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/profiles' component={Profiles} />
              <Route exact path='/profile/:id' component={Profile} />
              <Route exact path='/register' component={Register} />
              <PrivateRouter exact path='/dashboard' component={Dashboard} />
              <PrivateRouter
                exact
                path='/create-profile'
                component={CreateProfile}
              />
              <PrivateRouter
                exact
                path='/edit-profile'
                component={EditProfile}
              />
              <PrivateRouter
                exact
                path='/add-experience'
                component={AddExperience}
              />
              <PrivateRouter
                exact
                path='/add-education'
                component={AddEducation}
              />
              <PrivateRouter exact path='/posts' component={Posts} />
              <PrivateRouter exact path='/posts/:id' component={Post} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
