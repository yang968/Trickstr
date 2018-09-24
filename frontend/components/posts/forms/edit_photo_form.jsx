import React from 'react';
import Dropzone from 'react-dropzone';
import {Editor, EditorState, ContentState} from 'draft-js';

class EditPhotoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.post.description,
      contents: props.post.contents,
      urls: props.post.contents.map(content => content.url),
      descEditorState: EditorState.createWithContent(ContentState.createFromText(props.post.description)),
    }

    this.updateDescription = this.updateDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.getTitle = this.getTitle.bind(this);
    this.getPreview = this.getPreview.bind(this);
  }

  updateDescription(descEditorState) {
    this.setState({
      description: this.state.descEditorState.getCurrentContent().getPlainText(),
      descEditorState
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('post[user_id]', this.props.post.user_id);
    formData.append('post[post_type]', "photo");
    formData.append('post[title]', "");
    formData.append('post[description]', this.state.description);
    this.state.contents.forEach(content => formData.append('contents[]', content));

    $.ajax({
      method: "patch",
      url: `/api/posts/${this.props.post.id}`,
      data: formData,
      contentType: false,
      processData: false
    }).then(() => {
      let mainDiv = document.getElementById('mainDiv');
      mainDiv.classList.remove("mainDiv-show", "fadeIn");
      window.location.reload();
    });
  }

  onDrop(files) {
    this.setState({
      contents: this.state.contents.concat(...files)
    });
  }

  getPreview() {
    if (this.props.post.reblog_id != null) {
      return this.props.original.contents.map((file, idx) => <img key={idx} className="post-image" src={file.url} alt="IMAGE" />)
    }
    return this.props.post.contents.map((file, idx) => <img key={idx} className="post-image" src={file.url} alt="IMAGE" />);
  }

  getTitle() {
    if (this.props.post.reblog_id != null) {
      return (
        <div className="reblog-list-item">
          <div className="reblog-header">
            <a className="reblog-avatar">
              <img className="reblog-avatar-image" src={this.props.author.avatar} alt="avatar" />
            </a>
            <a className="reblog-header-username">
              {this.props.author.username}
            </a>
          </div>
          <div className="reblog-description">
            {this.props.original.description}
          </div>
        </div>
      );
    }
    return null;
  }

  render() {
    let avatar = null;
    if (this.props.avatar) {
      avatar = (<img className="avatar-image" src={this.props.avatar} alt="IMAGE" />);
    }

    let previews = this.getPreview();
    let title = this.getTitle();

    return (
      <div>
        <div className="post-avatar" >
          {avatar}
        </div>
        <div className="form-header username">
          <a>{this.props.username}</a>
        </div>
        <div>
          <Dropzone
            className="drop-photo"
            accept={"image/*"}
            onDrop={files => this.onDrop(files)}>
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
        {previews}
        {title}
        <div className="text-form-content animated fadeIn">
          <div className="form-desc">
            <Editor editorState={this.state.descEditorState} onChange={this.updateDescription} />
          </div>
          {/*<div className="form-tags disabled">
          </div>*/}
        </div>
        <div className="form-footer">
          <div className="form-close">
            <button onClick={this.props.cancelPost()} className="form-button close-button">Close</button>
          </div>
          <div className="form-post">
            <button onClick={this.handleSubmit} className="form-button post-button">Post</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditPhotoForm;
