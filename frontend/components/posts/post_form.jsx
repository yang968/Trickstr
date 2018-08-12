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
    // console.log("here");
    // this.setState({ contents: contents, urls: urls });
    // console.log(this.state);
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
    const previews = this.state.urls.map(url => <img className="post-image" src={url} />)
    return (
      <div className="post-form-container">
        <div className="post-avatar" >
        </div>
        <div className="new-post-wrapper">
          <a className="post-link one">
            <i className="text-icon icon">&#60023;</i>
            <span className="new-post-span">Text</span>
          </a>
          <a className="post-link two">
            <i className="photo-icon icon">&#60019;</i>
            <span className="new-post-span">Photo</span>
          </a>
          <a className="post-link three">
            <i className="quote-icon icon">&#60021;</i>
            <span className="new-post-span">Quote</span>
          </a>
          <a className="post-link four">
            <i className="link-icon icon">&#60016;</i>
            <span className="new-post-span">Link</span>
          </a>
          <a className="post-link five">
            <i className="chat-icon icon">&#60012;</i>
            <span className="new-post-span">Chat</span>
          </a>
          <a className="post-link six">
            <i className="audio-icon icon">&#60010;</i>
            <span className="new-post-span">Audio</span>
          </a>
          <a className="post-link seven">
            <i className="video-icon icon">&#60025;</i>
            <span className="new-post-span">Video</span>
          </a>
        </div>
      </div>
    )
  }
}

export default PostForm;

// <form  >
//   <input type="text"
//     value={this.state.title}
//     onChange={this.handleChange.bind(this)} />
//   <input type="file" multiple
//     onChange={this.handleFile.bind(this)} />
//   {previews}
//   <button onClick={this.handleSubmit.bind(this)}>Post</button>
// </form>
