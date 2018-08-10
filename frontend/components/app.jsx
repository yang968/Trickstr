import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignUpContainer from './session/signup_container';
import SignInContainer from './session/signin_container';
import NavBarContainer from './nav_bar/nav_bar_container';
// import Posts from './posts/posts';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

export default () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Switch>
      <Route exact path="/login" component={SignInContainer} />
      <Route exact path="/" component={SignUpContainer} />
    </Switch>
    <div className="background" ></div>
  </div>
)

//<ProtectedRoute exact path="/posts" component={Posts} />
