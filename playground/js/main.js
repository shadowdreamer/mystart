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

