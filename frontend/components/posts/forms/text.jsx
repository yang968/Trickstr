import React from 'react';
import FormFooter from './form_footer';

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      user_id: this.props.userId,
      title: "",
      description: "",
      post_type: "text",
    })

    this.updateTitle = this.updateTitle.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e) {
    this.setState({title: e.currentTarget.innerHTML});
  }

  updateDescription(e) {
    this.setState({description: e.currentTarget.innerHTML});
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('post[user_id]', this.props.userId);
    formData.append('post[post_type]', "text");
    formData.append('post[title]', this.state.title);
    formData.append('post[description]', this.state.description);

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

  render() {
    let avatar = null;
    let button = null;
    if (this.props.avatar) {
      avatar = (<img className="avatar-image" src={this.props.avatar} alt="IMAGE" />);
    }
    if (!this.state.title && !this.state.description) button = <button className="form-button button-disabled">Post</button>;
    else button = <button onClick={this.handleSubmit} className="form-button post-button fff">Post</button>;

    return (
      <div className="text-form-container">
        <div className="post-avatar" >
          {avatar}
        </div>
        <div className="form-header username">
          <a>{this.props.username}</a>
        </div>
        <div className="text-form-content animated fadeIn">
          <div className="form-title">
            <span
              contentEditable="true"
              suppressContentEditableWarning="true"
              placeholder="Title"
              value={this.state.title}
              onInput={this.updateTitle.bind(this)}>
            </span>
          </div>
          <div className="form-desc" >
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
        <FormFooter cancelPost={this.props.cancelPost} button={button}/>
      </div>
    )
  }
}

export default TextForm;
