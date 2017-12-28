import React, { Component } from "react";

export default class BlogPost extends Component {
  render() {
    const { blogPost } = this.props;
    const createdDate = blogPost.created_at.substring(0, blogPost.created_at.indexOf('T'))
    return (
      <div className="blog-post">
        <h3 className="blog-post-title">{blogPost.title}</h3>
        <p className='blog-post-date' ><b>Date Written:</b> {createdDate}</p>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />
      </div>
    );
  }
}
