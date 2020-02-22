<template>
  <div>
    <div class='quiz' style='text-align: center'>
      <button v-if="this.currentIndex != 0" @click="previous()">&larr;</button>
      <vue-flashcard v-if="this.cards" style="width: 50%; display: inline-block; position: relative"
        v-bind:front="this.cards[this.currentIndex].question"
        v-bind:back="this.cards[this.currentIndex].answer">
      </vue-flashcard>
      <button v-if="this.currentIndex != this.cards.length" @click="next()">&rarr;</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import vueFlashcard from 'vue-flashcard'
import fab from 'vue-fab'

export default {
  name: 'Quiz',
  components: {
    vueFlashcard,
    fab
  },
  data () {
    return {
      cards: null,
      errored: false,
      currentIndex: 0,
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
      this.currentIndex++
    },
    previous: function () {
      this.currentIndex--
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
