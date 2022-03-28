function Basic(){
  document.getElementById("disab1").setAttribute('disabled',true);
  document.getElementById("disab2").setAttribute('disabled',true);
  var Interval= setInterval("basicrun()",speed)
}
function Hightech(){
  document.getElementById("disab1").setAttribute('disabled',true);
  document.getElementById("disab2").setAttribute('disabled',true);
  var Interval= setInterval("highrun()",speed)
}
var NRD = 0;   /* 틱당 1증가, 백그라운드 색 이동, 결과 출력에 사용 */
var Breaknum = Math.floor(Math.random()*(190-151+1)) + 151; /* 일반 버튼 랜덤숫자 */
var highBreak = Math.floor(Math.random()*(105-91+1)) + 91;  /* 고성능 버튼 랜덤숫자 */
var speed = 60;
function basicrun(){
  if(NRD==Breaknum){
    clearInterval(Interval);
  }
NRD ++;
if(NRD==1||NRD==11||NRD==21||NRD==31||NRD==41||NRD==51
||NRD==52||NRD==71||NRD==72||NRD==91||NRD ==92||NRD==111
||NRD==112||NRD==113||NRD==114||NRD==151||NRD==152||NRD==153||NRD==154){
  document.getElementById("onebox").style.backgroundColor="#8F8EBF";
  document.getElementById("twobox").style.backgroundColor="#474073";
  document.getElementById("threebox").style.backgroundColor="#474073";
  document.getElementById("fourbox").style.backgroundColor="#474073";
  document.getElementById("fivebox").style.backgroundColor="#474073";
  document.getElementById("sixbox").style.backgroundColor="#474073";
  document.getElementById("sevenbox").style.backgroundColor="#474073";
  document.getElementById("eightbox").style.backgroundColor="#474073";
  document.getElementById("ninebox").style.backgroundColor="#474073";
  document.getElementById("tenbox").style.backgroundColor="#474073";
  }
if(NRD==2||NRD==12||NRD==22||NRD==32||NRD==42||NRD ==53
||NRD==54||NRD==73||NRD==74||NRD==93||NRD==94||NRD==115
||NRD==116||NRD==117||NRD==118||NRD==155||NRD==156||NRD==157||NRD==158){
  document.getElementById("onebox").style.backgroundColor="#474073";
  document.getElementById("twobox").style.backgroundColor="#8F8EBF";
  document.getElementById("threebox").style.backgroundColor="#474073";
  document.getElementById("fourbox").style.backgroundColor="#474073";
  document.getElementById("fivebox").style.backgroundColor="#474073";
  document.getElementById("sixbox").style.backgroundColor="#474073";
  document.getElementById("sevenbox").style.backgroundColor="#474073";
  document.getElementById("eightbox").style.backgroundColor="#474073";
  document.getElementById("ninebox").style.backgroundColor="#474073";
  document.getElementById("tenbox").style.backgroundColor="#474073";
  }
if(NRD==3||NRD==13||NRD==23||NRD==33||NRD==43||NRD==55
||NRD==56||NRD==75||NRD==76||NRD==95||NRD==96||NRD==119
||NRD==120||NRD==121||NRD==122||NRD==159||NRD==160||NRD==161||NRD==162){
  document.getElementById("onebox").style.backgroundColor="#474073";
  document.getElementById("twobox").style.backgroundColor="#474073";
  document.getElementById("threebox").style.backgroundColor="#8F8EBF";
  document.getElementById("fourbox").style.backgroundColor="#474073";
  document.getElementById("fivebox").style.backgroundColor="#474073";
  document.getElementById("sixbox").style.backgroundColor="#474073";
  document.getElementById("sevenbox").style.backgroundColor="#474073";
  document.getElementById("eightbox").style.backgroundColor="#474073";
  document.getElementById("ninebox").style.backgroundColor="#474073";
  document.getElementById("tenbox").style.backgroundColor="#474073";
}
if(NRD==4||NRD==14||NRD==24||NRD==34||NRD==44||NRD==57
||NRD==58||NRD==77||NRD==78||NRD==97||NRD==98||NRD==123
||NRD==124||NRD==125||NRD==126||NRD==163||NRD==164||NRD==165||NRD==166){
  document.getElementById("onebox").style.backgroundColor="#474073";
  document.getElementById("twobox").style.backgroundColor="#474073";
  document.getElementById("threebox").style.backgroundColor="#474073";
  document.getElementById("fourbox").style.backgroundColor="#8F8EBF";
  document.getElementById("fivebox").style.backgroundColor="#474073";
  document.getElementById("sixbox").style.backgroundColor="#474073";
  document.getElementById("sevenbox").style.backgroundColor="#474073";
  document.getElementById("eightbox").style.backgroundColor="#474073";
  document.getElementById("ninebox").style.backgroundColor="#474073";
  document.getElementById("tenbox").style.backgroundColor="#474073";
}
if(NRD==5||NRD==15||NRD==25||NRD==35||NRD==45||NRD ==59
||NRD==60||NRD==79||NRD==80||NRD==99||NRD==100||NRD==127
||NRD==128||NRD==129||NRD==130||NRD==167||NRD==168||NRD==169||NRD==170){
  document.getElementById("onebox").style.backgroundColor="#474073";
  document.getElementById("twobox").style.backgroundColor="#474073";
  document.getElementById("threebox").style.backgroundColor="#474073";
  document.getElementById("fourbox").style.backgroundColor="#474073";
  document.getElementById("fivebox").style.backgroundColor="#8F8EBF";
  document.getElementById("sixbox").style.backgroundColor="#474073";
  document.getElementById("sevenbox").style.backgroundColor="#474073";
  document.getElementById("eightbox").style.backgroundColor="#474073";
  document.getElementById("ninebox").style.backgroundColor="#474073";
  document.getElementById("tenbox").style.backgroundColor="#474073";
}
if(NRD==6||NRD==16||NRD==26||NRD==36||NRD==46||NRD==61
||NRD==62||NRD==81||NRD==82||NRD==101||NRD==102||NRD==131
||NRD==132||NRD==133||NRD==134||NRD==171||NRD==172||NRD==173||NRD==174){
  document.getElementById("onebox").style.backgroundColor="#474073";
  document.getElementById("twobox").style.backgroundColor="#474073";
  document.getElementById("threebox").style.backgroundColor="#474073";
  document.getElementById("fourbox").style.backgroundColor="#474073";
  document.getElementById("fivebox").style.backgroundColor="#474073";
  document.getElementById("sixbox").style.backgroundColor="#474073";
  document.getElementById("sevenbox").style.backgroundColor="#474073";
  document.getElementById("eightbox").style.backgroundColor="#474073";
  document.getElementById("ninebox").style.backgroundColor="#474073";
  document.getElementById("tenbox").style.backgroundColor="#8F8EBF";
}
if(NRD==7||NRD==17||NRD==27||NRD==37||NRD==47||NRD==63
||NRD==64||NRD==83||NRD==84||NRD==103||NRD==104||NRD==135
||NRD==136||NRD==137||NRD==138||NRD==175||NRD==176||NRD==177||NRD==178){
  document.getElementById("onebox").style.backgroundColor="#474073";
  document.getElementById("twobox").style.backgroundColor="#474073";
  document.getElementById("threebox").style.backgroundColor="#474073";
  document.getElementById("fourbox").style.backgroundColor="#474073";
  document.getElementById("fivebox").style.backgroundColor="#474073";
  document.getElementById("sixbox").style.backgroundColor="#474073";
  document.getElementById("sevenbox").style.backgroundColor="#474073";
  document.getElementById("eightbox").style.backgroundColor="#474073";
  document.getElementById("ninebox").style.backgroundColor="#8F8EBF";
  document.getElementById("tenbox").style.backgroundColor="#474073";
}
if(NRD==8||NRD==18||NRD==28||NRD==38||NRD==48||NRD==65
||NRD==66||NRD==85||NRD==86||NRD==105||NRD==106||NRD==139
||NRD==140||NRD==141||NRD==142||NRD==179||NRD==180||NRD==181||NRD==182){
  document.getElementById("onebox").style.backgroundColor="#474073";
  document.getElementById("twobox").style.backgroundColor="#474073";
  document.getElementById("threebox").style.backgroundColor="#474073";
  document.getElementById("fourbox").style.backgroundColor="#474073";
  document.getElementById("fivebox").style.backgroundColor="#474073";
  document.getElementById("sixbox").style.backgroundColor="#474073";
  document.getElementById("sevenbox").style.backgroundColor="#474073";
  document.getElementById("eightbox").style.backgroundColor="#8F8EBF";
  document.getElementById("ninebox").style.backgroundColor="#474073";
  document.getElementById("tenbox").style.backgroundColor="#474073";
}
if(NRD==9||NRD==19||NRD==29||NRD==39||NRD==49||NRD==67
||NRD==68||NRD==87||NRD==88||NRD==107||NRD==108||NRD==143
||NRD==144||NRD==145||NRD==146||NRD==183||NRD==184||NRD==185||NRD==186){
  document.getElementById("onebox").style.backgroundColor="#474073";
  document.getElementById("twobox").style.backgroundColor="#474073";
  document.getElementById("threebox").style.backgroundColor="#474073";
  document.getElementById("fourbox").style.backgroundColor="#474073";
  document.getElementById("fivebox").style.backgroundColor="#474073";
  document.getElementById("sixbox").style.backgroundColor="#474073";
  document.getElementById("sevenbox").style.backgroundColor="#8F8EBF";
  document.getElementById("eightbox").style.backgroundColor="#474073";
  document.getElementById("ninebox").style.backgroundColor="#474073";
  document.getElementById("tenbox").style.backgroundColor="#474073";
}
if(NRD==10||NRD==20||NRD==30||NRD==40||NRD==50||NRD==69
||NRD==70||NRD==89||NRD==90||NRD==109||NRD==110||NRD==147
||NRD==148||NRD==149||NRD==150||NRD==187||NRD==188||NRD==189||NRD==190){
  document.getElementById("onebox").style.backgroundColor="#474073";
  document.getElementById("twobox").style.backgroundColor="#474073";
  document.getElementById("threebox").style.backgroundColor="#474073";
  document.getElementById("fourbox").style.backgroundColor="#474073";
  document.getElementById("fivebox").style.backgroundColor="#474073";  
  document.getElementById("sixbox").style.backgroundColor="#8F8EBF";
  document.getElementById("sevenbox").style.backgroundColor="#474073";
  document.getElementById("eightbox").style.backgroundColor="#474073";
  document.getElementById("ninebox").style.backgroundColor="#474073";
  document.getElementById("tenbox").style.backgroundColor="#474073";
}
  function oneR(){alert("1번 당첨");location.reload();}
  if((NRD==Breaknum&&NRD==151)||(NRD==Breaknum&&NRD==152)
  ||(NRD==Breaknum&&NRD==153)||(NRD==Breaknum&&NRD==154)){setTimeout(oneR,200);}
  function twoR(){alert("2번 당첨");location.reload();}
  if((NRD==Breaknum&&NRD==155)||(NRD==Breaknum&&NRD==156)
  ||(NRD==Breaknum&&NRD==157)||(NRD==Breaknum&&NRD==158)){setTimeout(twoR,200);}
  function threeR(){alert("3번 당첨");location.reload();}
  if((NRD==Breaknum&&NRD==159)||(NRD==Breaknum&&NRD==160)
  ||(NRD==Breaknum&&NRD==161)||(NRD==Breaknum&&NRD==162)){setTimeout(threeR,200);}
  function fourR(){alert("4번 당첨");location.reload();}
  if((NRD==Breaknum&&NRD==163)||(NRD==Breaknum&&NRD==164)
  ||(NRD==Breaknum&&NRD==165)||(NRD==Breaknum&&NRD==166)){setTimeout(fourR,200);}
  function fiveR(){alert("5번 당첨");location.reload();}
  if((NRD==Breaknum&&NRD==167)||(NRD==Breaknum&&NRD==168)
  ||(NRD==Breaknum&&NRD==169)||(NRD==Breaknum&&NRD==170)){setTimeout(fiveR,200);}
  function sixR(){alert("10번 당첨");location.reload();}
  if((NRD==Breaknum&&NRD==171)||(NRD==Breaknum&&NRD==172)
  ||(NRD==Breaknum&&NRD==173)||(NRD==Breaknum&&NRD==174)){setTimeout(sixR,200);}
  function sevenR(){alert("9번 당첨");location.reload();}
  if((NRD==Breaknum&&NRD==175)||(NRD==Breaknum&&NRD==176)
  ||(NRD==Breaknum&&NRD==177)||(NRD==Breaknum&&NRD==178)){setTimeout(sevenR,200);}
  function eightR(){alert("8번 당첨");location.reload();}
  if((NRD==Breaknum&&NRD==179)||(NRD==Breaknum&&NRD==180)
  ||(NRD==Breaknum&&NRD==181)||(NRD==Breaknum&&NRD==182)){setTimeout(eightR,200);}
  function nineR(){alert("7번 당첨");location.reload();}
  if((NRD==Breaknum&&NRD==183)||(NRD==Breaknum&&NRD==184)
  ||(NRD==Breaknum&&NRD==185)||(NRD==Breaknum&&NRD==186)){setTimeout(nineR,200);}
  function tenR(){alert("6번 당첨");location.reload();}
  if((NRD==Breaknum&&NRD==187)||(NRD==Breaknum&&NRD==188)
  ||(NRD==Breaknum&&NRD==189||(NRD==Breaknum&&NRD==190))){setTimeout(tenR,200);}
}
function highrun(){
  if(NRD==highBreak){
    clearInterval(Interval);
  }
  NRD ++;
  if(NRD == 1||NRD ==11||NRD ==21||NRD ==31||NRD ==41||NRD ==51
  ||NRD ==61||NRD ==71||NRD ==81||NRD ==91||NRD ==101||NRD ==102){
  document.getElementById("onebox").style.backgroundColor="#222";
  document.getElementById("twobox").style.backgroundColor="#ddd";
  document.getElementById("threebox").style.backgroundColor="#ddd";
  document.getElementById("fourbox").style.backgroundColor="#ddd";
  document.getElementById("fivebox").style.backgroundColor="#ddd";
  document.getElementById("sixbox").style.backgroundColor="#ddd";
  document.getElementById("sevenbox").style.backgroundColor="#ddd";
  document.getElementById("eightbox").style.backgroundColor="#ddd";
  document.getElementById("ninebox").style.backgroundColor="#ddd";
  document.getElementById("tenbox").style.backgroundColor="#ddd";
  }
  if(NRD == 2||NRD ==12||NRD ==22||NRD ==32||NRD ==42||NRD ==52||
  NRD ==62||NRD ==72||NRD ==82||NRD ==92||NRD ==103||NRD ==104||NRD ==105){
  document.getElementById("onebox").style.backgroundColor="#ddd";
  document.getElementById("twobox").style.backgroundColor="#222";
  document.getElementById("threebox").style.backgroundColor="#ddd";
  document.getElementById("fourbox").style.backgroundColor="#ddd";
  document.getElementById("fivebox").style.backgroundColor="#ddd";
  document.getElementById("sixbox").style.backgroundColor="#ddd";
  document.getElementById("sevenbox").style.backgroundColor="#ddd";
  document.getElementById("eightbox").style.backgroundColor="#ddd";
  document.getElementById("ninebox").style.backgroundColor="#ddd";
  document.getElementById("tenbox").style.backgroundColor="#ddd";
  }
if(NRD == 3||NRD ==13||NRD ==23||NRD ==33||NRD ==43||
NRD ==53||NRD ==63||NRD ==73||NRD ==83||NRD ==93){
  document.getElementById("onebox").style.backgroundColor="#ddd";
  document.getElementById("twobox").style.backgroundColor="#ddd";
  document.getElementById("threebox").style.backgroundColor="#222";
  document.getElementById("fourbox").style.backgroundColor="#ddd";
  document.getElementById("fivebox").style.backgroundColor="#ddd";
  document.getElementById("sixbox").style.backgroundColor="#ddd";
  document.getElementById("sevenbox").style.backgroundColor="#ddd";
  document.getElementById("eightbox").style.backgroundColor="#ddd";
  document.getElementById("ninebox").style.backgroundColor="#ddd";
  document.getElementById("tenbox").style.backgroundColor="#ddd";
}
if(NRD == 4||NRD ==14||NRD ==24||NRD ==34||NRD ==44||
NRD ==54||NRD ==64||NRD ==74||NRD ==84||NRD ==94){
  document.getElementById("onebox").style.backgroundColor="#ddd";
  document.getElementById("twobox").style.backgroundColor="#ddd";
  document.getElementById("threebox").style.backgroundColor="#ddd";
  document.getElementById("fourbox").style.backgroundColor="#222";
  document.getElementById("fivebox").style.backgroundColor="#ddd";
  document.getElementById("sixbox").style.backgroundColor="#ddd";
  document.getElementById("sevenbox").style.backgroundColor="#ddd";
  document.getElementById("eightbox").style.backgroundColor="#ddd";
  document.getElementById("ninebox").style.backgroundColor="#ddd";
  document.getElementById("tenbox").style.backgroundColor="#ddd";
}
if(NRD == 5||NRD ==15||NRD ==25||NRD ==35||NRD ==45||
NRD ==55||NRD ==65||NRD ==75||NRD ==85||NRD ==95){
  document.getElementById("onebox").style.backgroundColor="#ddd";
  document.getElementById("twobox").style.backgroundColor="#ddd";
  document.getElementById("threebox").style.backgroundColor="#ddd";
  document.getElementById("fourbox").style.backgroundColor="#ddd";
  document.getElementById("fivebox").style.backgroundColor="#222";
  document.getElementById("sixbox").style.backgroundColor="#ddd";
  document.getElementById("sevenbox").style.backgroundColor="#ddd";
  document.getElementById("eightbox").style.backgroundColor="#ddd";
  document.getElementById("ninebox").style.backgroundColor="#ddd";
  document.getElementById("tenbox").style.backgroundColor="#ddd";
}
if(NRD == 6||NRD ==16||NRD ==26||NRD ==36||NRD ==46||
NRD ==56||NRD ==66||NRD ==76||NRD ==86||NRD ==96){
  document.getElementById("onebox").style.backgroundColor="#ddd";
  document.getElementById("twobox").style.backgroundColor="#ddd";
  document.getElementById("threebox").style.backgroundColor="#ddd";
  document.getElementById("fourbox").style.backgroundColor="#ddd";
  document.getElementById("fivebox").style.backgroundColor="#ddd";
  document.getElementById("sixbox").style.backgroundColor="#222";
  document.getElementById("sevenbox").style.backgroundColor="#ddd";
  document.getElementById("eightbox").style.backgroundColor="#ddd";
  document.getElementById("ninebox").style.backgroundColor="#ddd";
  document.getElementById("tenbox").style.backgroundColor="#ddd";
}
if(NRD == 7||NRD ==17||NRD ==27||NRD ==37||NRD ==47||
NRD ==57||NRD ==67||NRD ==77||NRD ==87||NRD ==97){
  document.getElementById("onebox").style.backgroundColor="#ddd";
  document.getElementById("twobox").style.backgroundColor="#ddd";
  document.getElementById("threebox").style.backgroundColor="#ddd";
  document.getElementById("fourbox").style.backgroundColor="#ddd";
  document.getElementById("fivebox").style.backgroundColor="#ddd";
  document.getElementById("sixbox").style.backgroundColor="#ddd";
  document.getElementById("sevenbox").style.backgroundColor="#222";
  document.getElementById("eightbox").style.backgroundColor="#ddd";
  document.getElementById("ninebox").style.backgroundColor="#ddd";
  document.getElementById("tenbox").style.backgroundColor="#ddd";
}
if(NRD == 8||NRD ==18||NRD ==28||NRD ==38||NRD ==48||
NRD ==58||NRD ==68||NRD ==78||NRD ==88||NRD ==98){
  document.getElementById("onebox").style.backgroundColor="#ddd";
  document.getElementById("twobox").style.backgroundColor="#ddd";
  document.getElementById("threebox").style.backgroundColor="#ddd";
  document.getElementById("fourbox").style.backgroundColor="#ddd";
  document.getElementById("fivebox").style.backgroundColor="#ddd";
  document.getElementById("sixbox").style.backgroundColor="#ddd";
  document.getElementById("sevenbox").style.backgroundColor="#ddd";
  document.getElementById("eightbox").style.backgroundColor="#222";
  document.getElementById("ninebox").style.backgroundColor="#ddd";
  document.getElementById("tenbox").style.backgroundColor="#ddd";
}
if(NRD == 9||NRD ==19||NRD ==29||NRD ==39||NRD ==49||
NRD ==59||NRD ==69||NRD ==79||NRD ==89||NRD ==99){
  document.getElementById("onebox").style.backgroundColor="#ddd";
  document.getElementById("twobox").style.backgroundColor="#ddd";
  document.getElementById("threebox").style.backgroundColor="#ddd";
  document.getElementById("fourbox").style.backgroundColor="#ddd";
  document.getElementById("fivebox").style.backgroundColor="#ddd";
  document.getElementById("sixbox").style.backgroundColor="#ddd";
  document.getElementById("sevenbox").style.backgroundColor="#ddd";
  document.getElementById("eightbox").style.backgroundColor="#ddd";
  document.getElementById("ninebox").style.backgroundColor="#222";
  document.getElementById("tenbox").style.backgroundColor="#ddd";
}
if(NRD == 10||NRD ==20||NRD ==30||NRD ==40||NRD ==50||
NRD ==60||NRD ==70||NRD ==80||NRD ==90||NRD ==100){
  document.getElementById("onebox").style.backgroundColor="#ddd";
  document.getElementById("twobox").style.backgroundColor="#ddd";
  document.getElementById("threebox").style.backgroundColor="#ddd";
  document.getElementById("fourbox").style.backgroundColor="#ddd";
  document.getElementById("fivebox").style.backgroundColor="#ddd";  
  document.getElementById("sixbox").style.backgroundColor="#ddd";
  document.getElementById("sevenbox").style.backgroundColor="#ddd";
  document.getElementById("eightbox").style.backgroundColor="#ddd";
  document.getElementById("ninebox").style.backgroundColor="#ddd";
  document.getElementById("tenbox").style.backgroundColor="#222";
}
  function oneHR(){alert("고성능 1번 당첨");location.reload();}
  if((NRD==highBreak&&NRD==91)||(NRD==highBreak&&NRD==101)
  ||(NRD==highBreak&&NRD==102)){setTimeout(oneHR,200);}
  function twoHR(){alert("고성능 2번 당첨");location.reload();}
  if(NRD==highBreak&&NRD==92||(NRD==highBreak&&NRD==103)
  ||(NRD==highBreak&&NRD==104)||(NRD==highBreak&&NRD==105)){setTimeout(twoHR,200);}
  function threeHR(){alert("고성능 3번 당첨");location.reload();}
  if(NRD==highBreak&&NRD==93){setTimeout(threeHR,200);}
  function fourHR(){alert("고성능 4번 당첨");location.reload();}
  if(NRD==highBreak&&NRD==94){setTimeout(fourHR,200);}
  function fiveHR(){alert("고성능 5번 당첨");location.reload();}
  if(NRD==highBreak&&NRD==95){setTimeout(fiveHR,200);}
  function sixHR(){alert("고성능 6번 당첨");location.reload();}
  if(NRD==highBreak&&NRD==96){setTimeout(sixHR,200);}
  function sevenHR(){alert("고성능 7번 당첨");location.reload();}
  if(NRD==highBreak&&NRD==97){setTimeout(sevenHR,200);}
  function eightHR(){alert("고성능 8번 당첨");location.reload();}
  if(NRD==highBreak&&NRD==98){setTimeout(eightHR,200);}
  function nineHR(){alert("고성능 9번 당첨");location.reload();}
  if(NRD==highBreak&&NRD==99){setTimeout(nineHR,200);}
  function tenHR(){alert("고성능 10번 당첨");location.reload();}
  if(NRD==highBreak&&NRD==100){setTimeout(tenHR,200);}
}