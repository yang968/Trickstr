import React from 'react';
import FormFooter from './form_footer';
import FormAvatar from './form_avatar';
import ReblogFormHeader from './reblog_form_header';
import ReblogListItem from '../reblog_list_item';

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
    let button = <button onClick={this.handleSubmit} className="form-button post-button fff">Reblog</button>;

    return (
      <div>
        <FormAvatar avatar={avatar} />
        <ReblogFormHeader username={this.props.currentUser.username} author={this.props.username} />
        <ReblogListItem avatar={this.props.avatar} username={this.props.username} original={this.props.post} />
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
        </div>
        <FormFooter cancelPost={this.props.cancelPost} button={button}/>
      </div>
    )
  }
}

export default ReblogTextForm;
