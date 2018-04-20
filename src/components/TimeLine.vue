<template>
    <div class="timeline">
        <div class="wrap" v-for="item in testdata" :key='item.id' @click="opened = !opened" :style="{ 'background-image': 'url(' + item.img + ')','background-position': 'center '+ scrollpst +'%'}">
            <div class="title">{{item.title}}</div>
            <div class="cover">
                <p>
                    {{item.abstract}}
                </p>
            </div>
            <div class="bottom">
                <span v-for="tag in item.tag" :key=tag>{{tag}}</span>
            </div>
        </div>
        <div class="backface" v-show="opened" @click="opened = false"></div>
            <div class="article" v-show="opened" >
                <div class="closebtn" @click="opened = false">X</div>
                <div class="main" v-html="markdown_html"></div>
            </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            testdata: [],
            scrollpst: 0,
            opened: false,
            markdown_text:'',
            markdown_html:'',
        };
    },
    created() {
        this.$http
            .get("../static/data/testdata.json")
            .then(res => {
                this.testdata = res.data.timeline;
            })
            .catch(err => {
                console.log(err);
            });
        this.$http
            .get("../static/data/README.md")
            .then(res => {
                this.markdown_text = res.data;
                this.markdown_html = this.parser.makeHtml(this.markdown_text);

            })
            .catch(err => {
                console.log(err);
            });

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
    color: gray;
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
    overflow: scroll;
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

