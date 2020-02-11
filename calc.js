
"use strict";
// Переменные для вычислений 
var clean=false;
var numb1=0;
var numb2=0;
var znak="";
var clik_calculation=false; 
var timerId;

function num(numb){ // функция добавляет число в div ограничение ввода 17 символов 
	result_cleaning();
	var result=document.getElementById("result").innerHTML;
	if(result.length<17){
		if(result=="0")document.getElementById("result").innerHTML="";
	document.getElementById("result").innerHTML+=numb;
	result_display();// меняет позицию  div result для сдвига значения влево 
     }
     clik_calculation=false; 
     time_clean(); // функция сброса таймера  
 }
function procedure(sign){ // обработка клавиш операций 
    numb1=document.getElementById("result").innerHTML+sign;
    znak=sign;
    clean=true;
    clik_calculation=false;
    time_clean();
}
function calculation(){ //выполнеие операций клавиша "="
	if(clik_calculation);else
	numb2=parseFloat(document.getElementById("result").innerHTML);
	numb1=parseFloat(numb1);
    if(znak=="+")
    numb1 = numb1 + numb2;
    if(znak=="-")
    numb1 = numb1 - numb2;
    if(znak=="*")
    numb1= numb1 * numb2;
    if(znak=="/")
    numb1= numb1 / numb2;
    document.getElementById("result").innerHTML=numb1 ;
    clik_calculation=true;
    result_display();
    time_clean();
}
function dellete() // удаление одного символа 
{ var  result =document.getElementById("result").innerHTML ;

if(result.length==1)result=0;
if(result!="0")
 result  = result.substring(0, result.length - 1);
document.getElementById("result").innerHTML=result;
result_display();
}
function clean1(){ // отчистка экрана 
	document.getElementById("result").innerHTML="0";
	result_display();
}
function clean2(){ // отчистка экрана и сброс значений 
	document.getElementById("result").innerHTML="0";
	result_display();
	clean=false;
     numb1=0;
    numb2=0;
    znak="";
}
function sign_change() // смена знака 
{var result =document.getElementById("result").innerHTML;
  result=-parseFloat(result);
  document.getElementById("result").innerHTML=result;
  result_display();
}
function point_add()// добавление точки 
{
	if(document.getElementById("result").innerHTML.includes("."));
   else
    {
    	if(document.getElementById("result").innerHTML=="0")
   	         num("0.");else num(".");
    }

}
function result_display(){	 //выбор шрифта и смена позиции результата 
	var length_result=document.getElementById("result").innerHTML.length;
	var distant=0;
	if(length_result<13)
    distant=26;
	else distant=13;
   var result_left=460-(distant+1.5)*length_result;
  document.getElementById("result").setAttribute("style", "margin-left:"+result_left+"px;"+" font-size:"+distant*2+"px" );
}
function result_cleaning()// функция отчистки экрана 
{
	if(clean){
	document.getElementById("result").innerHTML="0";
	clean=false;
 }
}
	document.onkeydown = function(e) // обработка событий клавиатуры 
 { if(46<e.keyCode && e.keyCode<58  )
    num(String.fromCharCode(e.keyCode ));
    if( 95<e.keyCode && e.keyCode<106 )
    num(String.fromCharCode(e.keyCode-48));
     switch (e.keyCode) {
  case 8:
    dellete();
    break;
  case 46:
    clean1();
    break;
  case 190:
    point_add();
    break;
  case 110:
    point_add();
    break;
     case 191:
    point_add();
    break;
     case 13:
     e.preventDefault();
    calculation();

    break;
    case 107:
     procedure("+");
      break;
      case 109:
     procedure("-");
      break;
       case 106:
     procedure("*");
      break;
       case 111:
     procedure("/");
      break;

   }
}
function time_clean(){ //Сброс значения после 10 сек. ожидания 
clearTimeout(timerId);
 timerId = setTimeout(clean2 , 10000);
}
