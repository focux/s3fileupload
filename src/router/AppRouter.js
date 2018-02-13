import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Form from '../components/Form';
import FileUploader from '../components/FileUploader';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Form} exact={true} />
        <Route path="/upload" component={FileUploader} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;