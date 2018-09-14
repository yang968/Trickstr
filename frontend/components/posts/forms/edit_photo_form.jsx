import React from 'react';

class EditPhotoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      userId: props.userId,
      description: props.description,
      contents: props.contents,
      urls: props.contents.map(content => content.url)
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFile(e) {
    const files = e.currentTarget.files;
    Object.keys(files).forEach(i => {
      let contents = this.state.contents;
      let urls = this.state.urls;
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e) => {
        contents.push(file);
        urls.push(reader.result);
        this.setState({ contents: contents, urls: urls });
      }
      if (file) {
        reader.readAsDataURL(file);
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let description = document.getElementById('p').textContent;
    this.setState({ description }, () => {
      const formData = new FormData();
      formData.append('post[user_id]', this.props.userId);
      formData.append('post[post_type]', "photo");
      formData.append('post[title]', "");
      formData.append('post[description]', this.state.description);
      this.state.contents.forEach(content => formData.append('contents[]', content));

      $.ajax({
        method: "patch",
        url: `/api/posts/${this.state.id}`,
        data: formData,
        contentType: false,
        processData: false
      }).then(() => {
        let mainDiv = document.getElementById('mainDiv');
        mainDiv.classList.remove("mainDiv-show", "fadeIn");
        window.location.reload();
      });
    })

  }

  render() {
    let avatar = null;
    if (this.props.avatar) {
      avatar = (<img className="post-image" src={this.props.avatar} alt="IMAGE" />);
    }

    const previews = this.state.urls.map((url,idx) => (
      <img className="post-image" src={url} key={idx}/>));
    return (
      <div>
        <div className="post-avatar" >
          {avatar}
        </div>
        <div className="form-header username">
          <a>{this.props.username}</a>
        </div>
        <div className="form-title">
          <input type="file" multiple
            onChange={this.handleFile.bind(this)} />
          {previews}
        </div>
        <div className="text-form-content animated fadeIn">
          <div className="form-desc">
            <p
              id="p"
              contentEditable="true"
              suppressContentEditableWarning="true"
              value={this.state.description}>
              {this.state.description}
            </p>
          </div>
          <div className="form-tags disabled">
            <p>
              #tags (disabled)
            </p>
          </div>
        </div>
        <div className="form-footer">
          <div className="form-close">
            <button onClick={this.props.cancelPost()} className="form-button close-button">Close</button>
          </div>
          <div className="form-post">
            <button disabled={this.state.contents.length === 0} onClick={this.handleSubmit} className="form-button post-button">Post</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditPhotoForm;
