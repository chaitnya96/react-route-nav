import React, { Component } from 'react';
import { Route,Switch,Link } from "react-router-dom";
import './App.css';
import './Custom.css';
import Nav from "./Nav";
import Question from "./Question";
import Answer from "./Answer";

import Questiontype from "./Questiontype";
import QuestionAnswer from './QuestionAnswer';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Nav />
          <Switch>
              <Route exact path='/' component={Questiontype} />
              <Route path='/contact' component={Question} />
          </Switch>
        

      </div>
    );
  }
}

export default App;