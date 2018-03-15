const v = new 　Vue({
    el: '#warp',
    data: {
        pics: [
            { k: 1, p: 'img/a1.jpeg', id: 1, select: false, alive: false, done: false },
            { k: 1, p: 'img/a1.jpeg', id: 2, select: false, alive: false, done: false },
            { k: 2, p: 'img/a2.jpeg', id: 3, select: false, alive: false, done: false },
            { k: 2, p: 'img/a2.jpeg', id: 4, select: false, alive: false, done: false },
            { k: 3, p: 'img/a3.jpeg', id: 5, select: false, alive: false, done: false },
            { k: 3, p: 'img/a3.jpeg', id: 6, select: false, alive: false, done: false },
            { k: 4, p: 'img/a4.jpeg', id: 7, select: false, alive: false, done: false },
            { k: 4, p: 'img/a4.jpeg', id: 8, select: false, alive: false, done: false },
            { k: 5, p: 'img/a5.jpeg', id: 9, select: false, alive: false, done: false },
            { k: 5, p: 'img/a5.jpeg', id: 10, select: false, alive: false, done: false },
            { k: 6, p: 'img/a6.jpeg', id: 11, select: false, alive: false, done: false },
            { k: 6, p: 'img/a6.jpeg', id: 12, select: false, alive: false, done: false },
        ],
        active: function () {


        },

        judge: {
            a: '',
            b1: '',
            b2: '',
            n: 0
        },
        time: {
            min: 0,
            ss: 0,
            ms: 0
        },

        blockit:false,
        highscore:{
            min: '00',
            ss: '00',
            ms: '00'
        }

    },
    computed:{
            ss:function(){
                if(this.time.ss < 10){
                    return '0'+this.time.ss;
                }else{
                    return this.time.ss;
                }                
            },
            ms:function(){
                if(this.time.ms < 10){
                    return '0'+this.time.ms;
                }else{
                    return this.time.ms;
                } 

            }
      

    },
    methods: {
        start: function () {

            // console.log(1);                
            this.pics.sort(function () { return Math.random() > 0.5 ? 1 : -1; }).
                sort(function () { return Math.random() > 0.5 ? 1 : -1; }).
                sort(function () { return Math.random() > 0.5 ? 1 : -1; });

            clearInterval(v.count);
            for (let i in this.pics) {
                this.pics[i].select = true;
                this.pics[i].done = false;
                this.judge.n = 0;

            }

            setTimeout(function () {

                for (let i in v.pics) {
                    v.pics[i].select = false;
                    v.pics[i].alive = true;
                }
                v.timer(true);
            }, 1000);



        },
        doit: function (n) {
            // console.log(n.k,n.select);
            if (this.judge.a) {
                this.judge.b2 = n;
                n.select = true;
                if (this.judge.a === n.k) {

                    console.log(v.judge.n += 1);

                    if (v.judge.n === 6) {
                        this.timer(false);
                        this.refresh();
                    }

                    v.judge.b1.alive = false;
                    v.judge.b2.alive = false;
                    v.judge.b1.done = true;
                    v.judge.b2.done = true;

                    v.judge.a = '';



                } else {
                    console.log(false);
                    v.blockit = true;
                    setTimeout(function () {

                        v.judge.b1.select = false;
                        v.judge.b2.select = false;   //初始化判断与class状态
                        v.judge.a = '';
                        v.blockit = false;
                    }, 500);

                }
            } else {

                this.judge.a = n.k;
                this.judge.b1 = n;
                n.select = true;

            }
        },

        timer: function (flag) {
            if (flag) {
                v.time = {
                    min: 0,
                    ss: 0,
                    ms: 0
                };
                v.count = setInterval(function () {
                    v.time.ms += 1;
                    if (v.time.ms >= 100) {
                        v.time.ms = 0;
                        v.time.ss += 1;
                        if (v.time.ss >= 60) {
                            v.time.ss = 0;
                            v.time.min += 1;
                        }
                    }
                }, 10);

            } else {
                clearInterval(v.count);
            }
        },
        refresh:function(){
            let x = this.time.min*60000 + this.time.ss*100 + this.time.ms;
            let y = this.highscore.min*60000 + this.highscore.ss*100 + this.highscore.ms;
            if(x > y){
               for(let i in this.highscore){
                    this.highscore[i] = this.time[i];
               }
            }

        }
    }
});