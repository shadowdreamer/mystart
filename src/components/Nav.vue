<template>
    <div class="wrapper">
        <div class="bigtitle">
            <p>「いいえ、もう春です」</p>
        </div>
        <div class="nav" :class="{'navfix':navfix}">
            <div class="menu" @click="showside = !showside"><img src="../assets/Category.png" alt="三"></div>
            <div class="title">
                <router-link to="/">Jing's Blog</router-link>
            </div>
            <div class="whiteclose" v-show="showside" @click="showside = !showside"></div>
            <ul class="list" :class="{showlist:showside}">
                <div class="showme">
                    <img src="http://wx4.sinaimg.cn/large/69924d1bgy1fpjm1fi1dej2050050q37.jpg">
                </div>
                <li class="links" :class="{'active':this.$route.name == 'home' }" @click="showside = !showside">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="links" :class="{'active':this.$route.name == 'timeline' }" @click="showside = !showside">
                    <router-link to="/timeline">TimeLine</router-link>
                </li>
                <li class="links" :class="{'active':this.$route.name == 'about' }" @click="showside = !showside">
                    <router-link to="/about">AboutMe</router-link>
                </li>
                <div class="foot">
                    <p>©2018 😝
                        <a href="https://github.com/shadowdreamer">shadowdreamer</a>
                    </p>
                    <p>荣幸的采用
                        <a href="https://cn.vuejs.org/">Vue.js</a>搭建</p>
                    <p>所有组件全部手打的静态博客</p>
                    <p>
                        <a href="http://www.miitbeian.gov.cn/" target="_blank">冀ICP备17023742号</a>
                    </p>
                </div>
            </ul>

            <myMenu :listdata="menu" class="navmenu">
                <img src="../assets/menu.png" alt="菜单" slot="icon">
            </myMenu>
        </div>
    </div>
</template>
<script>
import myMenu from "./Menu";
export default {
    data() {
        return {
            showside: false,
            navfix: false,
            menu: [
                { text: "github", link: "https://github.com/shadowdreamer" },
                {
                    text: "F♂rk it",
                    link: "https://github.com/shadowdreamer/mystart"
                },
                { text: "Sina", link: "https://weibo.com/qq781178419" },
                { text: "Twitter", link: "https://twitter.com/q781178419" },
                {
                    text: "Steam",
                    link: "http://steamcommunity.com/id/shadowdreamer/"
                },
                { text: "Bangumi", link: "https://bgm.tv/user/shadowdreamer" }
            ]
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
        // console.log(this);
    },
    methods: {
        handleScroll() {
            if (window.scrollY > 160) {
                this.navfix = true;
            } else {
                this.navfix = false;
            }
        }
    },
    components: {
        myMenu
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
    z-index: 10;
}
.wrapper {
    height: 300px;
    width: 100%;
    padding-top: 50px;
    background-image: url("http://wx1.sinaimg.cn/large/69924d1bgy1fpjm1etdf7j217r0mvall.jpg");
    background-size: 100%;
    background-position: center;
}

@media (max-width: 768px) {
    /* 小屏幕 */
    .bigtitle {
        top: 40px;
        font-size: 22px;
    }
    .nav {
        margin: 50px auto 20px;
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
        width: 223px;
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
    li.active {
        border-left: 8px palevioletred solid;
        padding-left: 12px;
        background-color: rgb(245, 236, 239);
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
        width: 100px;
        border-radius: 50%;
    }
    .title {
        position: absolute;
        display: inline-block;
        vertical-align: top;
        text-align: center;
        width: 120px;
        margin-left: 25%;
        color: dimgrey;
        font-size: 19px;
        line-height: 40px;
    }
    .foot {
        position: absolute;
        left: 10px;
        bottom: 10px;
        font-size: 12px;
        color: rgb(172, 171, 171);
    }
    .foot p {
        margin-top: 3px;
    }
}

@media (min-width: 768px) {
    .bigtitle {
        top: 100px;
        font-size: 32px;
    }
    .foot {
        display: none;
    }
    .nav {
        margin: 200px auto 20px;
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
    li.active {
        line-height: 37px;
        border-bottom: 5px palevioletred solid;
        background-color: rgb(245, 236, 239);
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
.links a {
    /* 扩大点击区域！！ */
    display: block;
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
p a {
    color: rgb(199, 167, 178);
}
.navmenu {
    display: block;
    float: right;
    margin-top: 7px;
    margin-right: 7px;
}
.navmenu img {
    height: 26px;
}
.bigtitle {
    position: absolute;
    right: calc(7% + 10px);
    color: white;
    font-family: "cmn";
    cursor: url("../assets/sakura.png"), auto;
    user-select: none;
}
.bigtitle p {
    text-shadow: 0px 0px 15px rgb(121, 63, 82);
}
.bigtitle:hover > p::before {
    display: inline-block;
    position: absolute;
    content: "欢迎来到我的丢人博客";
    margin-left: 30px;
    margin-top: 50px;
    padding: 0px 10px;
    height: 30px;
    line-height: 28px;
    font-size: 12px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 8px;
    background-color: rgba(8, 8, 8);
    color: white;
    z-index: 8;
}
</style>

