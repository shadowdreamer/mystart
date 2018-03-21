<template>  
    <div>
        <div class="zhanwei"></div>
        <transition name = 'footer'>
        <footer v-show="showfoot">
        <p>©2018   shadowdreamer</p>
        <p> <span>荣幸的采用<a href="https://cn.vuejs.org/">Vue.js</a>搭建</span> <span>所有组件全部手打的静态博客</span></p>
        
        <p><a href="http://www.miitbeian.gov.cn/" target="_blank">冀ICP备17023742号</a> </p>     

        </footer>
    </transition>

    </div>
    
</template>
<script>
export default {
  data() {
    return {
      showfoot: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      //取网页卷上去的高度
      var h1 = document.body.scrollTop
        ? document.body.scrollTop
        : document.documentElement.scrollTop;
      //取网页中能看到高
      var h2 = document.documentElement.clientHeight
        ? document.documentElement.clientHeight
        : document.body.clientHeight;
      //取网页正文高，包含被卷上去的内容
      var h3 = document.documentElement.scrollHeight
        ? document.documentElement.scrollHeight
        : document.body.scrollHeight;
      if (h3 - h1 - h2 < 10) {
        this.showfoot = true;
      }else{
           this.showfoot = false;
      }
    }
  }
};
</script>
<style scoped>
footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 50px;
  background-color: white;
  box-shadow: -1px -1px 3px gray;
  font-size: 12px;
  color: gray;
  text-align: center;
}
p span {
  margin-left: 30px;
}
.footer-enter-active ,
.footer-leave-active {
  transition: all .4s ease;
}
.footer-enter{
  transform: translateY(-10px);
  opacity: 0;
}
.footer-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
.zhanwei{
    height: 10px;
}
p a{
  color:rgb(199, 167, 178);
}
</style>
