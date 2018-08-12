import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignUpContainer from './session/signup_container';
import SignInContainer from './session/signin_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import PostIndexContainer from './posts/post_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

export default () => (
  <div>
    <Switch>
      <ProtectedRoute exact path="/posts" component={PostIndexContainer} />
      <AuthRoute exact path="/login" component={SignInContainer} />
      <AuthRoute exact path="/" component={SignUpContainer} />
    </Switch>
    <Route path="/" component={NavBarContainer} />

  </div>
)
// <Route exact path="/" render={<div className="background" ></div>} />
