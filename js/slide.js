var box = document.getElementsByClassName('box')[0];
var li = document.getElementsByClassName('btn')[0].children;

setInterval(function(){
    var p =  parseInt(box.style.marginLeft); 
    if(p <= -2200){
        box.style.marginLeft ='0px';
    }else{
        var n  =0;
        var timer = setInterval(function(){
            box.style.marginLeft = parseInt(box.style.marginLeft) - 50 + 'px';
            n += 1;
            if(n == 11){
                clearInterval(timer);
            }
        },30);

        
    }
},5000);
for(var i =0;i<4;i++){
 (function(x){
     li[x].addEventListener('click',function(){
        box.style.marginLeft = -x*550 +'px';
     },false);
 }(i));
}

