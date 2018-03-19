import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '@/components/MainContent'
import TimeLine from '@/components/TimeLine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainContent',
      component: MainContent
    },
    {
      path: '/timeline',
      name: 'TimeLine',
      component: TimeLine,
    }
  ]
})
