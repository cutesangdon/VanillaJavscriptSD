function test1(){
  var tq = document.getElementById("tast");
  var pt = prompt("수정",tq.value)
  if(pt==null){
    tq.value == tq.value;
  }else{
    tq.value = pt;  
  }
}