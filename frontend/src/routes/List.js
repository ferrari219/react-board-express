import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class List extends Component {
  state = {
    boards: [
      {
        id: 1,
        title: 'test1',
        content: 'content1'
      },
      {
        id: 2,
        title: 'test2',
        content: 'content2'
      }
    ]
  };
  render() {
    const { boards } = this.state;
    return (
      <div>
        {/* {boards[0].id} */}
        {boards.map(item => {
          return (
            <div>
              <Link to={`/read/:${item.id}`}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
