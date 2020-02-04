import React, { Component } from 'react';
// import styled from 'styled-components';
import '../styles/utils.scss';

export class ListItem extends Component {
  state = {
    title: '',
    content: ''
  };
  render() {
    const { title, content } = this.props;
    return (
      <div>
        <div>
          <div className="list">
            <a href="#">
              <h3>{title}</h3>
              <p>{content}</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;
