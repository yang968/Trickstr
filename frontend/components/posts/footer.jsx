import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.getControls = this.getControls.bind(this);
    this.getNotes = this.getNotes.bind(this);
    this.getHeart = this.getHeart.bind(this);

    this.state = {
      liked: this.props.like
    }
  }

  getControls() {
    if (this.props.post.user_id === this.props.currentUserId) {
      return (
        <div className="controls-self" >
          <i className="control-icon reblog">&#xea8f;</i>
          <i className="control-icon gear">&#xea9a;</i>
        </div>
      )
    }

    let heart = this.getHeart();
    return (
      <div className="controls" >
        <i className="control-icon follow">&#xea45;</i>
        <i className="control-icon reblog">&#xea8f;</i>
        {heart}
      </div>
    )
  }

  getHeart() {
    if (this.state.liked) {
      return <i className="control-icon like-filled">&#xea4f;</i>;
    }
    return <i className="control-icon like">&#xea4e;</i>;
  }

  getNotes() {
    if (this.props.likers.length > 0){
      return <span className="notes">{this.props.likers.length} notes</span>;
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
