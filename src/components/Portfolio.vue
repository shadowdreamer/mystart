<template>
    <div class="portfolio">

                <div class="wrap">
                    <port-item :list = 'item' v-for="item in test" :key="item.index"  class = "items"  ></port-item>
                </div>
                <button @click="appeal()">test</button>
    </div>
</template>
<script>
import PortItem from './PortItem'
export default {
    data() {
        return {
            test: []
        };
    },
    created(){
        this.$http.get('../static/data/timeline.json').then(res=>{
            this.test = res.data.data
        }).catch(err=>{
            console.log(err)
        })
    },
    methods:{
        appeal(index){
           this.$store.commit('changeAppeal')
        }
    },
    components:{
        PortItem
    }
};
</script>
<style scoped>
.portfolio {
    /* border: 1px red solid; */
    max-width: 1080px;
    margin: 0px auto 5px;
    padding: 40px 10px 0px;
    text-align: center;
}

.wrap {
    max-width: 999px;
    margin: 0px auto 5px;

    /* border: green solid 1px; */
    display: flex;
    /* justify-content:space-around; */
    flex-wrap: wrap;
    align-content: flex-start;
}
.items{

}
</style>
