

    function changeTittle(){
    x=document.getElementById("tittle");
    x.innerHTML="很常用";
    }

    function changeFace(){
    element=document.getElementById("face")
    if (element.src.match("face2")){
        element.src="img/face1.gif";
        }
        else{
        element.src="img/face2.jpg";
         }
    }

    function multi(N1,N2){
    var result= N1 * N2;
    return result;
    }
