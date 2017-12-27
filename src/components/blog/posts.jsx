import React, { Component } from 'react';
import { getBlogPosts } from '../../helpers/cosmic.js'
import BlogPost from './post'

export default class AllPosts extends Component {
    state = {
        blogPosts : []
    }
    componentWillMount = () => {
        getBlogPosts().then((data) => {
            const blogPosts = data.data.objects
            console.log('DATAA::', data.data.objects)
            this.setState({ blogPosts })
            console.log('STATEEE:::', this.state)
        })
    }
    render() {
        const { blogPosts } = this.state
        return (
            <div className='blog-post-container'>
            {blogPosts && blogPosts.map(post => {
                return <BlogPost key={post._id} blogPost={post}/>
            })}
            </div>
        );
    }
}