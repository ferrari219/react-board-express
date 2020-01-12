import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Read extends Component {
  state = {
    boards: []
  };
  getBoards = async () => {
    const getBoards = await axios.get('http://localhost:4000/board');
    console.log(getBoards.data);
    this.setState({
      boards: getBoards.data[0]
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.getBoards}> get Request </button>
        <div>{JSON.stringify(this.state.boards)}</div>
        <h2>글제목</h2>
        <p>내용</p>
        <Link to="/">목록</Link>
      </div>
    );
  }
}

export default Read;
