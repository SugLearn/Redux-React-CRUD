import React, { Component } from 'react';

import PostForm from './Components/Post.js';
import AllPost from './Components/AllPost.js';

class App extends Component {
  render() {
    return (
     <div>
      <PostForm />
      <br/>
      <AllPost />
     </div>
    );
  }
}

export default App;
