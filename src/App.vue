<template>
  <div id="app">
    <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/home">about Home</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
