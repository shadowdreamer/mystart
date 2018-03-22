<template>
  <div class="slider">
      <div class="lists">
          <ul>
              <li v-for="item in sliderItems" :key='item.index'>
                  <img :src="item.img">

                  <a :href="item.url">{{item.text}}</a>
                  <p>{{item.text}}</p>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sliderItems: []
    };
  },
  props: ["sliderIn"],
  beforeMount() {
    let x = [
        { img: "../static/1.jpg", url: "#", text: "凑数1号" },
        { img: "../static/2.jpg", url: "#/timeline", text: "凑数2号" },
        { img: "../static/3.jpg", url: "#", text: "凑数3号" },
        { img: "../static/4.jpg", url: "#", text: "凑数4号" }
      ],
      len = this.sliderIn.length;
    if (len < 4) {
      this.sliderItems = this.sliderIn.concat(x.slice(0, 4 - len));
    } else {
      this.sliderItems = this.sliderIn;
    }
  },
  methods: {}
};
</script>

<style scoped>
.slider {
  height: 300px;
  width: calc(100% - 50px);
  margin-left: 25px;
  box-sizing: content-box;
  overflow: hidden;
  border: 2px grey solid;
}
img {
  height: 280px;
}
img:hover {
}
</style>
