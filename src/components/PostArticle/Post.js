import React from 'react';

import './Post.css';
import Editor from '../Editor/Editor';

const Post = () => {
  return (
    <section id="post">
      <div className="post row">
        <Editor />
      </div>
    </section>
  );
};

export default Post;
