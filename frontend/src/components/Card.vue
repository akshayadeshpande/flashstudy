<template>
    <div style='text-align: center'>
      <vue-flashcard style="width: 50%; display: inline-block; position: relative"
        v-bind:front="question"
        v-bind:back="answer">
      </vue-flashcard>
      <div>
        <addCardForm class="new-card-form" v-if="visibleForm" v-on:closeForm=closeForm() 
          :editCard=true :id=this.id :q=this.question :a=this.answer></addCardForm>
        <button @click=openForm()>Edit </button>
        <button @click=deleteCard()>Delete </button>
      </div>
    </div>
</template>>

<script>
import vueFlashcard from 'vue-flashcard'
import axios from 'axios'
import addCardForm from './AddCardForm'

export default {
  name: 'Flashcard',
  components: {
    vueFlashcard,
    addCardForm
  },
  data () {
    return {
      id: this.$route.params.cardId,
      question: null,
      answer: null,
      errored: false,
      visibleForm: false
    }
  },
  mounted () {
    axios.get(`/cards/${this.$route.params.cardId}`)
      .then(response => {
        this.question = response.data.question
        this.answer = response.data.answer
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
    deleteCard: function () {
      axios.delete(`/cards/${this.$route.params.cardId}`)
        .then(response => {
          this.$router.push({name: 'CardList'})
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

.rounded {
    border-radius:rem
}

</style>
