import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default () => {
  return (
      <Router>
        <Switch>
          <Route path="/user-management" component={() => {
            return (
              <div>
                <h2>React App Content:</h2>
                <div>Some content provided by the react app</div>
              </div>
            )
          }} />
          <Route exact path="/user/profile" component={() => {
          return (
            <div>
              <h2>Vue App Content:</h2>
              <div id="vue-app"></div>
            </div>)
          }} />
        </Switch>
      </Router>
  )
}