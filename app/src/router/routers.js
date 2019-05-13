import Index from '../modules/index'
import Detail from '../modules/detail'
import Register from '../modules/register'
import Login from '../modules/login'


export default [
    {
        path: '/main',
        component: Index
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/detail/1',
        component: Detail
    }
]