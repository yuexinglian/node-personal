<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button :onclick="testApi()">click me</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    testApi: () => {
      axios.get('/api/testApi')
      .then(function(res){
        console.log(res)
      }).catch(function(err){
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h3 {
  margin: 40px 0 0;
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
  color: #42b983;
}
</style>
