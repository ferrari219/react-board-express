import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
      <div>
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
        <button onClick={this.postBoard}>전송하기 </button>
        <Link to="/">목록</Link>
      </div>
    );
  }
}

export default Write;
