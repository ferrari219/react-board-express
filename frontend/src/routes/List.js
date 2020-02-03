import React, { Component } from 'react';
// import styled from 'styled-components';
import '../styles/utils.scss';

import ListItem from '/components/ListItem';

export class List extends Component {
  render() {
    return (
      <div>
        <div>
          <ListItem />
        </div>
      </div>
    );
  }
}

export default List;
