<template>
    <div class="wrap">
        <div class="btn" @click="isopen=!isopen">
            <slot name="icon"></slot>
        </div>
        <transition name="down">
            <div class="box" v-show="isopen">
                <ul>
                    <!-- <li  @click="share" ></li> -->
                    <li v-for="item in listdata" :key='item.id' @click="isopen=!isopen">
                        <a :href="item.link" target="_blank">{{item.text}}</a>
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
        share(url, title) {
            console.log("!");
        },
        next() {}
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
.btn {
    width: 100px;
    text-align: right;
}
.wrap:hover .btn::before {
    display: inline-block;
    position: absolute;
    content: "Contact me";
    margin-left: -70px;
    margin-top: 30px;
    height: 30px;
    line-height: 28px;
    font-size: 12px;
    text-align: center;
    border-radius: 8px;
    width: 100px;
    background-color: rgba(8, 8, 8);
    color: white;
    z-index: 8;
}
.box {
    z-index: 30;
    margin-top: -38px;
    width: 107px;
    position: absolute;
    background-color: white;
    box-shadow: 0px 0px 4px gray;
    box-sizing: border-box;
}
.box li {
    display: block;
    height: 50px;
    padding-left: 22px;
}
.box li:nth-of-type(1) {
    margin-top: 30px;
}
.box li a {
    font-size: 16px;
    line-height: 50px;
    display: block;
}
.box li:hover {
    background-color: rgb(245, 236, 239);
    border-left: 6px palevioletred solid;
    padding-left: 16px;
}
.cmn {
    z-index: 29;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    position: fixed;
}
.down-enter-active {
    transition: all 0.2s ease-in;
}
.down-leave-active {
    transition: all 0.2s ease-in;
}
.down-enter {
    transform: translate(10px, -30px);
    opacity: 0;
}
.down-leave-to {
    transform: translate(-10px, 30px);
    opacity: 0;
}
</style>
