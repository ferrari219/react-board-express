import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Join extends Component {
  render() {
    return (
      <Wrap>
        <InputArea>
          <p>
            <label>ID</label>
            <input type="text" />
          </p>
          <p>
            <label>PW</label>
            <input type="password" />
          </p>
        </InputArea>
        <Button>
          <button
            onClick={() => {
              alert('회원가입');
            }}
          >
            회원가입 완료
          </button>
          {/* <Link to={`/`}>로그인</Link> */}
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

export default Join;
