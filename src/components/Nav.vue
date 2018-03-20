<template>
  <div class="wrapper">
      <div class="nav">
          <div class ="menu" @click="showside = !showside"><img src="../assets/Category.png" alt=""></div>
          <div class="whiteclose" v-show="showside" @click="showside = !showside"></div>
          <ul class="list" :class="{showlist:showside}">
              <div class="showme">
                <img src="../assets/logo.jpg">
              </div>
              <li class="links" @click="showside = !showside;index = 1"><router-link to="/">Home</router-link></li>
              <li class="links" @click="showside = !showside;index = 2"><router-link to="/timeline">TimeLine</router-link></li>
              <li class="links" @click="showside = !showside;index = 3"><router-link to="/about">AboutMe</router-link></li>
          </ul>
          
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showside: false,
      index : 1
    };
  }
};
</script>
<style scoped>
.nav {
  max-width: 999px;
  height: 40px;
  background-color: white;
  margin: 20px auto;
  box-shadow: 1px 1px 5px gray;
  border-radius: 2px;
}
@media (max-width: 768px) {      
    /* 小屏幕 */
  .list {
    position: fixed;
    height: 100%;
    width: 250px;
    background: white;
    box-shadow: 1px 1px 5px gray;
    top: 0px;
    left: -260px;
    z-index: 30;
    transition: all 0.3s cubic-bezier(0.86, 0, 0.07, 1);
  }
  .list li {
    padding-left: 20px;
    box-sizing: border-box;
    margin-top: 20px;
  }
  .menu {
    display: inline-block;
    margin: 7px 7px
  }
  .menu img{
      height: 26px;
  }
  .showlist {
    left: 0px;
  }
  .whiteclose {
    position: fixed;
    top: 0px;
    height: 100%;
    width: 100%;
    background-color: black;

    opacity: 0.3;
    z-index: 29;
  }
  .showme img{
      display: block;
  }
}


@media (min-width: 768px) {
  .list li {
    float: left;
    width: 120px;
    text-align: center;
  }
  .menu {
    display: none;
  }
  .showme img{
      display: none;
  }
}



.links {
  color: dimgrey;
  font-size: 19px;
  line-height: 40px;
}
.links:hover {
  background-color: rgb(196, 195, 195);
  color: black;
}
</style>

