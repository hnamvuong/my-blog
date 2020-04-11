<template>
    <span id="blog-post">
        <section id="inner-headline">
            <div class="container">
                <div class="row">
                    <div class="span4">
                        <div class="inner-heading">
                            <h2>Blog left sidebar</h2>
                        </div>
                    </div>
                    <div class="span8">
                        <ul class="breadcrumb">
                            <li><a href="#"><i class="icon-home"></i></a><i class="icon-angle-right"></i></li>
                            <li><a href="#">Blog</a><i class="icon-angle-right"></i></li>
                            <li class="active">Blog with left sidebar</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section id="content">
            <div class="container">
                <div class="row">
                    <div class="span8">
                        <article v-for="blog in getAllBlog">
                            <div class="row">
                                <div class="span8">
                                    <div class="post-image">
                                        <div class="post-heading">
                                            <h3><a href="#">{{blog.title}}</a></h3>
                                        </div>
                                        <img :src="`uploadimage/${blog.photo}`" alt="No image"/>
                                    </div>
                                    <p>{{blog.description | sortlength(500, '...')}}</p>
                                    <div class="bottom-article">
                                        <ul class="meta-post">
                                            <li><i class="icon-calendar"></i><a href="#"> Mar 23, 2013</a></li>
                                            <li v-if="blog.user"><i class="icon-user"></i><a href="#">{{blog.user.name}}</a></li>
                                            <li v-else><i class="icon-user"></i><a href="#">Anonymous</a></li>
                                            <li v-if="blog.category"><i class="icon-folder-open"></i><a href="#">{{blog.category.name}}</a></li>
                                            <li v-else><i class="icon-folder-open"></i><a href="#"> Blog</a></li>
                                            <li><i class="icon-comments"></i><a href="#">4 Comments</a></li>
                                        </ul>
                                        <a href="#" class="pull-right">Continue reading <i class="icon-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <div id="pagination">
                            <span class="all">Page 1 of 3</span>
                            <span class="current">1</span>
                            <a href="#" class="inactive">2</a>
                            <a href="#" class="inactive">3</a>
                        </div>
                    </div>
                    <BlogSidebar></BlogSidebar>
                </div>
            </div>
        </section>
    </span>
</template>

<script>
    import BlogSidebar from "./BlogSidebar";
    export default {
        name: "BlogPost",
        data() {
            return {

            }
        },
        components: {
            BlogSidebar
        },
        mounted() {
            this.$store.dispatch('allBlogPost');
        },
        computed: {
            getAllBlog() {
                return this.$store.getters.getBlogPost;
            }
        },
        method : {

        }
    }
</script>

<style scoped>

</style>
