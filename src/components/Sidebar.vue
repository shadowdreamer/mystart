<template>
  <div class="wrapper" >
      <div class="btn" >
          <a href="#"></a>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
    
  }
};
</script>
<style scoped>
.wrapper {
  position: fixed;
  bottom: 38px;
  right: 38px;
  z-index: 9;
}
.btn{
    height: 60px;
    width: 60px;
    background-color: white;
    background-image: url("../assets/less.png");
    background-size: 60px 60px;
    border-radius: 50%;
    box-shadow: 0 0 15px gray;
}
.btn a{
  display: block;
  height: 60px;
  width: 60px;
}
</style>
