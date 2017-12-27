import React, { Component } from 'react';
import AllPosts from './posts.jsx'
import "../../styles/blog.scss";

export default class Test extends Component {
    render() {
        return (
            <div className='blog'>
                <h1 className='blog-title'>This is the blog Title</h1>
                <AllPosts />
            </div>
        );
    }
}