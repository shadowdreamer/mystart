<template>
    <div class="timeline">
        <div class="wrap" v-for="item in testdata" :key='item.id' :style="{ 'background-image': 'url(' + item.img + ')','background-position': 'center '+ scrollpst +'%'}">
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
    </div>
</template>
<script>
export default {
    data() {
        return {
            testdata: [
                {
                    title: "标题1",
                    img: "../static/timeline/1.jpg",
                    abstract: "截图截图截图",
                    tag: ["sreenshoot", "game"]
                },
                {
                    title: "标题2",
                    img: "../static/timeline/2.jpg",
                    abstract: "截图截图截图",
                    tag: ["sreenshoot", "idol"]
                },
                {
                    title: "标题3",
                    img: "../static/timeline/3.jpg",
                    abstract: "截图截图截图",
                    tag: ["sreenshoot", "idol"]
                },
                {
                    title: "标题4",
                    img: "../static/timeline/4.jpg",
                    abstract: "截图截图截图",
                    tag: ["sreenshoot", "game"]
                },
                {
                    title: "标题1",
                    img: "../static/timeline/1.jpg",
                    abstract: "截图截图截图",
                    tag: ["sreenshoot", "idol"]
                },
                {
                    title: "标题2",
                    img: "../static/timeline/2.jpg",
                    abstract: "截图截图截图",
                    tag: ["sreenshoot", "idol"]
                },
                {
                    title: "标题3",
                    img: "../static/timeline/3.jpg",
                    abstract: "截图截图截图",
                    tag: ["sreenshoot", "game"]
                },
                {
                    title: "标题4",
                    img: "../static/timeline/4.jpg",
                    abstract: "截图截图截图",
                    tag: ["sreenshoot", "game"]
                }
            ],
            scrollpst: 0
        };
    },
    mounted() {
        var _this = this;
        window.addEventListener(
            "scroll",
            function() {
                let a = document.documentElement.offsetHeight;
                let b = document.documentElement.scrollTop;
                _this.scrollpst = Math.sqrt(b / a) * 150;
            },
            false
        );
    },

    components: {}
};
</script>
<style scoped>
.timeline {
    max-width: 999px;
    margin: 10px auto;
}
.wrap {
    margin: 0px 0px 10px;
    max-width: 600px;
    width: 100%;
    position: relative;
    background-repeat: no-repeat;
}
@media (max-width: 768px) {
    .wrap {
        padding-bottom: 90%;
        background-size: 180%;
    }
}
@media (min-width: 768px) {
    .wrap {
        padding-bottom: 35%;
        background-size: 150%;
    }
}
.title {
    position: absolute;
    height: 60px;
    width: 100%;
    background-color: rgb(228, 228, 228);
    box-sizing: border-box;
    padding-left: 10px;
    font-size: 20px;
    line-height: 40px;
}
.cover {
    position: absolute;
    width: 100%;
    top: 60px;
    height: calc(100% - 100px);
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(0, 0, 0, 0.555)
    );
    color: white;
    font-size: 16px;
    box-sizing: border-box;
    padding: 10px;
}
.cover p{
    position: absolute;
    bottom: 10px;
}
.bottom {
    position: absolute;
    bottom: 0px;
    height: 40px;
    width: 100%;
    background-color: rgb(228, 228, 228);
    box-sizing: border-box;
    padding-top: 10px;
}
.bottom span{
    display: inline-block;
    background-color: rgb(117, 116, 116);
    color: white;
    margin-left: 10px;
    padding:0px 5px;
    border-radius: 5px;
}
</style>

