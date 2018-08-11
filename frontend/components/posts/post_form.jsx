import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      photoFile: null,
      photoUrl: null,
    };
  }

  handleChange(e) {
    this.setState({title: e.currentTarget.value});
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[user_id]', this.props.currentUserId);
    formData.append('post[post_type]', "photo");
    formData.append('post[title]', this.state.title);
    if (this.state.photoFile) {
      formData.append('post[attachment]', this.state.photoFile);
    }

    $.ajax({
      method: "post",
      url: "/api/posts",
      data: formData,
      contentType: false,
      processData: false
    }).then((response) => console.log(response));
  }

  render() {
    // console.log(this.state);
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    return (
      <form>
        <input type="text"
          value={this.state.title}
          onChange={this.handleChange.bind(this)} />
        <input type="file"
          onChange={this.handleFile.bind(this)} />
        {preview}
        <button onClick={this.handleSubmit.bind(this)}>Post</button>
      </form>
    )
  }
}

export default PostForm;
