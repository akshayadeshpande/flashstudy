<template>
  <div id="app">
    <header>
      <span>
        Flashstudy
        <button @click=myCards>My Cards</button>
        <button @click=myQuizzes>My Quizzes</button>
      </span>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

import Hello from '@/components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  },
  data () {
    return {
      errored: null
    }
  },
  methods: {
    myCards: function () {
      this.$router.push({name: 'CardList'})
        .catch(err => { this.errored = err })
    },
    myQuizzes: function () {
      this.$router.push({name: 'QuizList'})
        .catch(err => { this.errored = err })
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 112px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
