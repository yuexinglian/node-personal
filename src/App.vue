<template>
  <div id="app">
    <Head></Head>
    <Aside></Aside>
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
  </div>
</template>
<script>
import Head from '@/components/Head.vue'
import Aside from '@/components/Aside.vue'
export default {
  name: 'home',
  components: {
    Head,
    Aside
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
