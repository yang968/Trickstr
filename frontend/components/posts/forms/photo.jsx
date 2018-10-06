import React from 'react';
import Dropzone from 'react-dropzone';
import FormFooter from './form_footer';
import FormAvatar from './form_avatar';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      user_id: this.props.userId,
      description: "",
      post_type: "photo",
      contents: [],
    })

    this.updateDescription = this.updateDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.getDropzone = this.getDropzone.bind(this);
    this.getButton = this.getButton.bind(this);
    this.getDescForm = this.getDescForm.bind(this);
  }

  updateDescription(e) {
    this.setState({description: e.currentTarget.innerHTML});
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('post[user_id]', this.props.userId);
    formData.append('post[post_type]', "photo");
    formData.append('post[title]', "");
    formData.append('post[description]', this.state.description);
    this.state.contents.forEach(content => formData.append('contents[]', content));

    $.ajax({
      method: "post",
      url: "/api/posts",
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

  getDropzone() {
    if (this.state.contents.length === 0) {
      return (
        <div>
          <Dropzone
            className="drop-photo"
            accept={"image/*"}
            onDrop={files => this.onDrop(files)}>
            <i className="drop-photo-icon icon">&#xea65;</i>
            <p>Try dropping some files here, or click to select files to upload.</p>
            <i className="drop-photo-smile icon">&#xea88;</i>
          </Dropzone>
        </div>
      );
    }
    return (
      <div>
        <Dropzone
          className="drop-photo-small"
          accept={"image/*"}
          onDrop={files => this.onDrop(files)}>
          <i className="drop-photo-icon icon-small">&#xea65;</i>
          <p>Add another</p>
        </Dropzone>
      </div>
    )
  }

  getButton() {
    if (this.state.contents.length === 0) return <button className="form-button button-disabled">Post</button>;
    return <button onClick={this.handleSubmit} className="form-button post-button fff">Post</button>;
  }

  getDescForm() {
    if (this.state.contents.length > 0) {
      return (
        <div className="text-form-content animated fadeIn">
          <div className="form-desc">
            <p
              contentEditable="true"
              suppressContentEditableWarning="true"
              value={this.state.description}
              onInput={this.updateDescription.bind(this)}
              placeholder="Add a caption, if you like">
            </p>
          </div>
        </div>
      );
    }
    return null;
  }

  render() {
    let avatar = null;
    let button = this.getButton();
    let dropzone = this.getDropzone();
    let descForm = this.getDescForm();

    if (this.props.avatar) {
      avatar = (<img className="avatar-image" src={this.props.avatar} alt="IMAGE" />);
    }
    const previews = this.state.contents.map((content,idx) => (
      <img className="post-image" src={content.preview} key={idx}/>));

    return (
      <div className="text-form-container">
        <FormAvatar avatar={avatar} />
        <div className="form-header username">
          <a>{this.props.username}</a>
        </div>
        {previews}
        {dropzone}
        {descForm}
        <FormFooter cancelPost={this.props.cancelPost} button={button}/>
      </div>
    );
  }
}

export default PhotoForm;
