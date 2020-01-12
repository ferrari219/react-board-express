import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

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

  //버튼 클릭시 정보 받아옴
  handleClick = async () => {
    //test JSON: 이 주소로 넣으면 오류 없음
    //https://jsonplaceholder.typicode.com/todos/1

    // http://localhost:4000/board 에는 데이터 없는듯
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      this.setState({
        // boards: 'test'
        boards: response.data
      });
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    const { boards } = this.state;
    const { handleChange, handleClick } = this;
    return (
      <div>
        <div>
          <button onClick={handleClick}>get Request</button>
        </div>
        <div>
          {boards && (
            <textarea
              name="getBoards"
              onChange={handleChange}
              rows={7}
              value={JSON.stringify(boards, null, 2)}
            />
          )}
        </div>
        {/* {boards[0].id} */}
        {/* {boards.map(item => {
          return (
            <div>
              <Link to={`/read/:${item.id}`}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </Link>
            </div>
          );
        })} */}
      </div>
    );
  }
}

export default List;
