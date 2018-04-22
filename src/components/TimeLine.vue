<template>
    <div class="timeline">
        <div class="wrap" v-for="item in data" :key='item.id' :style="{ 'background-image': 'url(' + item.headpic + ')','background-position': 'center '}">
            <div class="title">{{item.title}}<br/>
                <small>{{item.timestamp | datemodify}}</small>
            </div>
            <div class="cover" @click="getmd(item.timestamp)">
                <p>
                    {{item.des}}
                </p>
            </div>
            <div class="bottom">
                <span v-for="tag in item.tag" :key=tag>{{tag}}</span>
            </div>
        </div>
        <div class="backface" v-show="opened" @click="closemd"></div>
        <div class="article" v-show="opened">

            <div class="headpic" :style="{'background-image': 'url(' + headpic + ')'}">
                <div class="headtitle">
                    <div class="closebtn" @click="closemd"></div>
                    <p>
                        {{headtitle}}
                    </p>

                </div>
            </div>
            <MarkDown :source="markdown_html" class="markdown"></MarkDown>
        </div>

    </div>
</template>
<script>
import MarkDown from "vue-markdown";
export default {
    data() {
        return {
            data: [],
            scrollpst: 0,
            opened: false,
            markdown_html: "",
            headpic: "",
            headtitle: "",
        };
    },
    created() {
        this.$http
            .get("../static/data/timeline.json")
            .then(res => {
                // console.log(res);
                this.data = res.data.data.reverse();
            })
            .catch(err => {
                console.log(err);
            });
        if (this.$route.query.md) {
            this.handle(this.$route.query.md);
        }
    },
    mounted() {
        // var _this = this;
        // window.addEventListener(
        //     "scroll",
        //     function() {
        //         let a = document.documentElement.offsetHeight;
        //         let b = document.documentElement.scrollTop;
        //         _this.scrollpst = (1 - Math.sqrt(b / a)) * 100;
        //     },
        //     false
        // );
    },
    methods: {
        getmd: function(stamp) {
            this.$router.push({ query: { md: stamp } });
            this.handle(stamp);
        },
        handle: function(stamp) {
            this.opened = true;
            var time = new Date(+stamp);
            function getTime() {
                return (
                    time.getFullYear() +
                    "-" +
                    (time.getMonth() + 1) +
                    "-" +
                    time.getDate()
                );
            }
            this.$http
                .get("../static/article/" + getTime() + ".md")
                .then(res => {
                    this.markdown_html = res.data;
                    let obj = this.data.filter(ele => {
                        return ele.timestamp == stamp;
                    })[0];
                    this.headpic = obj.headpic;
                    this.headtitle = obj.title;
                });
        },
        closemd() {
            this.opened = false;
            this.$router.push({ query: {} });
        }
    },
    components: {
        MarkDown
    },
    filters: {
        datemodify(val) {
            var now = new Date();
            var stamp = new Date(val);
            var tmp = now.getTime() - stamp.getTime();
            var time = new Date(tmp);
            if (tmp < 3600000) {
                return "发表于" + time.getUTCMinutes() + "分钟前";
            } else if (tmp < 86400000) {
                return "发表于" + time.getUTCHours() + "小时前";
            } else if (tmp < 864000000) {
                return "发表于" + (time.getUTCDate() - 1) + "天前";
            } else {
                return (
                    "发表于" +
                    val.getFullYear() +
                    "." +
                    (val.getMonth() + 1) +
                    "." +
                    val.getDate()
                );
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
.title small {
    position: relative;
    color: gray;
    top: -15px;
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
    cursor: pointer;
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
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 19;
}
.headpic {
    height: 30%;
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100%;
}
.headtitle {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    overflow: hidden;
}
.headtitle p {
    position: absolute;
    bottom: 30px;
    left: 20px;
    font-size: 3em;
}
.article {
    position: fixed;
    max-width: 999px;
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
    position: fixed;
    right: 0px;
    height: 60px;
    width: 60px;
    cursor: pointer;
    background-color: white;
    border-bottom-left-radius: 60px;
    box-shadow: 3px 2px 20px gray;
    z-index: 99;
}

/* 以下为markdown */
.markdown *{

}
.markdown{
    color: #444;
    font-family: Arial, Helvetica, sans-serif;
    padding: 1em;
    margin: 5px auto;
}

.markdown a {
    color: #0645ad;
    text-decoration: none;
}
.markdown a:visited {
    color: #0b0080;
}
.markdown a:hover {
    color: #06e;
}
.markdown a:active {
    color: #faa700;
}
.markdown a:focus {
    outline: thin dotted;
}
.markdown a:hover,
.markdown a:active {
    outline: 0;
}

.markdown ::-moz-selection {
    background: rgba(255, 255, 0, 0.3);
    color: #000;
}
.markdown ::selection {
    background: rgba(255, 255, 0, 0.3);
    color: #000;
}

.markdown a::-moz-selection {
    background: rgba(255, 255, 0, 0.3);
    color: #0645ad;
}
.markdown a::selection {
    background: rgba(255, 255, 0, 0.3);
    color: #0645ad;
}

.markdown p {
    margin: 1em 0;
}

.markdown img {
    max-width: 100%;
}

.markdown h1,
.markdown h2,
.markdown h3,
.markdown h4,
.markdown h5,
.markdown h6 {
    font-weight: normal;
    color: #111;
    line-height: 1em;
}
.markdown h4,
.markdown h5,
.markdown h6 {
    font-weight: bold;
}
.markdown h1 {
    font-size: 2.5em;
}
.markdown h2 {
    font-size: 2em;
}
.markdown h3 {
    font-size: 1.5em;
}
.markdown h4 {
    font-size: 1.2em;
}
.markdown h5 {
    font-size: 1em;
}
.markdown h6 {
    font-size: 0.9em;
}

.markdown blockquote {
    color: #666666;
    margin: 0;
    padding-left: 3em;
    border-left: 0.5em #eee solid;
}
.markdown hr {
    display: block;
    height: 2px;
    border: 0;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #eee;
    margin: 1em 0;
    padding: 0;
}
.markdown pre,
.markdown code,
.markdown kbd,
.markdown samp {
    color: #000;
    font-family: monospace, monospace;
    _font-family: "courier new", monospace;
    font-size: 0.98em;
}
.markdown pre {
    white-space: pre;
    white-space: pre-wrap;
    word-wrap: break-word;
}

.markdown b,
.markdown strong {
    font-weight: bold;
}

.markdown dfn {
    font-style: italic;
}

.markdown ins {
    background: #ff9;
    color: #000;
    text-decoration: none;
}

.markdown mark {
    background: #ff0;
    color: #000;
    font-style: italic;
    font-weight: bold;
}

.markdown sub,
.markdown sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}
.markdown sup {
    top: -0.5em;
}
.markdown sub {
    bottom: -0.25em;
}

.markdown ul,
.markdown ol {
    margin: 1em 0;
    padding: 0 0 0 2em;
}
.markdown li p:last-child {
    margin: 0;
}
.markdown dd {
    margin: 0 0 0 2em;
}

.markdown img {
    border: 0;
    -ms-interpolation-mode: bicubic;
    vertical-align: middle;
}

.markdown table {
    border-collapse: collapse;
    border-spacing: 0;
}
.markdown td {
    vertical-align: top;
}

@media only screen and (min-width: 480px) {
    .markdown {
        font-size: 14px;
    }
}

@media only screen and (min-width: 768px) {
    .markdown {
        font-size: 16px;
    }
}
</style>

