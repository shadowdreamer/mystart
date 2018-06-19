<template>
    <div id="app">
        <div class="bodyfix">
            <myNav></myNav>
            <transition name='content'>
                <router-view/>
            </transition>
            <Sidebar></Sidebar>
            <myFooter></myFooter>
        </div>
    </div>
</template>

<script>
import myNav from "./components/Nav";
import myFooter from "./components/Footer";
import Sidebar from "./components/Sidebar";

export default {
    name: "App",
    components: {
        myNav,
        myFooter,
        Sidebar
    },
    computed:{
        // bodyfix(){console.log(this); return true}
    }
};
</script>

<style>
@font-face {
    font-family: "dovahkiin";
    src: url("../static/Dovahkiin.ttf");
}
@font-face {
    font-family: "cmn";
    src: url("../static/cmn.ttf");
}
* {
    padding: 0px;
    margin: 0px;
    list-style: none;
    text-decoration-line: none;
    color: inherit;
    font-family: Arial, Helvetica, sans-serif;
}
p {
    font-family: inherit;
}
.bodyfix{
    position: absolute;
    overflow: auto;
    height: 100vh;
    width: 100vw
}
.content-enter-active {
    transition: all 0.5s 0.5s ease;
}
.content-leave-active {
    transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.content-enter {
    transform: translateX(-10px);
    opacity: 0;
}
.content-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
</style>
