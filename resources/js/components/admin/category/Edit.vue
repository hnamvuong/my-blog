<template>
    <div>
        <section class="content">
            <div class="container-fluid">
                <div class="row justify-content-around">
                    <!-- left column -->
                    <div class="col-md-6">
                        <!-- general form elements -->
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">Edit Category</h3>
                            </div>
                            <!-- /.card-header -->
                            <!-- form start -->
                            <form role="form" @submit.prevent="updateCategory()">
                                <div class="card-body">
                                    <div class="form-group">
                                        <label for="categoryId">Category Name</label>
                                        <input v-model="form.name" name="name" type="text" class="form-control"
                                               id="categoryId" placeholder="Update New Category"
                                               :class="{ 'is-invalid': form.errors.has('name') }">
                                        <has-error :form="form" field="name"></has-error>
                                    </div>
                                </div>
                                <!-- /.card-body -->

                                <div class="card-footer">
                                    <router-link class="btn btn-danger" to="/category-list">Back</router-link>
                                    <button type="submit" class="btn btn-primary">Update</button>
                                </div>
                            </form>
                        </div>
                        <!-- /.card -->
                    </div>
                </div>
                <!-- /.row -->
            </div><!-- /.container-fluid -->
        </section>
    </div>
</template>

<script>
    export default {
        name: "Edit",
        mounted() {
            axios.get(`/category/edit/${this.$route.params.categoryId}`)
                .then((response) => {
                    this.form.fill(response.data.category)
                })
        },
        data() {
            return {
                // Create a new form instance
                form: new Form({
                    name : '',
                })
            }
        },
        methods: {
            updateCategory() {
                this.form.put(`/category/${this.$route.params.categoryId}`)
                    .then((response) => {
                        this.$router.push('/category-list');
                        toast({
                            type: 'success',
                            title: 'Category Updated Successfully'
                        })
                    })
                    .catch(() => {

                })
            }
        }
    }
</script>

<style scoped>

</style>
