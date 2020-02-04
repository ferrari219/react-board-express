import React, { Component } from 'react';
// import styled from 'styled-components';
import axios from 'axios';
import '../styles/utils.scss';

import ListItem from 'components/ListItem';

export class List extends Component {
  state = {
    boards: []
  };
  loadData = () => {
    const response = axios.get('localhost:4000/board');
    this.setState({
      boards: response.data
    });
  };

  ComponentDidMount;

  render() {
    return (
      <div>
        <div>
          <ListItem title="타이틀1" content="컨텐츠" />
          <ListItem title="타이틀2" content="컨텐츠" />
          <ListItem title="타이틀3" content="컨텐츠" />
        </div>
        {JSON.stringify(this.state.boards)}
      </div>
    );
  }
}

export default List;
