/*******************/
/* mainpage script */
/*******************/
var today = new Date();           /* 현재 연,월,일 */
const join = new Date(2018,9,22), /* 입사 연,월,일 */
discharge = new Date(2022,11,05)  /* 전역 연,월,일 */

const dischargeYear = discharge.getFullYear(),   /**************************/
dischargeMonth = discharge.getMonth(),           /* 입사 연,월,일 불러오기 */
dischargeDate = discharge.getDate();             /**************************/

const joinYear = join.getFullYear(),   /**************************/
joinMonth = join.getMonth(),           /* 전역 연,월,일 불러오기 */
joinDate = join.getDate();             /**************************/

var workingTime = today.getTime() - join.getTime();       /* 재직일 수 msc로 반환 **/
var workingDay = Math.ceil(workingTime/(60*1000*60*24));  /* msc를 일로 계산 *******/
var workingYear = Math.floor(workingDay / 365);           /* 재직 일을 연으로 변환 */
var workDay = Math.floor(workingDay % 365);                   /* 연으로 변환 후 나머지 */
var dischargeTime = discharge.getTime() - today.getTime();    /* 재직일 수 msc로 반환 **/
var dischargeDay = Math.ceil(dischargeTime/(60*1000*60*24));  /* msc를 일로 계산 *******/
/* 출력 영역 */
document.getElementById("first").innerHTML = "<p>[컴아트 시스템 입사]<p>";
document.getElementById("second").innerHTML = "<p>입사일은 " + joinYear+ "년 " + (joinMonth + 1) + "월 " + joinDate + "일입니다.</p>";
document.getElementById("third").innerHTML = "<p>입사 후 " + workingDay + "일이 지났으며<p>";
document.getElementById("fourth").innerHTML = "<p>" + workingYear + "년 " + workDay + "일이 지났습니다.<p>";
document.getElementById("fifth").innerHTML = "<p>전역일은 " + dischargeYear + "년 " + (dischargeMonth + 1) + "월 " 
+ dischargeDate + "일이며" + "<br>" + dischargeDay + "일이 남았습니다.<p>";
/****************/
/* page1 script */
/****************/
document.getElementById("page1_what").addEventListener('click',shuffle);
function shuffle(){
  var food = ['메뉴1','메뉴2','메뉴3','메뉴4','메뉴5','메뉴6','메뉴7','메뉴8','메뉴9','메뉴10'
  ,'메뉴11','메뉴12','메뉴13','메뉴14','메뉴15','메뉴16','메뉴17']
  var randnum = (Math.random()*17);
  var foodnum = (Math.floor(randnum));
  alert(food[foodnum]);
  location.reload();
}
/****************/
/* page2 script */
/****************/

/****************/
/* page3 script */
/****************/
document.getElementById("page3_Select").addEventListener('click',Button_click);
function Button_click() {
  var msg = "출력\n";
  var checkBoxes = document.getElementsByName("person");

  for (var i = 0; i < checkBoxes.length; i++){
    if (checkBoxes[i].checked){
      msg += ("- " + checkBoxes[i].value + "\n");}
    }
  alert(msg)
  location.reload();
}
function selectAll(selectAll)  {
const checkboxes = document.getElementsByName('person');
checkboxes.forEach((checkbox) => {
checkbox.checked = selectAll.checked;
})
}
