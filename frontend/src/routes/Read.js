import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/utils.scss';
// import styled from 'styled-components';

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
        <div className="read">
          <h2>{board.title}</h2>
          <p>{board.content}</p>
        </div>
        <div className="button">
          <Link to="/modify">수정</Link>
          <a
            href="#"
            onClick={() => {
              alert('삭제');
            }}
          >
            삭제
          </a>
          <Link to="/">목록</Link>
        </div>
        {/* {JSON.stringify(board)} */}
      </div>
    );
  }
}

export default Read;
