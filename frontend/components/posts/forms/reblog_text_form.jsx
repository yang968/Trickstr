import React from 'react';

class ReblogTextForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { description: "" }

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
    formData.append('post[post_type]', "text");
    formData.append('post[title]', this.props.post.title);
    formData.append('post[description]', this.state.description);

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
    let button = <button onClick={this.handleSubmit} className="form-button post-button">Reblog</button>;

    return (
      <div>
        <div className="post-avatar">
          {avatar}
        </div>
        <div className="reblog-form-header">
          <a>{this.props.currentUser.username}</a>
          <i className="reblog-icon">&#xea92;</i>
          <span className="reblog-author">{this.props.username}</span>
        </div>
        <div className="reblog-list-item">
          <div className="reblog-header">
            <a className="reblog-avatar">
              <img className="reblog-avatar-image" src={this.props.avatar} alt="avatar" />
            </a>
            <a className="reblog-header-username">
              {this.props.username}
            </a>
          </div>
          <div className="reblog-title">
            {this.props.post.title}
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
              onInput={this.updateDescription.bind(this)}
              placeholder="Your text here">
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
    )
  }
}

export default ReblogTextForm;
