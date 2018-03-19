<template>
  <div class="main-content">
    {{msg}}
    <div class="test">占个位置
     
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
  data () {
    return {
      msg: '这里是首屏页面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-content{
  padding-bottom: 150px;
}
.test{
  height: 1000px;
  width: 600px;
  border: 2px gray solid;
  margin:10px auto;
}

</style>
