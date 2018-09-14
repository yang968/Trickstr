import React from 'react';

class EditTextForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      userId: props.userId,
      title: props.title,
      description: props.description
    }

    // this.updateTitle = this.updateTitle.bind(this);
    // this.updateDescription = this.updateDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // updateTitle(title) {
  //   this.setState({title: title});
  // }
  //
  // updateDescription(description) {
  //   this.setState({description: description});
  // }

  handleSubmit(e) {
    e.preventDefault();
    let title = document.getElementById('span').textContent;
    let description = document.getElementById('p').textContent;
    this.setState({ title, description}, () => {
      const formData = new FormData();
      formData.append('post[user_id]', this.state.userId);
      formData.append('post[post_type]', "text");
      formData.append('post[title]', this.state.title);
      formData.append('post[description]', this.state.description);

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
    return (
      <div>
        <div className="post-avatar" >
          {avatar}
        </div>
        <div className="form-header username">
          <a>{this.props.username}</a>
        </div>
        <div className="text-form-content animated fadeIn">
          <div className="form-title">
            <span
              id="span"
              contentEditable="true"
              suppressContentEditableWarning="true"
              value={this.state.title}>
              {this.state.title}
            </span>
          </div>
          <div className="form-desc" >
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
            <button disabled={!this.state.title || !this.state.description} onClick={this.handleSubmit} className="form-button post-button">Post</button>
          </div>
        </div>
      </div>
    )
  }

}

export default EditTextForm;
