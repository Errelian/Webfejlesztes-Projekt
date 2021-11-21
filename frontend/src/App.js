import React, { Component } from 'react';
import './App.css';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChampionList from './championList';
import ChampionEdit from "./championEdit";

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/championsdisp' exact={true} component={ChampionList}/>
            <Route path='/championsdisp/:name' component={ChampionEdit}/>
          </Switch>
        </Router>
    )
  }
}

export default App;
