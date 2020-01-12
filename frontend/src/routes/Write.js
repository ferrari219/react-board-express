import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

class Write extends Component {
  state = {
    title: '',
    content: ''
  };
  postBoard = async () => {
    const { title, content } = this.state;
    const post = await axios.post('http://localhost:4000/board', {
      title,
      content
    });
    console.log(post);
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <Wrap>
        <h2>Write</h2>
        <p>
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
        </p>
        <p>
          <textarea
            type="text"
            name="content"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </p>
        <Button>
          <button onClick={this.postBoard}>전송하기 </button>
          <Link to="/">목록</Link>
        </Button>
      </Wrap>
    );
  }
}

//styling
const Wrap = styled.div`
  padding: 20px;
  input {
    width: 100%;
    height: 20px;
    border: 1px solid #ccc;
  }
  textarea {
    width: 100%;
    height: 100px;
    border: 1px solid #ccc;
  }
`;
const Button = styled.div`
  border-top: 1px solid #eee;
  padding: 20px;

  button {
    float: right;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    background: #212121;
    color: #fff;
    font-size: 16px;
  }
  a {
    float: right;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    background: #f2f2f2;
    border: 1px solid #ddd;
    color: #424242;
    font-size: 16px;
  }
  & > button + a {
    margin-right: 5px;
  }
`;

export default Write;
