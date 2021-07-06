const express = require('express');
const Vue = require('vue')
const app = express();
const PORT = 8000;


const Counter = {
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}

Vue.createApp(Counter).mount('#counter')

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
