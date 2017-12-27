import React, { Component } from 'react';
import AllPosts from './posts.jsx'

export default class Test extends Component {
    render() {
        return (
            <div>
                Blog Here
                <AllPosts />
            </div>
        );
    }
}