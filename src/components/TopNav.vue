<template>
  <div id="top-nav">
      <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>About</li>
      </ul>
  </div>
</template>
<script>
export default {
    name: 'TopNav',
    data(){
      return {
          msg:'顶部导航'
      }
  },

}
</script>
<style scoped>
    #top-nav{

        width: 100%;
        height: 30px;
        background-color: black;
        color: white;
        /* position: fixed; */
    }
    #top-nav li{
        float: left;
        margin: 2px 10px;
        cursor: pointer;
    }
</style>


