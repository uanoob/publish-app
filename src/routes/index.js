import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CoreLayout from '../hoc/CoreLayout';
import PublishingApp from '../hoc/PublishingApp';
import LoginView from '../views/LoginView';

const Routes = () => (
  <div>
    <CoreLayout>
      <Switch>
        <Route path="/" exact component={PublishingApp} />
        <Route path="/login" exact component={LoginView} />
      </Switch>
    </CoreLayout>
  </div>
);

export default Routes;
