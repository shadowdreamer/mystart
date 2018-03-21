<template>
  <div id="app">
    <myNav></myNav>
    
    <transition name = 'content'>
      <router-view/>
    </transition>
    <Sidebar></Sidebar>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myNav from "./components/Nav"
import myFooter from "./components/Footer"
import Sidebar from "./components/Sidebar"
export default {
  name: "App",
  components: {
    myNav,myFooter,Sidebar
  }
};
</script>
  
<style>
* {
  padding: 0px;
  margin: 0px;
  list-style: none;
  text-decoration-line: none;
  color: inherit;
}
.content-enter-active {
  transition: all .5s .5s ease;
}
.content-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.content-enter{
  transform: translateX(-10px);
  opacity: 0;
}
.content-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
