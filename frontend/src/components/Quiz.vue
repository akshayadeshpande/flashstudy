<template>
  <div>
    <div class='quiz' style='text-align: center'>
      <vue-flashcard ref="vueCard" v-if="this.cards" style="width: 50%; display: inline-block; position: relative"
        v-bind:front="this.cards[this.currentIndex].question"
        v-bind:back="this.cards[this.currentIndex].answer">
      </vue-flashcard>
    </div>
    <div>
      <button @click=incorrect()>Wrong </button>
      <button @click=correct()>Correct </button>
    </div>
    <div>
      <button @click=endQuiz()>End Quiz </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import vueFlashcard from 'vue-flashcard'

export default {
  name: 'Quiz',
  components: {
    vueFlashcard
  },
  data () {
    return {
      id: null,
      cards: null,
      errored: false,
      currentIndex: 0,
      correctQ: [],
      incorrectQ: []
    }
  },
  mounted () {
    axios.get('/cards')
      .then(response => {
        this.cards = this.randomise(response.data)
      }).catch(error => {
        console.log(error)
        this.errored = true
      })
  },
  methods: {
    randomise: function (array) {
      var count = array.length
      var temp, index

      while (count !== 0) {
        index = Math.floor(Math.random() * count)
        count -= 1
        temp = array[count]
        array[count] = array[index]
        array[index] = temp
      }

      return array
    },
    next: function () {
      if (this.currentIndex === this.cards.length - 1) {
        this.endQuiz()
      } else {
        this.currentIndex++
        // Ensures the card is reset to the original view
        this.$refs.vueCard.isToggle = false
      }
    },
    correct: function () {
      this.correctQ.push(this.cards[this.currentIndex]._id)
      this.next()
    },
    incorrect: function () {
      this.incorrectQ.push(this.cards[this.currentIndex]._id)
      this.next()
    },
    endQuiz: function () {
      axios.post(`/quizzes/${this.$route.params.quizId}`, {
        correctScore: this.correctQ.length,
        incorrectScore: this.incorrectQ.length
      })
        .then(response => {
          this.$router.push({name: 'QuizList'})
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
