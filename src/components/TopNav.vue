<template>
    

</template>
<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
    /* #top-nav{

        width: 100%;
        height: 30px;
        background-color: black;
        color: white;
        
    }
    #top-nav li{
        float: left;
        margin: 2px 10px;
        cursor: pointer;
    } */
</style>


