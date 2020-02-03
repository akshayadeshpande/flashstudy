<template>
  <div>
    <div class='cards'>
      <li v-for="card in this.cards" v-bind:key="card._id">
          <staticCard  v-bind:question="card.question"
          v-bind:answer="card.answer" :id='card._id'>
          </staticCard>
        </li>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import staticCard from './StaticCard'

export default {
  name: 'CardList',
  components: {
    staticCard
  },
  data () {
    return {
      cards: null,
      errored: false
    }
  },
  mounted () {
    axios.get('http://127.0.0.1:10000/cards')
      .then(response => {
        this.cards = response.data
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
</style>
