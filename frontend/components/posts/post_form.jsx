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
    // debugger
    const files = e.currentTarget.files;
    // let urls = [];
    let contents = [];
    for (var i = 0; i < files.length; i++) {
      contents.push(URL.createObjectURL(files[i]));
    }
    this.setState({contents});
    // this.setState({urls});
    // const fileReader = new FileReader();
    // for (var i = 0; i < urls.length; i++) {
    //   // contents.push(URL.revokeObjectURL(urls[i]));
    //   contents.push(fileReader.readAsDataURL(urls[i]));
    // }
    // this.setState({contents});
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    const formData = new FormData();
    formData.append('post[user_id]', this.props.currentUserId);
    formData.append('post[post_type]', "photo");
    formData.append('post[title]', this.state.title);
    if (this.state.contents.length > 0) {
      formData.append('post[contents]', JSON.stringify(this.state.contents));
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
    // const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    const previews = this.state.contents.map(url => <img src={url} />)
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
