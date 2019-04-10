import VueRouter from 'vue-router'
import Home from  './components/Home.vue'
import AboutUs from  './components/AboutUs.vue'
import Portfolio from  './components/Portfolio.vue'
import Contacts from  './components/Сontacts.vue'
import Blog from  './components/Blog.vue'
import Album from './components/Album.vue'
import Post from './components/Post.vue'

export default new VueRouter ({
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/portfolio',
            component: Portfolio
        },
        {
            path: '/aboutUs',
            component: AboutUs
        },
        {
            path: '/blog',
            component: Blog
        },
        {
            path: '/contacts',
            component: Contacts
        },
        {
            path: '/album/:albumId',
            component: Album
        },
        {
            path: '/post/:postId',
            component: Post
        },

        ],
    mode: 'history'
})