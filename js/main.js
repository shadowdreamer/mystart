

function changeTittle(){
    var x=document.getElementById("tittle");
    x.innerHTML="很常用";
  }
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
        var N2=document.getElementById("N1").value;

        x.innerHTML= multi(N1,N2);
        
    }
    

var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;

function checkGuess() {
   var userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = '猜测记录: ';
        }
    guesses.textContent += userGuess + ' ';
 
    if (userGuess === randomNumber) {
        lastResult.textContent = '恭喜你答对了!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    }    
    else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    }    
    else {
        lastResult.textContent = '错误!';
        lastResult.style.backgroundColor = 'pink';
        if(userGuess < randomNumber) {
            lowOrHi.textContent = '低了!';
        }
        else if(userGuess > randomNumber) {
        lowOrHi.textContent = '高了!';
        }
    }
   guessCount++;
  guessField.value
}
guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = '新一轮';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
 n=0
}

function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

function showDatedemo(){
	document.getElementById("dateB").innerHTML=Date();
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
function currentDate(){
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
    }

    var a=1
    var n=0
function showDate(){
    var b=currentDate();
    var x=document.getElementById("dateB");
    if (a==1||a==4){
        x.innerHTML="今天是" + b;
        a=2;            }
    else{
        if(a==2){
            x.innerHTML="别点了，今天是" + b;
            n=n+1;
            a=3;             }            
        else if(a=3 && n<4){
            x.innerHTML="别点了，再点不告诉你了";
            a=4;        }
        else{
            x.innerHTML="CNM不告诉你了";}
    }

}
