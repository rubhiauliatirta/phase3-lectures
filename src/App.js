import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'

import {
  Home,
  About,
  Users
} from "./pages"

function App() {
  return (
    <Router>
      <nav >
        <ul style={{
            listStyle : "none",
        }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about"><About/></Route>
        {/* <Route path="/about/contact">About contact</Route> */}
        <Route path="/users" render={(props) => <Users {...props}/>}></Route>
      </Switch>
    </Router>
  );
}

export default App;
