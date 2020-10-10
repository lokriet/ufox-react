import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
