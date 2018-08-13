import React from 'react';

class LinkFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      description: "",
      post_type: "link",
      contents: []
    })
  }

  render() {
    <div>
      <div class="form-header">

      </div>
      <div class="form-link">
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
