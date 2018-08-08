import React from 'react';
import { Route } from 'react-router-dom';

import SignUpContainer from './session/signup_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

export default () => (
  <div>
    <AuthRoute path='/signup' component={SignUpContainer} />
    
  </div>
)
