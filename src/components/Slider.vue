<template>
    <div class="slider">
        <div class="wrap" @mousemove="stop" @mouseout="rollit">
            <ul class='box list'  :class="[pst,anime?'boxanime':'']">
                <li v-for="item in sliderItems" :key='item.index'>
                    <div class="item" :style="{ 'background-image': 'url(' + item.img + ')'}">
                        <a :href="item.url"></a>
                        <p>{{item.text}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            sliderItems: [],

            anime:true,
            n:0,
            pst:'pst',
        };
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
        }else{
            x = this.sliderIn
        }
        this.sliderItems = x.slice(-2).concat( x.concat( x.slice(0,2) ) )
      },
      mounted(){
          this.rollit();
      },
    methods: {
        rollit(){
            var _this=this
            this.rolling = setInterval(function(){
                if(_this.n>=4){
                    _this.anime = false;
                    _this.n = 0
                }else{
                    _this.anime = true;
                    _this.n+=1;
                }


                _this.pst = 'pst'+_this.n
            },1500)
        },
        stop(){
            clearInterval(this.rolling)
        }
    }
};
</script>

<style scoped>
.slider {
    height: 300px;
    width: calc(100% - 50px);
    margin-left: 25px;
    overflow: hidden;
    border: 2px grey solid;
}
.box {
    width: 6000000px;
    height: 300px;
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
.wrap{
    margin-left: 400px;
}
.boxanime{
    transition: all 0.3s ease-in-out;
}
.pst0{
    margin-left: -400px;
}
.pst1{
    margin-left: -800px;
}
.pst2{
    margin-left: -1200px;
}
.pst3{
    margin-left: -1600px;
}
.pst4{
    margin-left: -2000px;
}
.pst5{
    margin-left: -2400px;
}
</style>
