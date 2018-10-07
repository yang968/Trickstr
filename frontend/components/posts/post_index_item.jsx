import React from 'react';
import FooterContainer from './footer_container';
import EditTextForm from './forms/edit_text_form';
import EditPhotoForm from './forms/edit_photo_form';
import AvatarPopup from './avatar_popup';
import ReblogTextForm from './forms/reblog_text_form';
import ReblogPhotoForm from './forms/reblog_photo_form';
import ReblogFormHeader from './forms/reblog_form_header';
import ReblogPostContent from './reblog_post_content';
import ReblogListItem from './reblog_list_item';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: this.props.post,
      edit: false,
      follow: this.props.follow,
      reblog: false
    };

    this.getTitle = this.getTitle.bind(this);
    this.getDescription = this.getDescription.bind(this);
    this.getPreview = this.getPreview.bind(this);
    this.editForm = this.editForm.bind(this);
    this.getForm = this.getForm.bind(this);
    this.cancelPost = this.cancelPost.bind(this);
    this.changeFollow = this.changeFollow.bind(this);
    this.reblogForm = this.reblogForm.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      post: newProps.post,
      follow: newProps.follow
    });
  }

  changeFollow() {
    if (this.state.follow) this.props.unfollowUser(this.state.post.user_id);
    else this.props.followUser(this.state.post.user_id, this.props.currentUserId);
  }

  reblogForm() {
    this.setState({ reblog: !this.state.reblog });
  }

  editForm() {
    this.setState({ edit: !this.state.edit });
  }

  getTitle() {
    if (this.props.post.post_type == "photo" && this.props.post.reblog_id == null) return;
    if (this.props.post.reblog_id != null) return <ReblogListItem avatar={this.props.author.avatar} username={this.props.author.username} original={this.props.original} />;

    return (
      <div className="title">
        {this.state.post.title}
      </div>
    );
  }

  getDescription() {
    if (this.state.post.description !== "") {
      if (this.props.post.reblog_id != null) {
        return (
          <ReblogPostContent user={this.props.user}
            description={this.state.post.description}
          />
        );
      }

      if (this.props.post.post_type == "text") {
        return (
          <div className="description">
            {this.state.post.description}
          </div>
        );
      } else {
        return (
          <div className="caption">
            {this.state.post.description}
          </div>
        );
      }
    }
    return null;
  }

  getPreview() {
    if (this.props.post.post_type != "photo") return null;
    if (this.props.post.reblog_id != null) return this.props.original.contents.map((file, idx) => <img key={idx} className="post-image" src={file.url} alt="IMAGE" />);

    return this.state.post.contents.map((file, idx) => <img key={idx} className="post-image" src={file.url} alt="IMAGE" />);
  }

  cancelPost() {
    return (e) => {
      let mainDiv = document.getElementById('mainDiv');
      mainDiv.classList.remove("mainDiv-show", "fadeIn");
      if (this.state.edit) this.editForm();
      if (this.state.reblog) this.reblogForm();
    };
  }

  getForm() {
    let mainDiv = document.getElementById('mainDiv');
    mainDiv.classList.add("mainDiv-show", "fadeIn");

    switch (this.state.post.post_type) {
      case "text":
        return <EditTextForm cancelPost={this.cancelPost.bind(this)}
          id={this.state.post.id}
          avatar={this.props.user.avatar}
          username={this.props.user.username}
          userId={this.state.post.user_id}
          title={this.state.post.title}
          description={this.state.post.description} />;
      case "photo":
        return <EditPhotoForm cancelPost={this.cancelPost.bind(this)}
          post={this.state.post}
          avatar={this.props.user.avatar}
          username={this.props.user.username}
          original={this.props.original}
          author={this.props.author}
          />;
      default:
        return null;
    }
  }

  getReblogForm() {
    let mainDiv = document.getElementById('mainDiv');
    mainDiv.classList.add("mainDiv-show", "fadeIn");

    switch (this.state.post.post_type) {
      case "text":
        return <ReblogTextForm cancelPost={this.cancelPost.bind(this)}
          currentUser={this.props.currentUser}
          post={this.state.post}
          avatar={this.props.user.avatar}
          username={this.props.user.username}/>;
      case "photo":
        return <ReblogPhotoForm cancelPost={this.cancelPost.bind(this)}
          currentUser={this.props.currentUser}
          post={this.state.post}
          avatar={this.props.user.avatar}
          username={this.props.user.username}
          id={this.state.post.id}
          userId={this.state.post.user_id}
          description={this.state.post.description}
          contents={this.state.post.contents}
          />;
      default:
        return null;
    }
  }

  generateHeader() {
    if (this.props.post.reblog_id != null) {
      return (<ReblogFormHeader username={this.props.user.username} author={this.props.author.username} />);
    }
    return (
      <div className="username">
        <a>{this.props.user.username}</a>
      </div>
    );
  }

  render() {
    let header = this.generateHeader();

    let form = null;
    if (this.state.edit) form = this.getForm();
    else if (this.state.reblog) form = this.getReblogForm();
    if (form) return <li className='main-post z1000'>{form}</li>

    let title = this.getTitle();
    let description = this.getDescription();
    let preview = this.getPreview();

    return (
      <li className='main-post' >
        <div className="post-avatar" >
          <AvatarPopup avatar={this.props.user.avatar}
            follow={this.props.follow}
            currentUserId={this.props.currentUserId}
            changeFollow={this.changeFollow}
            userId={this.state.post.user_id}
            username={this.props.user.username}
            title={this.props.user.title}
            description={this.props.user.description}/>
        </div>
        <div className="post-content">
          { header }
          { preview }
          { title }
          { description }
          <FooterContainer post={this.state.post}
            currentUserId={this.props.currentUserId}
            likers={this.props.post.likers}
            like={this.props.like}
            deletePost={this.props.deletePost}
            editForm={this.editForm}
            reblogForm={this.reblogForm}
            reblogs={this.props.reblogs}
            original={this.props.original}
            />
        </div>
      </li>
    )
  }
}

export default PostIndexItem;
