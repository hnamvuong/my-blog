<template>
    <span id="single-blog">
    <section id="content">
      <div class="container">
        <div class="row">
          <div class="span8">
            <article>
              <div class="row">
                <div class="span8">
                  <div class="post-image">
                    <div class="post-heading">
                      <h3><a href="#">{{singleBlog.title}}</a></h3>
                    </div>
                    <img :src="`uploadimage/${singleBlog.photo}`" alt="No image"/>
                  </div>
                  <p>{{singleBlog.description}}</p>
                  <div class="bottom-article">
                    <ul class="meta-post">
                      <li v-if="singleBlog.user"><i class="icon-user"></i><a href="#">{{singleBlog.user.name}}</a></li>
                      <li v-else><i class="icon-user"></i><a href="#">Anonymous</a></li>
                      <li v-if="singleBlog.category"><i class="icon-folder-open"></i><a href="#">{{singleBlog.category.name}}</a></li>
                      <li v-else><i class="icon-folder-open"></i><a href="#">None</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
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
        name: "SingleBlog",
        components: {
            BlogSidebar
        },
        computed: {
            singleBlog() {
                return this.$store.getters.getSingleBlog;
            }
        },
        methods: {
            getSingleBlog() {
                this.$store.dispatch('getBlogById', this.$route.params.blogId);
            }
        },
        mounted() {
            this.getSingleBlog()
        },
        watch: {
            $route(to, from) {
                this.getSingleBlog();
            }
        }
    }
</script>

<style scoped>

</style>
