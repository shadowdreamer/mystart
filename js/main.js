

function changeFace(){
    var element=document.getElementById("face")
    if (element.src.match("face2")){
        element.src="img/face1.gif";}
        else{
        element.src="img/face2.jpg";
    }
  }
function multi(N1,N2){
    var result= N1 * N2;
        return result;
    }
function multi1(){
    var x=document.getElementById("s1")
    var N1=document.getElementById("N1").value;
    var N2=document.getElementById("N2").value;
    x.innerHTML= multi(N1,N2);
}  

/*Js获取当前日期时间及其它操作
var myDate = new Date();
myDate.getYear();        //获取当前年份(2位)
myDate.getFullYear();    //获取完整的年份(4位,1970-????)
myDate.getMonth();       //获取当前月份(0-11,0代表1月)
myDate.getDate();        //获取当前日(1-31)
myDate.getDay();         //获取当前星期X(0-6,0代表星期天)
myDate.getTime();        //获取当前时间(从1970.1.1开始的毫秒数)
myDate.getHours();       //获取当前小时数(0-23)
myDate.getMinutes();     //获取当前分钟数(0-59)
myDate.getSeconds();     //获取当前秒数(0-59)
myDate.getMilliseconds();    //获取当前毫秒数(0-999)
myDate.toLocaleDateString();     //获取当前日期
var mytime=myDate.toLocaleTimeString();     //获取当前时间
myDate.toLocaleString( );        //获取日期与时间*/
var currentDate = {
    date : new Date(),
    year : function(){return this.date.getFullYear()},
    day  : function(){
            var tmp=this.date.getDate();
            return tmp>=1&&tmp<=9?"0"+tmp:tmp;},
    mont : function(){
            var tmp = this.date.getMonth() + 1
            return tmp>=1&&tmp<=9?"0"+tmp:tmp;},  
    show : function() { 
            return this.year() + "." + this.mont() + "." + this.day();},
    luck : function() {return this.date.getMilliseconds()}
}
var a=new Array(0,0);  
function showDate(){
    var x=document.getElementById("dateB");
    var b=currentDate.show();
    if (a[0]==0||a[0]==3){
        x.innerHTML="今天是" + b;
        a[0]=1;         
    }else{
        if(a[0] == 1){            
            x.innerHTML="别点了，今天是" + b;
            a=[2,++a[1]];                   
        }else{
            if(a[0]==2 && a[1]<3){
            x.innerHTML="别点了，再点不告诉你了";
            a[0]=3;
            }else{
                x.innerHTML="CNM不告诉你了";
            }
        }
    }
}
function resetShowdate(){
    a=[0,0];
}

