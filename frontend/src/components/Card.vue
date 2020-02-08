<template>
    <div>
      <vue-flashcard 
        v-bind:front="question"
        v-bind:back="answer">
      </vue-flashcard>
    </div>
</template>>

<script>
import vueFlashcard from 'vue-flashcard'
import axios from 'axios'

export default {
  name: 'Flashcard',
  components: {
    vueFlashcard
  },
  data () {
    return {
      id: null,
      question: null,
      answer: null,
      errored: false
    }
  },
  mounted () {
    axios.get(`http://127.0.0.1:10000/cards/${this.$route.params.cardId}`)
      .then(response => {
        this.id = response.data.id
        this.question = response.data.question
        this.answer = response.data.answer
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

.Flashcard {
  background-color: white
}

.rounded {
    border-radius:rem
}

</style>
