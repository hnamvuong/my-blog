import AdminHome from './components/admin/AdminHome'
import CategoryList from './components/admin/category/List'
import AddCategory from './components/admin/category/New'
import EditCategory from './components/admin/category/Edit'

export const routes = [
    {
        path: '/home',
        component: AdminHome
    },
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
    }
]
