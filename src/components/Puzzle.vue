<template>
  <div id="puzzle">
      <div v-if='blockit' class="block"></div>
        <div class="timer">
            <span>计时：{{time.min}}:{{time.ss | toDoubleNum}}:{{time.ms | toDoubleNum}} </span>
            <span>最短时间：{{highscore.min + ':' + highscore.ss + ':' + highscore.ms}}</span>
        </div>
        <div class="box">

            <div v-for='(pic,index) in pics' :key='index' 
              @click='(pic.alive && !pic.select) && doit(pic)' class='cover' :class='{rollback: pic.select}'>
                <div class='back'></div>
                <div class='front'>
                    <img :src="pic.p" :alt="index">
                </div>
                <div v-if='pic.done' class="bingo"></div>
            </div>
        </div>
        <div class="congrat" v-if='judge.n === 6'>Congratulations!!</div>
        <button @click='ableStart && start()'>{{judge.n > 0?'Restart':'Start'}}</button>
  </div>
</template>

<script>
export default {
  
    name: 'puzzle',
    data(){
      return {
        pics: [
            { k: 1, p: 'https://wx3.sinaimg.cn/mw690/69924d1bgy1fpdtejy26ij206o08bwhb.jpg',select: false, alive: false, done: false },
            { k: 1, p: 'https://wx3.sinaimg.cn/mw690/69924d1bgy1fpdtejy26ij206o08bwhb.jpg',select: false, alive: false, done: false },
            { k: 2, p: 'https://wx1.sinaimg.cn/mw690/69924d1bgy1fpdteje2hvj206i08376c.jpg',select: false, alive: false, done: false },
            { k: 2, p: 'https://wx1.sinaimg.cn/mw690/69924d1bgy1fpdteje2hvj206i08376c.jpg',select: false, alive: false, done: false },
            { k: 3, p: 'https://wx4.sinaimg.cn/mw690/69924d1bgy1fpdteiqsl1j206y08q0w2.jpg',select: false, alive: false, done: false },
            { k: 3, p: 'https://wx4.sinaimg.cn/mw690/69924d1bgy1fpdteiqsl1j206y08q0w2.jpg',select: false, alive: false, done: false },
            { k: 4, p: 'https://wx4.sinaimg.cn/mw690/69924d1bgy1fpdtei0f48j206y08nq4t.jpg',select: false, alive: false, done: false },
            { k: 4, p: 'https://wx4.sinaimg.cn/mw690/69924d1bgy1fpdtei0f48j206y08nq4t.jpg',select: false, alive: false, done: false },
            { k: 5, p: 'https://wx2.sinaimg.cn/mw690/69924d1bgy1fpdtehg5ynj206o08cta3.jpg',select: false, alive: false, done: false },
            { k: 5, p: 'https://wx2.sinaimg.cn/mw690/69924d1bgy1fpdtehg5ynj206o08cta3.jpg', select: false, alive: false, done: false },
            { k: 6, p: 'https://wx4.sinaimg.cn/mw690/69924d1bgy1fpdtegwcrvj206j086aal.jpg', select: false, alive: false, done: false },
            { k: 6, p: 'https://wx4.sinaimg.cn/mw690/69924d1bgy1fpdtegwcrvj206j086aal.jpg', select: false, alive: false, done: false },
            ],
        ableStart:true,
        judge: {
            a: '',       //记录活跃中被选中卡牌的k值
            b1: '',     //指向第一个被翻开的元素
            b2: '',    //指向第二个被翻开的元素
            n: 0      //翻开卡牌计数
        },
        time: {
            min: 0,
            ss: 0,
            ms: 0
        },

        blockit: false, //控制遮住页面的透明div是否显示，防止手速过快
        highscore: {
            min: '00',
            ss: '00',
            ms: '00'
        },
    };
    },
    filters: {
        toDoubleNum: function (num) {
            if (num < 10) {
                return '0' + num;
            } else {
                return num;
            }
        }
    },
    methods: {
        start: function () {
            let _this = this;
            // console.log(this);                
            this.pics.sort(function () { return Math.random() > 0.5 ? 1 : -1; }).
                sort(function () { return Math.random() > 0.5 ? 1 : -1; }).
                sort(function () { return Math.random() > 0.5 ? 1 : -1; });            
            clearInterval(_this.count);
            for (let i in this.pics) {
                this.pics[i].done = false;
                this.pics[i].select = true;
                this.judge.n = 0;
                this.judge.a = '';
                this.judge.b1 = '';
                this.judge.b2 = '';
            }
            _this.ableStart = false;
            setTimeout(function () {
              
                for (let i in _this.pics) {
                    _this.pics[i].select = false;
                    _this.pics[i].alive = true;
                }
                _this.timer(true);
                _this.ableStart = true;
            }, 1000);
        },
        doit: function (n) {
            // console.log(n.k,n.select);
            let _this = this;
            if (this.judge.a) {
                this.judge.b2 = n;
                n.select = true;
                if (this.judge.a === n.k) {
                  this.judge.n += 1;
                  if (this.judge.n === 6) {
                      this.timer(false);
                      this.refresh();
                  }

                  this.judge.b1.alive = false;
                  this.judge.b2.alive = false;
                  this.blockit = true;
                  setTimeout(function () {
                      _this.judge.b1.done = true;
                      _this.judge.b2.done = true;
                      _this.blockit = false;
                  }, 300);


                  this.judge.a = '';



                } else {
                    console.log(false);
                    
                    this.blockit = true;
                    setTimeout(function () {

                        _this.judge.b1.select = false;
                        _this.judge.b2.select = false;   //初始化判断与class状态
                        _this.judge.a = '';
                        _this.blockit = false;
                    }, 500);

                }
            } else {

                this.judge.a = n.k;
                this.judge.b1 = n;
                n.select = true;

            }
        },

        timer: function (flag) {
          let _this = this;
            if (flag) {
                _this.time = {
                    min: 0,
                    ss: 0,
                    ms: 0
                };
                _this.count = setInterval(function () {
                    _this.time.ms += 1;
                    if (_this.time.ms >= 100) {
                        _this.time.ms = 0;
                        _this.time.ss += 1;
                        if (_this.time.ss >= 60) {
                            _this.time.ss = 0;
                            _this.time.min += 1;
                        }
                    }
                }, 10);

            } else {
                clearInterval(_this.count);
            }
        },
        refresh: function () {
            let x = this.time.min * 60000 + this.time.ss * 100 + this.time.ms;
            let y = this.highscore.min * 60000 + this.highscore.ss * 100 + this.highscore.ms;
            if (x < y || y == 0) {
                for (let i in this.highscore) {
                    this.highscore[i] = this.time[i];
                }
            }

        }
    }
};
</script>

