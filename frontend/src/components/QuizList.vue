<template>
  <div>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <div class='cards' v-if="this.quizzes.length > 0">
        <li v-for="quiz in this.quizzes" v-bind:key="quiz._id">
          <staticCard  v-bind:question="quiz.correctScore"
          v-bind:answer="quiz.incorrectScore" v-bind:id='quiz._id'>
          </staticCard>
        </li>
    </div>
    <div v-if="this.quizzes.length == 0">
      <h5> No Completed Quizzes! </h5>
    </div>
    <quickMenu></quickMenu>
  </div>
</template>

<script>
import axios from 'axios'
import staticCard from './StaticCard'
import quickMenu from './QuickMenu'

export default {
  name: 'CardList',
  components: {
    staticCard,
    quickMenu
  },
  data () {
    return {
      quizzes: [],
      errored: false,
      visibleForm: false,
      fabActions: [
        {
          name: 'newQuiz',
          icon: 'create_new_folder'
        },
        {
          name: 'newCard',
          icon: 'fiber_new'
        }
      ]
    }
  },
  mounted () {
    axios.get('/quizzes')
      .then(response => {
        this.quizzes = response.data
      }).catch(error => {
        console.log(error)
        this.errored = true
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  text-align: center;
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

.new-card-form {
  padding-top: 30px  
}
</style>
