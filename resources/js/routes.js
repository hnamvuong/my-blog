import AdminHome from './components/admin/AdminHome'
//Category
import CategoryList from './components/admin/category/List'
import AddCategory from './components/admin/category/New'
import EditCategory from './components/admin/category/Edit'
//Post
import PostList from './components/admin/post/List'
import AddPost from './components/admin/post/New'
import EditPost from './components/admin/post/Edit'
//Frontend
import PublicHome from "./components/public/PublicHome";
import BlogPost from "./components/public/blog/BlogPost";
import BlogSidebar from "./components/public/blog/BlogSidebar";
import SingleBlog from "./components/public/blog/SingleBlog";

export const routes = [
    {
        path: '/home',
        component: AdminHome
    },
    //Category
    {
        path: '/category-list',
        component: CategoryList
    },
    {
        path: '/add-category',
        component: AddCategory
    },
    {
        path: '/edit-category/:categoryId',
        component: EditCategory
    },
    //Post
    {
        path: '/post-list',
        component: PostList
    },
    {
        path: '/add-post',
        component: AddPost
    },
    {
        path: '/edit-post/:postId',
        component: EditPost
    },
    //Frontend Page
    {
        path: '/',
        component: PublicHome
    },
    {
        path: '/blog',
        component: BlogPost
    },
    {
        path: "/blog/:blogId",
        component: SingleBlog
    },
    {
        path: "/categories/:categoryId",
        component: BlogPost
    }
];
