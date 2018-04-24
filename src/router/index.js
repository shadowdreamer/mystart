import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import Timeline from '@/components/Timeline'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Content
        },
        {
            path: '/timeline',
            name: 'timeline',
            component: Timeline
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            if (window.scrollY < 160) {
                return undefined
            } else {
                return { x: 0, y: 160 }
            }
        }
    }
})
