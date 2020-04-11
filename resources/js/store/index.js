export default {
    state: {
        category: [],
        post: [],
        blogPost: [],
    },
    getters: {
        getCategory(state) {
            return state.category;
        },
        getPost(state) {
            return state.post;
        },
        getBlogPost(state) {
            return state.blogPost;
        }
    },
    actions: {
        allCategory(context) {
            axios.get('/category')
                .then((response) => {
                    context.commit('categories', response.data.categories)
            })
        },
        allPost(context) {
            axios.get('/post')
                .then((response) => {
                    context.commit('posts', response.data.posts)
                })
        },
        allBlogPost(context) {
            axios.get('blog-post')
                .then((response) => {
                    context.commit('blogPosts', response.data.posts)
                })
        }
    },
    mutations: {
        categories (state, data) {
            return state.category = data
        },
        posts (state, data) {
            return state.post = data
        },
        blogPosts (state, data) {
            return state.blogPost = data
        }
    },
}
