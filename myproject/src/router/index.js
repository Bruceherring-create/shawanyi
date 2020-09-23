import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import agencySearch from '../components/agencySearch.vue'
import agencySet from '../components/agencySet.vue'
Vue.use(Router)

export default new Router({
  scrollBehavior:()=>({
    y:0
  }),
  routes: [
    {
      
      path: '/',
      component:Home,
     
      name:'代理事物',
      
      children:[
      {
        path:'/agencySet',
        component:agencySet
      },
      {path:'/agencySearch',
        component:agencySearch  
      }
    ]
      
    },
    {
      path:'/girl',
      component:girl
    }
  ],
  mode:'history'
})
