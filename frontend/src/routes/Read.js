import React, { Component } from 'react';
import axios from 'axios';
import '../styles/utils.scss';

export class Read extends Component {
  state = {
    board: []
  };

  loadingData = async () => {
    try {
      const { id } = this.props.match.params;
      const response = await axios.get(`http://localhost:4000/board/${id}`);
      // const response = {
      //   data: {
      //     title: 'title1',
      //     content: 'content1'
      //   }
      // };
      this.setState({
        board: response.data
      });
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    const { loadingData } = this;
    loadingData();
  }
  render() {
    // const { id } = this.props.match.params;
    const { board } = this.state;
    return (
      <div>
        <div>
          <h2>{board.title}</h2>
          <p>{board.content}</p>
        </div>
        <div className="button">
          <a href="#">수정</a>
        </div>
        2{JSON.stringify(board)}
      </div>
    );
  }
}

export default Read;
