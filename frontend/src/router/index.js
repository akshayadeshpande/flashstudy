import Vue from 'vue'
import Router from 'vue-router'
import Card from '@/components/Card'
import CardList from '@/components/CardList'
import QuizList from '@/components/QuizList'
import Quiz from '@/components/Quiz'

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
    },
    {
      path: '/quizzes',
      name: 'QuizList',
      component: QuizList
    },
    {
      path: '/quizzes/:quizId',
      name: 'Quiz',
      component: Quiz
    }
  ]
})
