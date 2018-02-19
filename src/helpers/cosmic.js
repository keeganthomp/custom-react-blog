import axios from 'axios'

export const getBlogPosts = () => {
    return axios({
        method: 'get',
        url: 'https://api.cosmicjs.com/v1/julias-blog-posts/object-type/posts'
        })
}
