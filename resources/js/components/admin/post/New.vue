<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-around">
                <!-- left column -->
                <div class="col-md-10">
                    <!-- general form elements -->
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Add New Post</h3>
                        </div>
                        <!-- /.card-header -->
                        <!-- form start -->
                        <form role="form" enctype="multipart/form-data" @submit.prevent="addPost()">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="postId">Add Title Post </label>
                                    <input type="text" class="form-control" id="postId" placeholder="Add Title Post"
                                           v-model="form.title" name="title"
                                           :class="{ 'is-invalid': form.errors.has('title') }">
                                    <has-error :form="form" field="title"></has-error>
                                </div>
                                <div class="form-group">
                                    <label for="descriptionId">Add Description Post</label>
                                    <textarea v-model="form.description" name="description" type="text"
                                              class="form-control"
                                              id="descriptionId" placeholder="Add Description Post"
                                              :class="{ 'is-invalid': form.errors.has('description') }">
                                    </textarea>
                                    <has-error :form="form" field="description"></has-error>
                                </div>
                                <div class="form-group">
                                    <label>Select Category</label>
                                    <select class="form-control"
                                            :class="{ 'is-invalid': form.errors.has('category_id') }"
                                            v-model="form.category_id">
                                        <option disabled selected value="">Select One</option>
                                        <option :value="category.id" v-for="category in getAllCategory">
                                            {{category.name}}
                                        </option>
                                    </select>
                                    <has-error :form="form" field="cat_id"></has-error>
                                </div>
                                <div class="form-group">
                                    <input @change="changePhoto($event)" name="photo" type="file"
                                           :class="{ 'is-invalid': form.errors.has('photo') }">
                                    <img :src="form.photo" alt="" width="80" height="80">
                                    <has-error :form="form" field="photo"></has-error>
                                </div>
                            </div>
                            <!-- /.card-body -->
                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                    <!-- /.card -->
                </div>
            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
    </section>
</template>

<script>
    export default {
        name: "New",
        data() {
            return {
                form: new Form({
                    category_id: '',
                    title: '',
                    description: '',
                    photo: '',
                })
            }
        },
        mounted() {
            this.$store.dispatch("allCategory");
        },
        computed: {
            getAllCategory() {
                return this.$store.getters.getCategory
            }
        },
        methods: {
            changePhoto(event) {
                let file = event.target.files[0];
                if (file.size > 1048576) {
                    swal({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Image size too big!',
                        footer: '<a href>Why do I have this issue?</a>'
                    });
                } else {
                    let reader = new FileReader();
                    reader.onload = event => {
                        this.form.photo = event.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            },
            addPost() {
                this.form.post('/add-post')
                    .then(() => {
                        this.$router.push('/post-list');
                        toast({
                            type: 'success',
                            title: 'Category Added Successfully'
                        })
                    }).catch(() => {

                })
            }
        }
    }
</script>

<style scoped>

</style>
