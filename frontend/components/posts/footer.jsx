import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: (this.props.like === null) ? false : true,
      likers: this.props.likers
    }

    this.getControls = this.getControls.bind(this);
    this.getNotes = this.getNotes.bind(this);
    this.getHeart = this.getHeart.bind(this);
    this.changeLike = this.changeLike.bind(this);
  }

  changeLike() {
    if (this.state.liked) {
      this.props.deleteLike(this.props.like.id).then(
        (response) => {
          let newLikers = this.state.likers.filter(id => id != this.props.currentUserId)
          this.setState({liked: false, likers: newLikers })
        }
      )
    } else {
      this.props.likePost(this.props.post.id, this.props.currentUserId).then(
        (response) => {
          let newLikers = this.state.likers.concat(response.like.user_id);
          this.setState({liked: true, likers: newLikers })
        }
      )
    }
  }

  getControls() {
    // BONUS
    // let reblog = <i className="control-icon reblog">&#xea8f;</i>;
    // Each icon is 24px long and 12px apart
    if (this.props.post.user_id === this.props.currentUserId) {
      return (
        <div className="controls-self" >
          <i className="control-icon gear">&#xea9a;</i>
        </div>
      )
    }

    let heart = this.getHeart();
    return (
      <div className="controls" >
        <i className="control-icon follow">&#xea45;</i>
        {heart}
      </div>
    )
  }

  getHeart() {
    if (this.state.liked) {
      return <i className="control-icon like-filled" onClick={this.changeLike}>&#xea4f;</i>;
    }
    return <i className="control-icon like" onClick={this.changeLike}>&#xea4e;</i>;
  }

  getNotes() {
    if (this.state.likers.length > 0){
      return <span className="notes">{this.state.likers.length} notes</span>;
    }
    return null;
  }

  render() {
    let notes = this.getNotes();
    let controls = this.getControls();
    return(
      <div className="footer">
        <div>
          {notes}
        </div>
        {controls}
      </div>
    )
  }
}

export default Footer;
