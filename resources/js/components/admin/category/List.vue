<template>
    <div>
        <section class="content">
            <div class="row justify-content-around">
                <div class="col-8">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Category List</h3>
                            <div class="card-tools">
                                <button class="btn btn-success">
                                    <router-link to="/add-category" style="color: #fff">Add Category</router-link>
                                </button>
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="example2" class="table table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>Sl</th>
                                    <th>Category Name</th>
                                    <th>Created at</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(category, index) in getAllCategory" :key="category.id">
                                    <td>{{index + 1}}</td>
                                    <td>{{category.name}}</td>
                                    <td>{{category.created_at | timeformat}}</td>
                                    <td>
                                        <router-link :to="`/edit-category/${category.id}`" class="btn btn-info">Edit</router-link>
                                        <a href="#" class="btn btn-danger" @click.prevent="deleteCategory(category.id)">Delete</a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </section>
    </div>

</template>

<script>
    export default {
        name: "List",
        mounted() {
            this.$store.dispatch('allCategory')
        },
        computed : {
            getAllCategory() {
                return this.$store.getters.getCategory
            }
        },
        methods: {
            deleteCategory(id) {
                axios.delete('/category/' + id).then(() => {
                    this.$store.dispatch('allCategory');
                    toast({
                        type: 'success',
                        title: 'Category Deleted Successfully'
                    })
                }).catch(() => {

                })
            }
        }
    }
</script>

<style scoped>

</style>
