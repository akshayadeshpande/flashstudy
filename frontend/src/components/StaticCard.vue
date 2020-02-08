<template>
  <router-link class="staticCard" :to="{ name: 'Card', params: {cardId: id}}">
      <h2>{{ question }}</h2>
      <p>{{ answer }}</p>
  </router-link>
</template>

<script>
export default {
  name: 'StaticCard',
  props: ['id', 'question', 'answer']
}
</script>

<style scoped>
a {
  text-decoration: none;
}
a:hover {
  color: inherit;
}
.staticCard {
  -ms-flex: 1 1 1%;
  flex: 1 1 1%;
  margin: 15px;
  z-index: 499;
  font-family: Roboto;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
  padding: 40px 40px 40px 40px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  transition-property: color, background-color, box-shadow, transform;
  transition-duration: 0.15s;
}
.staticCard > h2 {
  margin: 0 0 5px !important;
  color: #8f6ed5;
  text-transform: uppercase;
  font-size: 17px;
  line-height: 26px;
  font-weight: 600;
  margin: 10px;
  letter-spacing: 0.025em;
}

.staticCard > p {
  margin: 5px 0 0;
  font-weight: 400;
  font-size: 17px;
  line-height: 26px;
  color: #6b7c93;
}
.staticCard:hover {
  color: #32325d !important;
  transform: translateY(-5px);
  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);
}
.staticCard:hover > h2 {
  color: #32325d !important;
}
.staticCard:active {
  transform: translateY(5px);
  box-shadow: 0 11px 20px rgba(50, 50, 93, 0.1), 0 6px 11px rgba(0, 0, 0, 0.08);
  background: #eaeaea;
}
</style>