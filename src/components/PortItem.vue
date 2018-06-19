<template>
    <div :style="{'background-image': 'url(' + list.headpic + ')'}" class = "box">
        <p class="cover">{{list.title}}</p>
        <div class = "cutin">
            <p>{{list.des}}</p>
            <span v-for="(tag, index) in list.tag" :key="index">{{tag}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:['list'],
    methods:{

    },
}
</script>

<style scoped>
    .box{
        background-size: cover;
        background-position: center;
        margin: 0px 10px 20px;
    }
    @media (max-width: 765px){
        .box{
            height: 35vw;
            width: 35vw;
        }
    }
    @media (min-width: 765px){
        .box{
            height: 220px;
            width: 220px;
        }
    }
    .cover{
        position: relative;
        height: 100%;
        width: 100%;
        background-color: red;
        opacity: 0.5;
    }


    .cutin{
        position: relative;
        height: 100%;
        width: 100%;
        background-color: greenyellow;
        opacity: 0.5;
    }
</style>
