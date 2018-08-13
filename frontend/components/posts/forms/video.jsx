import React from 'react';

class VideoFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      description: "",
      post_type: "video",
      contents: []
    })
  }

  render() {
    <div>
      <div class="form-header">

      </div>
      <div class="form-video">
        <input>
        </input>
      </div>
      <div class="form-desc">
        <textarea>
        </textarea>
      </div>
      <div class="form-tags">
      </div>
      <div class="form-footer">
        <div class="form-close">
          <button>Close</button>
        </div>
        <div class="form-post">
          <button>Post</button>
        </div>
      </div>
    </div>
  }
}
