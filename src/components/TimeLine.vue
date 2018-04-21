<template>
    <div class="timeline">
        <div class="wrap" v-for="item in data" :key='item.id' @click="handle(item)"
        :style="{ 'background-image': 'url(' + item.headpic + ')','background-position': 'center '+ scrollpst +'%'}">
            <div class="title">{{item.title}}<br/><small>{{item.timestamp | datemodify}}</small></div>
            <div class="cover">
                <p>
                    {{item.des}}
                </p>
            </div>
            <div class="bottom">
                <span v-for="tag in item.tag" :key=tag>{{tag}}</span>
            </div>
        </div>
        <div class="backface" v-show="opened" @click="opened = false"></div>
        <div class="article" v-show="opened">
            <div class="closebtn" @click="opened = false">X</div>
            <MarkDown :source="markdown_html"></MarkDown>
        </div>

    </div>
</template>
<script>
import MarkDown from 'vue-markdown'
export default {
    data() {
        return {
            data: [],
            scrollpst: 0,
            opened: false,
            markdown_html: ""
        };
    },
    created() {
        this.$http
            .get("../static/data/timeline.json")
            .then(res => {
                // console.log(res);
                this.data = res.data.data;
            })
            .catch(err => {
                console.log(err);
            })
    },
    mounted() {
        var _this = this;
        window.addEventListener(
            "scroll",
            function() {
                let a = document.documentElement.offsetHeight;
                let b = document.documentElement.scrollTop;
                _this.scrollpst = (1 - Math.sqrt(b / a)) * 100;
            },
            false
        );
    },
    methods:{
        handle:function(obj){
            this.opened = true;
            var time = new Date(obj.timestamp);
            var getTime = function(){
                return time.getFullYear() + '-' + (time.getMonth()+1) + '-' + time.getDate();
            }
            this.$http.get("../static/article/"+ getTime() + ".md")
                .then(res=>{
                    this.markdown_html = res.data
                })
        }
    },
    components:{
        MarkDown
    },
    filters:{
        datemodify(val){
            var now = new Date();
            var stamp = new Date(val);
            var tmp = now.getTime() - stamp.getTime();
            var time = new Date(tmp)
            if(tmp < 3600000){
                return '发表于' + time.getUTCMinutes() +'分钟前'
            }else if(tmp < 86400000){
                return '发表于' + time.getUTCHours() +'小时前'
            }else if(tmp < 864000000){
                return '发表于' + (time.getUTCDate() - 1) + '天前'
            }else{
                return '发表于'+ val.getFullYear() + '.' + (val.getMonth()+1) + '.' + val.getDate()
            }

        }
    }
};
</script>
<style scoped>
.timeline {
    max-width: 999px;
    margin: 10px auto;
}
.wrap {
    margin: 0px auto 10px;
    max-width: 600px;
    width: 90%;
    position: relative;
    background-repeat: no-repeat;
}
@media (max-width: 768px) {
    .wrap {
        padding-bottom: 75%;
        background-size: 180%;
    }
}
@media (min-width: 768px) {
    .wrap {
        padding-bottom: 35%;
        background-size: 100%;
    }
}
.title {
    position: absolute;
    height: 60px;
    width: 100%;
    background-color: rgb(245, 236, 239);
    box-sizing: border-box;
    padding-left: 10px;
    font-size: 20px;
    line-height: 40px;
    color: rgb(56, 56, 56);
}
.title small{
    position: relative;
    color: gray;
    top:-15px;
}
.cover {
    position: absolute;
    width: 100%;
    top: 60px;
    height: calc(100% - 100px);
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(184, 72, 109, 0.541)
    );
    color: white;
    font-size: 16px;
    box-sizing: border-box;
    padding: 10px;
}
.cover p {
    position: absolute;
    bottom: 10px;
}
.bottom {
    position: absolute;
    bottom: 0px;
    height: 40px;
    width: 100%;
    background-color: rgb(245, 236, 239);
    box-sizing: border-box;
    padding-top: 10px;
}
.bottom span {
    display: inline-block;
    background-color: palevioletred;
    color: white;
    margin-left: 10px;
    padding: 0px 5px;
    border-radius: 5px;
}
.backface {
    position: fixed;
    top: 0px;
    right: 0px;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.596);
    z-index: 19;
}
.article {
    position: fixed;
    max-width: 999px;
    width: 100%;
    height: 100%;
    top: 0px;
    margin: 0px auto;
    border: 1px #999 solid;
    background: white;
    z-index: 20;
    overflow: auto;
    overflow-x: hidden;
}
.closebtn {
    float: right;
    top: 10px;
    right: 10px;
    height: 20px;
    width: 20px;
    cursor: pointer;
}
</style>

