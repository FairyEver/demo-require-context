import Vue from 'vue'
import Router from 'vue-router'
import req from './req'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      redirect: { name: 'index' },
      component: resolve => { require(['@/components/mainLayout/index.vue'], resolve) },
      children: req('src/page/layoutIn/', require.context('@/page/layoutIn', true, /page\.vue$/))
    },
    ...req('src/page/layoutOut', require.context('@/page/layoutOut', true, /page\.vue$/))
  ]
})
