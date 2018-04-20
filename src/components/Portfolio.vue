<template>
    <div class="portfolio">
        <div class="wrap">
            <button @click="te">666</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            test: [
                {
                    title: "标题1",
                    img: "../static/timeline/1.jpg",
                    abstract: "截图截图截图",
                    tag: ["sreenshoot", "game"]
                },
            ]
        };
    },
    methods:{
        te:function(){
            console.log(this)
        }
    }
};
</script>
<style scoped>
.portfolio {
    background-color: white;
    max-width: 999px;
    height: 1000px;
    box-shadow: 1px 1px 3px gray;
    margin: 0px auto 5px;
    padding-top: 40px;
    overflow: hidden;
}
.li {
}
</style>
