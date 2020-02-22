<template>
  <div>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <div class='cards'>
        <li v-for="card in this.cards" v-bind:key="card._id">
          <staticCard  v-bind:question="card.question"
          v-bind:answer="card.answer" v-bind:id='card._id'>
          </staticCard>
          <h1>dadsadsadsadA</h1>
        </li>
        <addCardForm class="new-card-form" v-if="visibleForm" v-on:closeForm=closeForm()></addCardForm>
        <fab :actions="fabActions" @newCard=openForm() @newQuiz=startQuiz()></fab>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import staticCard from './StaticCard'
import fab from 'vue-fab'
import addCardForm from './AddCardForm'

export default {
  name: 'CardList',
  components: {
    staticCard,
    fab,
    addCardForm
  },
  data () {
    return {
      cards: null,
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
    axios.get('/cards')
      .then(response => {
        this.cards = response.data
      }).catch(error => {
        console.log(error)
        this.errored = true
      })
  },
  methods: {
    closeForm: function () {
      this.visibleForm = false
    },
    openForm: function () {
      this.visibleForm = true
    },
    startQuiz: function () {
      axios.post('/quizzes', {
        date: new Date()
      })
        .then(response => {
          console.log(response)
        }).catch(error => {
          console.log(error)
          this.errored = true
        })
    }
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
