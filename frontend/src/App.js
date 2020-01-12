import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import List from './routes/List';
import Read from './routes/Read';
import Write from './routes/Write';

class App extends Component {
  render() {
    return (
      <div>
        {/* <ul>
          <li>
            <Link to="/">List</Link>
          </li>
          <li>
            <Link to="/read/">Read</Link>
          </li>
          <li>
            <Link to="/write">Write</Link>
          </li>
        </ul> */}
        <div className="pages">
          <Route exact path="/" component={List} />
          <Route path="/read/:id?" component={Read} />
          <Route path="/write" component={Write} />
        </div>
      </div>
    );
  }
}

export default App;
