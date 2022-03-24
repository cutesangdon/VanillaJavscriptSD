function shuffle(){
  var food = ['메뉴1','메뉴2','메뉴3','메뉴4','메뉴5','메뉴6','메뉴7','메뉴8','메뉴9','메뉴10'
  ,'메뉴11','메뉴12','메뉴13','메뉴14','메뉴15','메뉴16','메뉴17']
  var randnum = (Math.random()*17);
  var foodnum = (Math.floor(randnum));
  alert(food[foodnum]);
  location.reload();
}