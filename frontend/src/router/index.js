import Vue from 'vue'
import Router from 'vue-router'
import Card from '@/components/Card'
import CardList from '@/components/CardList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cards',
      name: 'CardList',
      component: CardList
    },
    {
      path: '/cards/:cardId',
      name: 'Card',
      component: Card
    }
  ]
})