<style scoped>
 * {
        margin: 0px;
        padding: 0px;
    }

    @media screen and (min-width: 500px) {
        #puzzle {
            max-width: 600px;
            margin: 10px;
        }
        .box {
            width: 600px;
            background: radial-gradient(ellipse at top, #b4bac2, transparent),
            radial-gradient(ellipse at bottom, #6fa7db, transparent);
            display: flex;
            flex-wrap: wrap;

        }
    }

    @media screen and (min-width: 200px) {

        .box {
            
            min-width: 300px;
            background: radial-gradient(ellipse at top, #b4bac2, transparent),
            radial-gradient(ellipse at bottom, #6fa7db, transparent);
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
    }



    .cover {
        margin: 8px;

        height: 100px;
        width: 80px;
        /* box-sizing: border-box; */
        /* background-color: purple; */
        border-radius: 3px;
        font-size: 120px;
        color: pink;
        line-height: 120px;
        text-align: center;
        cursor: pointer;
        transition: all 300ms ease-in-out;
        transform-style: preserve-3d;
        perspective: 1000px;
    }

    .cover:hover {
        -moz-box-shadow: 1px 1px 10px #FF4ADB, -4px 3px 9px #F0FF69, 5px 1px 8px #85FFFF;
        -webkit-box-shadow: 1px 1px 10px #FF4ADB, -4px 3px 9px #F0FF69, 5px 1px 8px #85FFFF;
        box-shadow: 1px 1px 10px #FF4ADB, -4px 3px 9px #F0FF69, 5px 1px 8px #85FFFF;
    }




    .rollback {
        transform: rotate3d(0, 1, 0, 180deg);

    }

    di_this.rollback:hover {
        box-shadow: none;
    }



    .front {
        position: absolute;
        height: 100px;
        width: 80px;
        overflow: hidden;
        border-radius: 3px;
        backface-visibility: hidden;
        background-color: powderblue;
        transform: translateZ(-2px) rotate3d(0, 1, 0, 180deg)
    }

    .front img {
        display: block;
        width: 80px;
        /* height: 100px; */
    }

    .back {
        position: absolute;
        min-height: 100px;
        min-width: 80px;
        border-radius: 3px;

        background-image: url(https://wx2.sinaimg.cn/mw690/69924d1bgy1fpdteklyuxj206o08cq4l.jpg);
        background-repeat: no-repeat;
        background-size: 80px 100px;
        backface-visibility: hidden;
        transform: translateZ(2px)
    }

    .bingo {
        position: absolute;
        min-height: 100px;
        min-width: 80px;
        z-index: 2;
        background-color: black;
        transform: translateZ(-3px);
        opacity: 0.4;
    }

    button {
        margin: 20px calc(50% - 120px);
        background: linear-gradient(to left, rgb(122, 165, 206) 15%, #eee 70%);
        border-radius: 20px;
        border: 2px black solid;
        height: 40px;
        width: 220px;
        font-size: 28px;
        line-height: 30px;
        color: black;
        cursor: pointer;
    }

    .congrat {
        background-color: #f3d7b5;
        height: 50px;
        width: 100%;
        font-size: 30px;
        line-height: 40px;
        color: white;
        text-align: center;
    }

    .timer {
        background-color: rgb(122, 165, 206);
        height: 40px;
        max-width: 600px;
        font-size: 20px;
        line-height: 30px;
        color: #f3d7b5;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

    }


    .block {
        position: absolute;
        height: 90%;
        width: 90%;
        z-index: 20;
    }
</style>
