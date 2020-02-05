import React, { Component } from 'react';
// import styled from 'styled-components';
import axios from 'axios';
import '../styles/utils.scss';

import ListItem from 'components/ListItem';

export class List extends Component {
  state = {
    boards: []
  };
  loadingData = async () => {
    const response = await axios.get('http://localhost:4000/board');
    // const response = {
    //   data: [
    //     {
    //       id: 1,
    //       title: 'title1',
    //       content: 'content1'
    //     },
    //     {
    //       id: 2,
    //       title: 'title2',
    //       content: 'content2'
    //     },
    //     {
    //       id: 3,
    //       title: 'title3',
    //       content: 'content3'
    //     }
    //   ]
    // };
    this.setState({
      boards: response.data
    });
  };

  componentDidMount() {
    const { loadingData } = this;
    loadingData();
  }

  render() {
    const { boards } = this.state;
    return (
      <div>
        <div>
          {boards &&
            boards.map(item => (
              <ListItem
                key={item.id}
                title={item.title}
                content={item.content}
                lnk={`/read/${item.id}`}
              />
            ))}
          {/* <ListItem title="타이틀1" content="컨텐츠" />
          <ListItem title="타이틀2" content="컨텐츠" />
          <ListItem title="타이틀3" content="컨텐츠" /> */}
        </div>
        <div className="button">
          <a href="#">글쓰기</a>
        </div>
        {/* {JSON.stringify(this.state.boards)} */}
      </div>
    );
  }
}

export default List;
