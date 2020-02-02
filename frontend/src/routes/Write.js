import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

class Write extends Component {
  state = {
    title: '',
    content: '',
    selectedFile: '',
    imgUrl: ''
  };
  postBoard = async () => {
    const { title, content, imgUrl } = this.state;
    const post = await axios.post('http://localhost:4000/board', {
      title,
      content,
      imgUrl
    });
    console.log(post);
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleFileInput(e) {
    this.setState({
      selectedFile: e.target.files[0]
    });
  }

  handlePost = async () => {
    console.log(this.state.selectedFile);
    const formData = new FormData();
    formData.append('img', this.state.selectedFile);
    const getUrl = await axios.post(
      'http://localhost:4000/file/upload',
      formData
    );
    this.setState({
      imgUrl: getUrl.data.url
    });
    console.log(getUrl.data.url);
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
        <input
          type="file"
          name="file"
          onChange={e => this.handleFileInput(e)}
        />
        <button type="button" onClick={this.handlePost}>
          이미지전송
        </button>
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
