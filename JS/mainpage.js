var today = new Date();           // 현재 연,월,일
const join = new Date(2018,9,22), // 입사 연,월,일
discharge = new Date(2022,11,05);  // 전역 연,월,일

const dischargeYear = discharge.getFullYear(),   /**************************/
dischargeMonth = discharge.getMonth(),           /* 입사 연,월,일 불러오기 */
dischargeDate = discharge.getDate();             /**************************/

const joinYear = join.getFullYear(),   /**************************/
joinMonth = join.getMonth(),           /* 전역 연,월,일 불러오기 */
joinDate = join.getDate();             /**************************/

var workingTime = today.getTime() - join.getTime();       // 재직일 수 msc로 반환
var workingDay = Math.ceil(workingTime/(60*1000*60*24));  // msc를 일로 계산
var workingYear = Math.floor(workingDay / 365);           // 재직 일을 연으로 변환
var workDay = Math.floor(workingDay % 365);                   // 연으로 변환 후 나머지
var dischargeTime = discharge.getTime() - today.getTime();    // 재직일 수 msc로 반환
var dischargeDay = Math.ceil(dischargeTime/(60*1000*60*24));  // msc를 일로 계산
/* 출력 영역 */
document.getElementById("first").innerHTML="[컴아트 시스템]";
document.getElementById("second").innerHTML="입사일은 "+joinYear+"년 "+(joinMonth+1)+"월 "+joinDate+"일입니다.";
document.getElementById("third").innerHTML="입사 후 "+ workingDay+"일이 지났으며";
document.getElementById("fourth").innerHTML=workingYear+"년 "+workDay+"일이 지났습니다.";
if(dischargeDay>=1){
  document.getElementById("fifth").innerHTML="전역일은 "+dischargeYear+"년 "+(dischargeMonth + 1)+"월 " 
+dischargeDate+"일이며"+"<br>"+dischargeDay+"일이 남았습니다.";
}else if(dischargeDay==0){
  document.getElementById("fifth").innerHTML="전역일입니다.";
}else{
  document.getElementById("fifth").innerHTML="전역 축하드립니다!!!";
}
console.log(joinYear);
function Button_click() {
  var MSG = "출력\n";
  var checkBoxes = document.getElementsByName("CBbox");

  for (var i = 0; i < checkBoxes.length; i++){
    if (checkBoxes[i].checked){
      MSG += ("- " + checkBoxes[i].value + "\n");}
    }
  alert(MSG)
  location.reload();
}
function Radio_click() {
  var radioBoxes = document.getElementsByName("RDbox").length;
  for(var i = 0; i<radioBoxes; i++) {
    if(document.getElementsByName("RDbox")[i].checked == true) {
      alert("출력\n- " + document.getElementsByName("RDbox")[i].value);
      location.reload();
    }
  }
  location.reload();
}
function checkSelectAll(){
  const checkboxes
    = document.querySelectorAll('input[name="CBbox"]');
  const checked
    = document.querySelectorAll('input[name="CBbox"]:checked');
  const selectAll
    = document.querySelector('input[name="selectall"]');
  if(checkboxes.length === checked.length){
    selectAll.checked = true;
  }else {
    selectAll.checked = false;
  }
}
function selectAll(selectAll)  {
const checkboxes = document.getElementsByName('CBbox');
checkboxes.forEach((checkbox) => {
checkbox.checked = selectAll.checked;
})
}

function shuffle(){
  var randomMSG = "출력\n";
  var food = ['zero','one','two','three','four','five','six','seven','eight','nine','ten']
  var randnum = (Math.random()*11);
  var foodnum = (Math.floor(randnum));
  InMSG = food[foodnum]
  randomMSG += ("- " + InMSG);
  alert(randomMSG);
  location.reload();
}