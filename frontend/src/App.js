import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import List from './routes/List';
import Read from './routes/Read';
import Modify from './routes/Modify';
import Write from './routes/Write';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Route exact path="/" component={List} />
          <Route path="/read/:id?" component={Read} />
          <Route path="/modify/:id?" component={Modify} />
          <Route path="/write" component={Write} />
        </div>
      </div>
    );
  }
}

export default App;
