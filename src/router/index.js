import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Project from '@/components/Project'
import Resume from '@/components/Resume'

Vue.use(Router)

export default new Router({
   mode: 'history',
   routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
    	path: '/resume',
    	name: 'Resume',
    	component: Resume
    }
  ]
})
