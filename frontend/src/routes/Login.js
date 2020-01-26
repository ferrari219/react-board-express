import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

class Login extends Component {
  state = {
    username: '',
    pw: ''
  };

  login = async () => {
    const { username, pw } = this.state;
    const login = await axios('http://localhost:4000/auth/login', {
      method: 'post',
      data: { username, password: pw },
      withCredentials: true
    });
    // const login = await axios.post(
    //   'http://localhost:4000/auth/login',
    //   {
    //     username,
    //     password: pw,
    //   }
    // );
    console.log(login.data.result);
    if (login.data.result !== 'not found username') {
      alert(`${login.data.result}`);
    } else {
      //redirect to main
    }
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
        <InputArea>
          <p>
            <label>ID</label>
            <input
              type="text"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
          </p>
          <p>
            <label>PW</label>
            <input
              type="password"
              name="pw"
              onChange={this.handleChange}
              value={this.state.pw}
            />
          </p>
        </InputArea>
        <Button>
          <button onClick={this.login}>로그인</button>
          {/* <Link to={`/`}>회원가입</Link> */}
        </Button>
      </Wrap>
    );
  }
}

//styling
const Wrap = styled.div`
  padding: 20px;
`;
const InputArea = styled.div`
  margin: 50px 0;
  p {
    text-align: center;
  }
  label {
    display: inline-block;
    width: 50px;
  }
  input {
    width: 250px;
    height: 20px;
  }
`;
const Button = styled.div`
  border-top: 1px solid #eee;
  padding: 20px;
  text-align: center;
  button {
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    background: #212121;
    color: #fff;
  }
`;

export default Login;
