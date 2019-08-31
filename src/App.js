import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ListPage from './pages/ListPage'
import ViewPage from './pages/ViewPage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={ListPage} exact />
        <Route path="/view/:id" component={ViewPage} exact />
      </Switch>
    </div>
  );
}

export default App;
