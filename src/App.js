import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from 'components/Login';
import Dashboard from 'components/Dashboard';
import Canvas from 'components/Map/Canvas';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/map">
          <Canvas />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
