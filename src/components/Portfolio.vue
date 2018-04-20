<template>
    <div class="portfolio">
        <div class="wrap">
                <div class = "" v-for="item in test" :key="item.index">{{item.title}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            test: []
        };
    },
    created(){
        this.$http.get('../static/data/testdata.json').then(res=>{
            this.test = res.data.timeline
        }).catch(err=>{
            console.log(err)
        })
    },
    methods:{
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
.wrap {
    display: flex;
    flex-direction: column;
}
.wrap div{

}
</style>
