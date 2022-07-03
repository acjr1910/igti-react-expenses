import React from 'react';
import { Route, Switch } from "react-router-dom";
import Pages from '../pages';

const App = () => {
  return (
      <Switch>
        <Route path='/despesas'>
          <Pages.Expenses />
        </Route>
        <Route exact path='/login'>
          <Pages.Login />
        </Route>
      </Switch>
  )
}; 

export default App;
