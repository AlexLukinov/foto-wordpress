import VueRouter from 'vue-router'
import Home from  './components/Home.vue'
import AboutUs from  './components/AboutUs.vue'
import Services from  './components/Services.vue'
import Contacts from  './components/Сontacts.vue'
import Blog from  './components/Blog.vue'
import Album from './components/Album.vue'
import Post from './components/Post.vue'
import Info from './components/Info.vue'

export default new VueRouter ({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/services/:service',
            component: Services
        },
        {
            path: '/aboutUs',
            component: AboutUs
        },
        {
            path: '/blog/:category',
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
        {
            path: '/info/:catalogId',
            component: Info
        }
    ],
    mode: 'history'
})