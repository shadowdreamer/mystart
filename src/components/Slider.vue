<template>
    <div class="slider">
        <div class="wrap"  @mousemove="stop" @mouseout="rollit">
            <ul class='box list' :class="[pst,boxanime?'boxanime':'']">
                <li v-for="(item,index) in sliderItems" :key='item.id'>
                    <div class="item"
                    :style="{ 'background-image': 'url(' + item.img + ')'}"
                    :class="[((n+1) === index)?'large':'',itemanime?'itemanime':'']">
                        <a :href="item.url"></a>
                        <p>{{item.text}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <ul class="btns">
            <li class="btn" v-for="(item,index) in btns" :key="index" :class="{active:item}"></li>
        </ul>
        <div class="leftbtn sidebtn" @click="slide(0)"></div>
        <div class="rightbtn sidebtn" @click="slide(1)"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            sliderItems: [],
            boxanime: true,
            itemanime: true,
            btns: [0],
            dir: 0,
            n: 0,
        };
    },
    computed:{
        pst(){
            return 'pst'+this.n
        }
    },
    props: ["sliderIn"],
    beforeMount() {
        let x = [
                { img: "../static/1.jpg", url: "#", text: "凑数1号" },
                { img: "../static/2.jpg", url: "#", text: "凑数2号" },
                { img: "../static/3.jpg", url: "#", text: "凑数3号" },
                { img: "../static/4.jpg", url: "#", text: "凑数4号" }
            ],
            len = this.sliderIn.length;
        if (len < 4) {
            x = this.sliderIn.concat(x.slice(0, 4 - len));
        } else {
            x = this.sliderIn;
        }
        this.sliderItems = x.slice(-1).concat(x.concat(x.slice(0, 2)));
    },
    mounted() {
        this.rollit();
        this.btns = Array(this.sliderItems.length - 3).map(x => (x = 0));
        this.btns[0] = 1;
    },
    methods: {
        rollit() {
            var _this = this;
            this.rolling = setInterval(function() {
                if (_this.n >= 4) {
                    _this.boxanime = false;
                    _this.itemanime = false;
                    _this.n = 0;
                } else {
                    _this.boxanime = true;
                    _this.itemanime = true;
                    _this.n += 1;
                }

                // _this.pst = "pst" + _this.n;
                _this.changebtn();
            }, 3000);
        },
        stop() {
            clearInterval(this.rolling);
        },
        changebtn() {
            this.btns = this.btns.map(x => (x = 0));
            if (this.n === this.sliderItems.length - 3) {
                this.dir = 0;
            } else {
                this.dir = this.n;
            }
            this.btns[this.dir] = 1;
        },
        slide(n){
            if(n){
                if(this.n>=4){
                    this.boxanime = false;
                    this.itemanime = false;
                    this.n =0
                }else{
                    this.boxanime = true;
                    this.itemanime = true;
                    this.n++
                }
            }else{
                if(this.n<=0){
                    this.boxanime = false;
                    this.itemanime = false;
                    this.n =4
                }else{
                    this.boxanime = true;
                    this.itemanime = true;
                    this.n--
                }
            }
        }
    }
};
</script>

<style scoped>
.slider {
    position: relative;
    width: 800px;
    margin: 0 auto;
    height: 230px;
    overflow: hidden;
    z-index: inherit;
}
.box {
    width: 6000px;
}
.list {
}
.list li {
    float: left;
}
.list div {
    display: inline-block;
    width: 400px;
    height: 200px;
    background-size: 400px;
    background-position: center;
}
.wrap {
    margin-top: 30px;
    margin-left: -200px;
}
.boxanime,
.itemanime {
    transition: all 0.3s ease-in;
}
.item a {
    display: block;
    height: 100%;
    width: 100%;
}
.item a:hover {
    background: rgba(255, 255, 255, 0.39);
}
.item p {
    display: block;
    position: relative;
    top: -30px;
    left: 300px;
    height: 30px;
    width: 100px;
    font-size: 16px;
    line-height: 30px;
    background-color: black;
    border-top-left-radius: 10px;
    opacity: 0.5;
    color: white;
    text-align: center;
}
.large {
    transform-origin: 50% 100%;
    transform: scale(1.2, 1.2);
}
.pst0 {
    margin-left: 00px;
}
.pst1 {
    margin-left: -400px;
}
.pst2 {
    margin-left: -800px;
}
.pst3 {
    margin-left: -1200px;
}
.pst4 {
    margin-left: -1600px;
}
.pst5 {
    margin-left: -2000px;
}
.btns{
    position: absolute;
    left: 120px;
    margin: 190px;

}
.btn {
    float: left;
    height: 10px;
    width: 60px;
    margin-left: 10px;
    background-color: white;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
}
.active {
    background-color: rgb(172, 57, 95);
}
.sidebtn{
    position: absolute;
    background: black;
    height: 80px;
    width: 30px;
    top:90px;
    opacity: 0.2;
}
.sidebtn:hover{
    opacity: 0.7;
}
.leftbtn{
    left: 0px
}
.rightbtn{
    right: 0px
}
</style>
