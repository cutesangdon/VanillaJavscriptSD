/* page4 script */
var time = 3600;
var utime = 0;
function thirtyM(){
  time=time+1800
}
function oneH(){
  time=time+3600;
}
function end(){
  document.getElementById("disab4").setAttribute('disabled',false);
  time=(time+1)-time;
}
function reset(){
  alert("시간이 초기화 됩니다.");
  location.reload();
}
function time_start(){
  document.getElementById("disab1").setAttribute('disabled',true);
  var Interval= setInterval("minus()",5)
}
function minus(){
  if(time==0){ /* 타이머 종료 */
    document.getElementById("disab4").setAttribute('disabled',false);
    clearInterval(Interval)
    alert("시간이 종료되었습니다.")
  }
  var hour = Math.floor((time-1)/3600); /* 잔여 시간 출력 영역*/
  time--;
  utime++;
  document.getElementById("remaining hour").innerHTML = "잔여 시간 "+Math.floor(hour)+" :";
  if((time/60)-(hour*60)<60&&(time/60)-(hour*60)>9){
    document.getElementById("remaining min").innerHTML = Math.floor((time/60)-(hour*60))+" :";
  }
  if((time/60)-(hour*60)<10){
    document.getElementById("remaining min").innerHTML = "0"+Math.floor((time/60)-(hour*60))+" :";
  }
  if(time%60<60&&time%60>9){
   document.getElementById("remaining sec").innerHTML = time%60
  }
  if(time%60<10){
    document.getElementById("remaining sec").innerHTML = "0"+time%60
  }
      
  var usemin = Math.floor(utime/60),   /* 사용 시간 출력 영역*/
  usehour = Math.floor(utime/3600);
  document.getElementById("used hour").innerHTML ="사용 시간 "+ usehour +" :" ;
  if(usemin-(usehour*60)<60&&usemin-(usehour*60)>9){
    document.getElementById("used min").innerHTML = usemin-(usehour*60) + " :";
  }  
  if(usemin-(usehour*60)<10){
    document.getElementById("used min").innerHTML = "0" + (usemin-(usehour*60)) + " :";
  }
  if(utime-(usemin*60)<60&&utime-(usemin*60)>9){
    document.getElementById("used sec").innerHTML = utime-(usemin*60);
  }
  if(utime-(usemin*60)<10){
    document.getElementById("used sec").innerHTML = "0"+ (utime-(usemin*60));
  }
}