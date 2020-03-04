<template>
  <div>
    <addCardForm class="new-card-form" v-if="visibleForm" v-on:closeForm=closeForm()></addCardForm>
    <fab :actions="fabActions" @newCard=openForm() @newQuiz=startQuiz()></fab>
  </div>
</template>

<script>
import fab from 'vue-fab'
import axios from 'axios'
import addCardForm from './AddCardForm'

export default {
  name: 'QuickMenu',
  components: {
    fab,
    addCardForm
  },
  data () {
    return {
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
          this.$router.push({ name: 'Quiz', params: {quizId: response.data} })
        }).catch(error => {
          console.log(error)
          this.errored = true
        })
    }
  }
}
</script>
<style>

</style>