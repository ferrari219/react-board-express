import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/utils.scss';
// import styled from 'styled-components';

class Write extends Component {
  state = {
    title: '',
    content: '',
    selectedFile: '',
    imgUrl: ''
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handlePost = async () => {
    // alert('Post');
    const { title, content } = this.state;
    const Post = await axios.post('http://localhost:4000/board', {
      title,
      content
    });
    console.log(Post);
  };
  render() {
    const { handleChange, handlePost } = this;
    const { title, content } = this.state;
    return (
      <div>
        <div className="write">
          <p>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={title}
            />
          </p>
          <p>
            <input
              type="text"
              name="content"
              onChange={handleChange}
              value={content}
            />
          </p>
        </div>
        <div className="button">
          <Link to="/">목록</Link>
          <button className="black" onClick={handlePost}>
            등록하기
          </button>
        </div>
        {JSON.stringify(title + '/' + content)}
      </div>
    );
  }
}

export default Write;
