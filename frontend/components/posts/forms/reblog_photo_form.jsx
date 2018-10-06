import React from 'react';
import {Editor, EditorState, ContentState} from 'draft-js';
import FormFooter from './form_footer';
import FormAvatar from './form_avatar';

class ReblogPhotoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      contents: props.contents,
      urls: props.contents.map(content => content.url),
    }

    this.updateDescription = this.updateDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateDescription(e) {
    this.setState({description: e.currentTarget.innerHTML});
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('post[user_id]', this.props.currentUser.id);
    formData.append('post[reblog_id]', this.props.post.id);
    formData.append('post[post_type]', "photo");
    formData.append('post[title]', "");
    formData.append('post[description]', this.state.description);
    // this.props.contents.forEach(content => formData.append('contents[]', content));

    $.ajax({
      method: "post",
      url: `/api/posts/`,
      data: formData,
      contentType: false,
      processData: false
    }).then(() => {
      let mainDiv = document.getElementById('mainDiv');
      mainDiv.classList.remove("mainDiv-show", "fadeIn");
      window.location.reload();
    });
  }

  render() {
    let avatar = <img className="avatar-image" src={this.props.currentUser.avatar} alt="IMAGE" />
    let button = <button onClick={this.handleSubmit} className="form-button post-button fff">Reblog</button>;

    const previews = this.state.urls.map((url,idx) => (
      <img className="post-image" src={url} key={idx}/>));

    return (
      <div>
        <FormAvatar avatar={avatar} />
        <div className="reblog-form-header">
          <a>{this.props.currentUser.username}</a>
          <i className="reblog-icon">&#xea92;</i>
          <span className="reblog-author HelveticaNeue">{this.props.username}</span>
        </div>
        {previews}
        <div className="reblog-list-item">
          <div className="reblog-header">
            <a className="reblog-avatar">
              <img className="reblog-avatar-image" src={this.props.avatar} alt="avatar" />
            </a>
            <a className="reblog-header-username">
              {this.props.username}
            </a>
          </div>
          <div className="reblog-description">
            {this.props.post.description}
          </div>
        </div>
        <div className="text-form-content animated fadeIn">
          <div className="form-desc">
            <p
              contentEditable="true"
              suppressContentEditableWarning="true"
              value={this.state.description}
              onInput={this.updateDescription}
              placeholder="Add a caption, if you like">
            </p>
          </div>
        </div>
        <FormFooter cancelPost={this.props.cancelPost} button={button}/>
      </div>
    );
  }
}

export default ReblogPhotoForm;
