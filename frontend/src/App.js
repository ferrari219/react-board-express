import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import List from './routes/List';
import Read from './routes/Read';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Route exact path="/" component={List} />
          <Route path="/read/:id?" component={Read} />
        </div>
      </div>
    );
  }
}

export default App;
