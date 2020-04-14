<template>
    <span id="blog-sidebar">
	<div class="span4">
		<aside class="right-sidebar">
			<div class="widget">
				<form class="form-search">
					<input @keyup="realSearch" placeholder="Type something" type="text" class="input-medium search-query" v-model="keyword">
						<button type="submit" @click="realSearch" class="btn btn-square btn-theme">Search</button>
					</form>
				</div>
				<div class="widget">
                    <h5 class="widgetheading"><router-link to="/blog">All Categories</router-link></h5>
					<ul class="cat">
						<li v-for="category in getAllCategoryBlog">
							<i class="icon-angle-right"></i>
							<router-link :to="`/categories/${category.id}`">{{category.name}}</router-link>
							<span> (20)</span>
						</li>
					</ul>
				</div>
				<div class="widget">
                    <h5 class="widgetheading"><router-link to="/blog">Latest </router-link></h5>
					<ul class="recent">
						<li v-for="(blog, index) in getAllBlog" v-if="index<5">
							<img :src="`uploadimage/${blog.photo}`" class="pull-left" alt="No image" width="40"
                                 height="40"/>
							<h6>
								<router-link :to="`/blog/${blog.id}`">{{blog.title}}</router-link>
							</h6>
							<p>{{blog.description | sortlength(100, '...')}}</p>
						</li>
					</ul>
				</div>
			</aside>
		</div>
	</span>
</template>

<script>
    import _ from 'lodash';
    export default {
        name: "BlogSidebar",
        data() {
            return {
                keyword: '',
            }
        },
        mounted() {
            this.$store.dispatch('allCategoryBlog');
            this.$store.dispatch('allBlogPost');
        },
        computed: {
            getAllCategoryBlog() {
                return this.$store.getters.getCategoryBlog;
            },
            getAllBlog() {
                return this.$store.getters.getBlogPost;
            },
        },
        methods: {
            realSearch:_.debounce(function () {
                this.$store.dispatch('searchPost', this.keyword);
            }, 1000)
        }
    }
</script>

<style scoped>

</style>
