import React from 'react';
//import logo from './logo.svg';
import './../styles/App.css';
import PersonList from './PersonList';
import CreatePerson from './CreatePerson';
import Header from './Header'
import Login from './Login';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="center w85">
    <Header />
    <div className="ph3 pv1 background-gray">
      <Switch>
        <Route exact path="/" component={PersonList} />
        <Route exact path="/create" component={CreatePerson} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
    </div>
  );
}

export default App;
