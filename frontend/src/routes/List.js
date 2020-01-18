import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Read from './Read';
import axios from 'axios';
import styled from 'styled-components';

class List extends Component {
  state = {
    boards: []
    // boards: [
    //   {
    //     id: 1,
    //     title: 'test1',
    //     content: 'content1'
    //   },
    //   {
    //     id: 2,
    //     title: 'test2',
    //     content: 'content2'
    //   }
    // ]
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  //로딩 정보 받아옴
  // handleClick = async () => {
  //   //test JSON: 이 주소로 넣으면 오류 없음
  //   //https://jsonplaceholder.typicode.com/todos/1
  //   try {
  //     const response = await axios.get('http://localhost:4000/board');
  //     this.setState({
  //       // boards: 'test'
  //       boards: response.data
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  //로딩 데이터
  loadingData = async () => {
    //test JSON: 이 주소로 넣으면 오류 없음
    //https://jsonplaceholder.typicode.com/todos/1
    try {
      const response = await axios.get('http://localhost:4000/board');
      this.setState({
        // boards: 'test'
        boards: response.data
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
    const { boards } = this.state;
    const { handleChange } = this; //handleClick
    return (
      <Wrap>
        <h2>List</h2>
        <div>
          {boards && (
            <textarea
              name="getBoards2"
              onChange={handleChange}
              rows={7}
              value={JSON.stringify(boards, null, 2)}
            />
          )}
        </div>
        {console.log(boards)}
        {/* {boards[0].id} */}
        {boards.map(item => {
          return (
            <ListItem key={item.id}>
              <Link to={`/read/:${item.id}`}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </Link>
            </ListItem>
          );
        })}

        <Button>
          {/* <button onClick={handleClick}>get Request</button> */}
          <Link to={`/write`}>글쓰기</Link>
        </Button>
      </Wrap>
    );
  }
}

//styling
const Wrap = styled.div`
  padding: 20px;
`;

const ListItem = styled.div`
  width: 100%;
  margin-top: 10px;
  padding: 20px;
  border-top: 1px solid #eee;
  a {
    text-decoration: none;
    h3 {
      margin: 0;
      padding: 0;
      color: #212121;
    }
    p {
      margin: 0;
      padding: 10px 0 0 0;
      color: #787878;
    }
    &:hover {
      h3 {
        color: #0066ff;
      }
    }
  }
`;
const Button = styled.div`
  border-top: 1px solid #eee;
  padding: 20px;
  a {
    float: right;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    background: #212121;
    color: #fff;
  }
`;

export default List;
