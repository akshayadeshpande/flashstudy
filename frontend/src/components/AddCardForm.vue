<template>
    <form class="vue-form" method="post" action='http://127.0.0.1:10000/cards'>

        <fieldset>
        <legend>
          <h2>Add a new card <button v-on:click="$emit('closeForm')">-</button> </h2>         
        </legend>
        <div>
            <label class="label" for="question">Front</label>
            <input type="text" name="question" id="question" required="" v-model="question">
        </div>
        <div>
            <label class="label" for="answer">Back</label>
            <textarea class="message" name="answer" id="answer" required="" 
                    v-model="answer"></textarea>
        </div>
        <div>
            <input type="submit" value="Add Card" @click.stop.prevent="submit()">
        </div>
        </fieldset>
    </form>
</template>

<script>
import axios from 'axios'
// import router from '../router'

export default {
  name: 'AddCardButton',
  data: () => {
    return {
      id: null,
      question: null,
      answer: null,
      errored: false
    }
  },
  methods: {
    submit: function () {
      axios.post('http://127.0.0.1:10000/cards', {
        question: this.question,
        answer: this.answer
      })
        .then((response) => {
          this.$router.go()
        }).catch(error => {
          console.log(error)
          this.errored = true
        })
    }
  }
}
</script>

<style>

.vue-form {
  font-size: 16px;
  width: 40%;
  padding: 15px 30px;
  border-radius: 10px;
  margin: 50px auto;
  background-color: #fff;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
}

fieldset {
  border: 0px;
}
.vue-form legend {
  padding-bottom: 10px;
  border-bottom: 1px solid #ecf0f1;

}
.vue-form div {
  position: relative;
  margin: 20px 0;
}
.vue-form h4,
.vue-form .label {
  color: #94aab0;
  margin-bottom: 10px;
}
.vue-form .label {
  display: block;
}
.vue-form input,
.vue-form textarea,
.vue-form label {
  color: #2b3e51;
}
.vue-form input[type="text"],
.vue-form textarea,
.vue-form legend {
  display: block;
  width: 100%;
  appearance: none;
}
.vue-form input[type="text"],
.vue-form textarea{
  padding: 12px;
  border: 1px solid #cfd9db;
  background-color: #ffffff;
  border-radius: 0.25em;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
}
.vue-form input[type="text"]:focus,
.vue-form textarea:focus{
  outline: none;
  border-color: #2c3e50;
  box-shadow: 0 0 5px rgba(44, 151, 222, 0.2);
}

.vue-form .vue-form-list {
  margin-top: 16px;
}
.vue-form .vue-form-list::after {
  clear: both;
  content: "";
  display: table;
}
.vue-form .vue-form-list li {
  display: inline-block;
  position: relative;
  user-select: none;
  margin: 0 26px 16px 0;
  float: left;
}

.vue-form textarea {
  min-height: 120px;
  resize: vertical;
  overflow: auto;
}
.vue-form input[type="submit"] {
  border: none;
  background: #2c3e50;
  border-radius: 0.25em;
  padding: 12px 20px;
  color: #ffffff;
  font-weight: bold;
  float: right;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  appearance: none;
}
.no-touch .vue-form input[type="submit"]:hover {
  background: #42a2e1;
}
.vue-form input[type="submit"]:focus {
  outline: none;
  background: #2b3e51;
}
.vue-form input[type="submit"]:active {
  transform: scale(0.9);
}

.vue-form .counter {
  background-color: #ecf0f1;
  position: absolute;
  right: 0px;
  top: 0px;
  font-size: 10px;
  padding: 4px;
}


</style>

