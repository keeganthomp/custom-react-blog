import React, { Component } from 'react';
import { getBlogPosts } from '../../helpers/cosmic.js'
import BlogPost from './post'

export default class AllPosts extends Component {
    state = {
        blogPosts : []
    }
    componentWillMount = () => {
        this.state.blogPosts.length === 0 && getBlogPosts().then((data) => {
            console.log('DATAAAA:::', data)
            const blogPosts = data.data.objects
            this.setState({ blogPosts })
            console.log('DONEEE:::')
        })
    }
    render() {
        const { blogPosts } = this.state
        return (
            <div className='blog-posts'>
            {blogPosts && blogPosts.map(post => {
                return <BlogPost key={post._id} blogPost={post}/>
            })}
            </div>
        );
    }
}