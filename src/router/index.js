import Vue from 'vue'
import Router from 'vue-router'

import content from '@/components/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'contenter11',
      meta: {
        title: '测试页面'
      },
      component: content
    }
  ]
})
