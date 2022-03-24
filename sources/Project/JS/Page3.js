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