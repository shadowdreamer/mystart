<template>
  <div class="wrapper">
      <div class="nav" :class="{'navfix':navfix}">
          <div class ="menu" @click="showside = !showside"><img src="../assets/Category.png" alt="三"></div>
          <div class="title"><router-link to="/">Jing's Blog</router-link></div>
          <div class="whiteclose" v-show="showside" @click="showside = !showside"></div>
          <ul class="list" :class="{showlist:showside}">
              <div class="showme">
                <img src="../assets/logo.jpg">
              </div>
              <li class="links" @click="showside = !showside"><router-link to="/">Home</router-link></li>
              <li class="links" @click="showside = !showside;index = 2"><router-link to="/timeline">TimeLine</router-link></li>
              <li class="links" @click="showside = !showside;index = 3"><router-link to="/about">AboutMe</router-link></li>
                <div class="foot">
                    <p>©2018   shadowdreamer</p>
                    <p>荣幸的采用<a href="https://cn.vuejs.org/">Vue.js</a>搭建</p>
                    <p>所有组件全部手打的静态博客</p>
                    <p><a href="http://www.miitbeian.gov.cn/" target="_blank">冀ICP备17023742号</a> </p>                    
                </div>        
          
          </ul>
          
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showside: false,
      index: 1,
      navfix: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 140) {
        this.navfix = true;
      } else {
        this.navfix = false;
      }
    }
  }
};
</script>
<style scoped>
.nav {
  max-width: 999px;
  height: 40px;
  background-color: white;
  box-shadow: 1px 1px 5px gray;
  border-radius: 2px;
  font-size: 0px;
 
}
.wrapper {
  height: 300px;
  width: 100%;
  padding-top: 50px;
  background-image: url("../assets/title.jpg");
  background-size: 100%;
  background-position: center;
}

@media (max-width: 768px) {
  /* 小屏幕 */
  .nav {
    margin: 40px auto 20px;
    
  }
  .wrapper {
    height: 120px;
  }
  .navfix {
    margin-top: 0px;
    position: fixed;
    top: 0px;
    width: 100%;
  }

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
    margin: 7px 7px;
    
  }
  .menu img {
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

    opacity: 0.6;
    z-index: 29;
  }
  .showme {
    margin: 20px 20px;
    
  }
  .showme img {
    display: block;
    width: 150px;
    border-radius: 50%;
    
  }
  .title {
    display: inline-block;
    vertical-align: top;
    text-align: center;
    width: 120px;
    margin-left: 25%;
    color: dimgrey;
    font-size: 19px;
    line-height: 40px;
  }
  .foot{
      position: absolute;
      left: 10px;
      bottom: 10px;
      font-size: 12px;
      color: rgb(172, 171, 171);

  }
  .foot p{
      margin-top: 3px;
  }
}

@media (min-width: 768px) {
    .foot{
        display: none;
    }
  .nav {
    margin: 40px auto 20px;
  }
  div.navfix {
    margin-top: 0px;
    position: fixed;
    top: 0px;
    width: 100%;
    max-width: none;
  }
  .list li {
    float: left;
    width: 120px;
    text-align: center;
  }
  .menu {
    display: none;
  }
  .showme img {
    display: none;
  }
  .title {
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

