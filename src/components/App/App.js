import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../HomePage";
import Auth from "../../containers/Auth";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/auth" exact component={Auth}/>
    </Switch>
  );
};

export default App;