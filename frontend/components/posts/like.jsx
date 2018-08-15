import React from 'react';
import { likePost, deleteLike } from '../../actions/like_actions';

class Like extends React.Component {
  constructor(props) {
    super(props);

    this.state = { like: this.props.like };
  }

  changeLike() {
    this.setState({ like: this.props.like });
  }

  render() {

  }
}
