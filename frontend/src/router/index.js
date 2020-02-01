import Vue from 'vue'
import Router from 'vue-router'
import Card from '@/components/Card'
import CardList from '@/components/CardList'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cards',
      name: 'CardList',
      component: CardList
    },
    {
      path: '/cards/:id',
      name: 'Card',
      component: Card
    }
  ]
})
