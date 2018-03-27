<template>
    <div class="content">
        <mySlider :sliderIn='sliders'></mySlider>
    </div>
</template>
<script>
import mySlider from "./Slider.vue";
export default {
    data() {
        return {
            sliders: [] //格式：{img:'../static/1.jpg',url:'#',text:'凑数1号'}，少于4个会补齐至4个
        };
    },
    components: {
        mySlider
    }
};
</script>

<style scoped>
.content {
    background-color: white;
    max-width: 999px;
    height: 1000px;
    box-shadow: 1px 1px 3px gray;
    margin: 0px auto 5px;
    padding-top: 40px;
    overflow: hidden;
}
</style>
