import React from 'react';
import {Editor, EditorState, ContentState} from 'draft-js';

class EditTextForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      userId: props.userId,
      title: props.title,
      description: props.description,
      titleEditorState: EditorState.createWithContent(ContentState.createFromText(props.title)),
      descEditorState: EditorState.createWithContent(ContentState.createFromText(props.description)),
    }

    this.updateTitle = this.updateTitle.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(titleEditorState) {
    this.setState({
      title: this.state.titleEditorState.getCurrentContent().getPlainText(),
      titleEditorState
    });
  }

  updateDescription(descEditorState) {
    this.setState({
      description: this.state.descEditorState.getCurrentContent().getPlainText(),
      descEditorState
    });
  }

  handleSubmit(e) {
    e.preventDefault();

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
      avatar = (<img className="avatar-image" src={this.props.avatar} alt="IMAGE" />);
    }

    let button = null;
    if (this.state.title == "" && this.state.description == "") button = <button className="form-button button-disabled">Post</button>;
    else button = <button onClick={this.handleSubmit} className="form-button post-button fff">Post</button>;

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
            <Editor editorState={this.state.titleEditorState} onChange={this.updateTitle} />
          </div>
          <div className="form-desc" >
            <Editor className="editor" editorState={this.state.descEditorState} onChange={this.updateDescription} />
          </div>
          {/*<div className="form-tags disabled">
          </div>*/}
        </div>
        <div className="form-footer">
          <div className="form-close">
            <button onClick={this.props.cancelPost()} className="form-button close-button fff">Close</button>
          </div>
          <div className="form-post">
            {button}
          </div>
        </div>
      </div>
    )
  }

}

export default EditTextForm;
