import React, { Component } from "react";

export default class BlogPost extends Component {
  render() {
    const { blogPost } = this.props;
    return (
      <div className="blog-post-container">
        <h3 className="blog-post-title">{blogPost.title}</h3>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />
        <p>created at: {blogPost.created_at}</p>
      </div>
    );
  }
}
