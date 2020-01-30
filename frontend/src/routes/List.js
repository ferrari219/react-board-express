import React, { Component } from 'react';
import styled from 'styled-components';

export class List extends Component {
  render() {
    return (
      <div>
        <div>
          <ListItem>
            <a href="#">
              <h3>title</h3>
              <p>content</p>
            </a>
          </ListItem>
        </div>
      </div>
    );
  }
}

const ListItem = styled.div`
  a {
    text-decoration: none;
  }
`;

export default List;
