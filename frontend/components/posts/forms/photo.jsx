import React from 'react';
import Dropzone from 'react-dropzone';

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

  render() {
    let avatar = null;
    let button = null;
    if (this.props.avatar) {
      avatar = (<img className="avatar-image" src={this.props.avatar} alt="IMAGE" />);
    }
    const previews = this.state.contents.map((content,idx) => (
      <img className="post-image" src={content.preview} key={idx}/>));

    if (this.state.contents.length === 0) button = <button className="form-button button-disabled">Post</button>;
    else button = <button onClick={this.handleSubmit} className="form-button post-button">Post</button>;

    return (
      <div className="text-form-container">
        <div className="post-avatar" >
          {avatar}
        </div>
        <div className="form-header username">
          <a>{this.props.username}</a>
        </div>
        {previews}
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
          {/*<div className="form-tags disabled">
          </div>*/}
        </div>
        <div className="form-footer">
          <div className="form-close">
            <button onClick={this.props.cancelPost()} className="form-button close-button">Close</button>
          </div>
          <div className="form-post">
            {button}
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoForm;
