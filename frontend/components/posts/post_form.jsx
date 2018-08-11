import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      contents: [],
      urls: [],
    };
  }

  handleChange(e) {
    this.setState({title: e.currentTarget.value});
  }

  handleFile(e) {
    const files = e.currentTarget.files;
    let contents = [];
    let urls = [];
    Object.keys(files).forEach(i => {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e) => {
        contents.push(file);
        urls.push(reader.result);
      }
      if (file) {
        reader.readAsDataURL(file);
      }
    })
    this.setState({contents: contents, urls: urls});
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('post[user_id]', this.props.currentUserId);
    formData.append('post[post_type]', "photo");
    formData.append('post[title]', this.state.title);
    this.state.contents.forEach(content => formData.append('contents[]', content));

    $.ajax({
      method: "post",
      url: "/api/posts",
      data: formData,
      contentType: false,
      processData: false
    }).then((response) => console.log(response));
  }

  render() {
    const previews = this.state.urls.map(url => <img src={url} />)
    return (
      <form>
        <input type="text"
          value={this.state.title}
          onChange={this.handleChange.bind(this)} />
        <input type="file" multiple
          onChange={this.handleFile.bind(this)} />
        {previews}
        <button onClick={this.handleSubmit.bind(this)}>Post</button>
      </form>
    )
  }
}

export default PostForm;
