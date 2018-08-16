 import React from 'react';
 import FooterContainer from './footer_container';

 import EditTextForm from './forms/edit_text_form';
 import EditPhotoForm from './forms/edit_photo_form';


class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { post: this.props.post, edit: false };
    this.getTitle = this.getTitle.bind(this);
    this.getDescription = this.getDescription.bind(this);
    this.editForm = this.editForm.bind(this);
    this.getForm = this.getForm.bind(this);
    this.cancelPost = this.cancelPost.bind(this);

    console.log(this.state);
  }

  editForm() {
    this.setState({ edit: !this.state.edit });
  }

  getTitle() {
    if (this.state.post.title !== "") {
      return (
        <div className="title">
          {this.state.post.title}
        </div>
      );
    }
    return null;
  }

  getDescription() {
    if (this.state.post.description !== "") {
      switch (this.props.post.post_type) {
        case "text":
          return (
            <div className="description">
              {this.state.post.description}
            </div>
          );
        case "photo":
          return (
            <div className="caption">
              {this.state.post.description}
            </div>
          );
      }
    }
    return null;
  }

  cancelPost() {
    return (e) => {
      let mainDiv = document.getElementById('mainDiv');
      mainDiv.classList.remove("mainDiv-show", "fadeIn");
      this.editForm();
    };
  }

  getForm() {
    // debugger;
    let mainDiv = document.getElementById('mainDiv');
    mainDiv.classList.add("mainDiv-show", "fadeIn");

    switch (this.state.post.post_type) {
      case "text":
        return <EditTextForm cancelPost={this.cancelPost.bind(this)}
          id={this.state.post.id}
          username={this.props.users[this.state.post.user_id].username}
          userId={this.state.post.user_id}
          title={this.state.post.title}
          description={this.state.post.description} />;
      case "photo":
        return <EditPhotoForm cancelPost={this.cancelPost.bind(this)}
          id={this.state.post.id}
          username={this.props.users[this.state.post.user_id].username}
          userId={this.state.post.user_id}
          description={this.state.post.description}
          contents={this.state.post.contents}
          />;
      default:
        return null;
    }
  }

  render() {
    // let user
    // if !user return null (or loading component)
    if (this.state.edit) {
      let form = this.getForm();
      return (
        <li className='main-post z1000' >
          {form}
        </li>
      )
    }
    let item = null;
    if (this.state.post.contents.length > 0) {
      item = (<img className="post-image" src={this.state.post.contents[0].url} alt="IMAGE" />)
    }

    let title = this.getTitle();
    let description = this.getDescription();

    return (
      <li className='main-post' >
        <div className="post-avatar" >
        </div>
        <div className="post-content" >
          <div className="username">
            <a>{this.props.users[this.state.post.user_id].username}</a>
          </div>
          {
            this.state.post.contents.length > 0 &&
            this.state.post.contents.map((file, idx) => <img key={idx} className="post-image" src={file.url} alt="IMAGE" />)
          }
          { title }
          { description }
          <div className="tags">
          </div>
          <div className="source">
          </div>
          <FooterContainer post={this.state.post}
            currentUserId={this.props.currentUserId}
            likers={this.props.likers}
            like={this.props.like}
            deletePost={this.props.deletePost}
            editForm={this.editForm}
            />
        </div>
      </li>
    )
  }
}

export default PostIndexItem;
