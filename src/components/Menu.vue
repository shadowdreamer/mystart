<template>
    <div class="wrap">
        <div class="btn" @click="isopen=!isopen">           
            <slot name="icon" ></slot> 
        </div>
        <transition name = "down">
            <div  class="box" v-show="isopen">
            <ul>
                <li  v-for="item in listdata" :key='item.id' @click="isopen=!isopen">
                    <a :href="item.link" target="_blank" >{{item.text}}</a>
                </li>
            </ul>
            </div>
        </transition>

        
      <div class="cmn" v-show="isopen" @click="isopen=!isopen">

      </div>
        
    </div>
</template>
<script>
export default {
  props: ["listdata"],
  data() {
    return {
      isopen: false
    };
  },
  methods: {
      openit(){
        
          
        
      }
  }
};
</script>
<style scoped>
* {
  font-size: 18px;
  color: gray;
}
.wrap {
   
}
.btn{
  width: 100px;
  text-align: right
    
}
.box{ 
    z-index: 30;
    margin-top: -38px;
    width: 107px;
    position: absolute;
    background-color: white;
    box-shadow: 0px 0px 4px gray; 
    box-sizing: border-box;
   
    
}
.box li{
    display: block;
    height: 50px;
    padding-left: 10px;
}
.box li a{    
    line-height: 50px;
    display:block;
}
.box li:hover{
    background-color: rgb(245, 236, 239)
}
.cmn{
    z-index: 29;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    position: fixed;
}
.down-enter-active {
  transition: all .2s ease-in;
}
.down-leave-active {
  transition: all .2s ease-in;
}
.down-enter{

  transform: translate(10px,-10px);
  opacity: 0;
}
.down-leave-to {

   
  transform: translate(-10px,10px);
  opacity: 0;
}
</style>
