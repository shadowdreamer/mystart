<template>
  <div id="app">
    <TopNav></TopNav>
    <router-view/>
    
  </div>
  
</template>

<script>
import TopNav from './components/TopNav'

export default {
  name: 'App',
  components:{
    TopNav,
  }
}
</script>
  
<style>
  *{
    padding: 0px;
    margin: 0px;
    list-style: none;
    text-decoration-style: none;
    color: inherit;
    text-decoration-line: none;
  }
</style>
