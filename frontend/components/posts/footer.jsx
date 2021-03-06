import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: (props.like === undefined || props.like === null) ? false : true,
      likers: (props.original) ? props.original.likers : this.props.likers,
      edit: false,
      reblog: false
    }

    this.getControls = this.getControls.bind(this);
    this.getNotes = this.getNotes.bind(this);
    this.getHeart = this.getHeart.bind(this);
    this.changeLike = this.changeLike.bind(this);
    this.setEdit = this.setEdit.bind(this);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
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
      let postId = (this.props.original) ? this.props.original.id : this.props.post.id;
      this.props.likePost(postId, this.props.currentUserId).then(
        (response) => {
          let newLikers = this.state.likers.concat(response.like.user_id);
          this.setState({liked: true, likers: newLikers })
        }
      )
    }
  }

  setEdit() {
    this.setState({edit: !this.state.edit});
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  setWrapperRef2(node) {
    this.wrapperRef2 = node;
  }

  handleClickOutside(e) {
    if (this.state.edit && (!this.wrapperRef.contains(event.target)
                        && !this.wrapperRef2.contains(event.target))) {
      this.setEdit();
    }
  }

  showPopUp() {
    if (this.state.edit) return (
      <div ref={node => this.setWrapperRef(node)} className="pop-container">
        <div className="post-popover">
          <ul className="post-pop-ul">
            <li className="post-pop-li">
              <button className="post-pop-button" onClick={() => this.props.editForm()}>Edit</button>
            </li>
            <li className="post-pop-li">
              <button className="post-pop-button" onClick={() => this.props.deletePost(this.props.post.id)}>Delete</button>
            </li>
          </ul>
        </div>
      </div>
    );
    return null;
  }

  getControls() {
    // BONUS
    let reblog = <i className="control-icon reblog" onClick={() => this.props.reblogForm()}>&#xea8f;</i>;
    // Each icon is 24px long and 12px apart
    let popup = this.showPopUp();
    if (this.props.post.user_id === this.props.currentUserId) {
      return (
        <div className="controls">
          {reblog}
          <i ref={node => this.setWrapperRef2(node)} className="control-icon gear" onClick={this.setEdit}>
            &#xea9a;
          </i>
          {popup}
        </div>
      )
    }

    let heart = this.getHeart();
    return (
      <div className="controls" >
        {reblog}
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
    let reblogs = 0;
    if (this.props.original != null) reblogs = this.props.reblogs[this.props.original.id];
    else reblogs = this.props.reblogs[this.props.post.id];
    if (reblogs > 0 || this.state.likers.length > 0){
      return <span className="notes">{reblogs + this.state.likers.length} notes</span>;
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
