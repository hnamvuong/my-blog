export default {
    state: {
        category: [],
        post: [],
        blogPost: [],
        singleBlog: [],
        categoryBlog: [],
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
        },
        getSingleBlog(state) {
            return state.singleBlog;
        },
        getCategoryBlog(state) {
            return state.categoryBlog;
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
        },
        getBlogById(context, payload) {
            axios.get('/blog-post/' + payload)
                .then((response) => {
                    context.commit('singleBlog', response.data.blog)
                })
        },
        allCategoryBlog(context) {
            axios.get('/category-blog')
                .then((response) => {
                    context.commit('categoriesBlog', response.data.categories)
                })
        },
        getPostByCatId(context, payload) {
            axios.get('/category-blog/' + payload)
                .then((response) => {
                    context.commit('BlogByCategoryId', response.data.blogByCategory);
                })
        },
        searchPost(context, payload) {
            axios.get('/search?s=' + payload)
                .then((response) => {
                    context.commit('getSearchPost', response.data.posts)
                })
        }

    },
    mutations: {
        categories(state, data) {
            return state.category = data
        },
        posts(state, data) {
            return state.post = data
        },
        blogPosts(state, data) {
            return state.blogPost = data
        },
        singleBlog(state, data) {
            return state.singleBlog = data
        },
        categoriesBlog(state, data) {
            return state.categoryBlog = data
        },
        BlogByCategoryId(state, data) {
            return state.blogPost = data
        },
        getSearchPost(state, data) {
            return state.blogPost = data
        }
    },
}
