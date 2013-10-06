function latter_value(l){
switch (l)
{
case "ا": return 1;
case "ب": return 2 ;
case "ج": return 3 ;
case "د": return 4;
case "ه": return 5;
case "و": return 6;
case "ز": return 7;
case "ح": return 8;
case "ط": return 9;
case "ي": return 10;
case "ك": return 20;
case "ل": return 30;
case "م": return 40;
case "ن": return 50;
case "س": return 60;
case "ع": return 70;
case "ف": return 80;
case "ص": return 90;
case "ق": return 100;
case "ر": return 200;
case "ش": return 300;
case "ت": return 400;
case "ث": return 500;
case "خ": return 600;
case "ذ": return 700;
case "ض": return 800;
case "ظ": return 900;
case "غ": return 1000;
case "ؤ": return 6;
case "ئ": return 10;
case "أ": return 1;
case "ء": return 0;
case "ة": return 5;
case " ": return 0;
default: return 1;
}
}
function count_name(name)
{ var arr=0;
for(var i=0;i<name.length;i++)
{
arr+=latter_value(name[i]);
}
return arr;
}
function count_all(){
	f=document.forms[0];
	x=count_name(f.elements['name1'].value);
	y=count_name(f.elements['mother1'].value);
	
	
var n1=(x);
while (n1>9) {n1=n1-9}
var m1=(y);
while (m1>9) {m1=m1-9}


eqtResult='';
if (n1==1 && m1==2 ) {eqtResult ="إن الاسم الأول يغلب  الاسم الثاني" }
else if (n1==1 && m1==3 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==1 && m1==4 ) {eqtResult ="إن الاسم الأول يغلب  الاسم الثاني" }
else if (n1==1 && m1==5 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if ( n1==1 && m1==6 ) {eqtResult ="إن الاسم الأول يغلب  الاسم الثاني" }
else if (n1==1 && m1==7 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==1 && m1==8 ) {eqtResult ="إن الاسم الأول يغلب  الاسم الثاني" }
else if (n1==1 && m1==9 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }


else if (n1==2 && m1==1 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==2 && m1==3 ) {eqtResult ="إن الاسم الأول  يغلب  الاسم الثاني" }
else if (n1==2 && m1==4 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==2 && m1==5 ) {eqtResult ="إن الاسم الأول  يغلب  الاسم الثاني" }
else if (n1==2 && m1==6 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==2 && m1==7 ) {eqtResult ="إن الاسم الأول  يغلب  الاسم الثاني" }
else if (n1==2 && m1==8 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==2 && m1==9 ) {eqtResult ="إن الاسم الأول  يغلب  الاسم الثاني" }

else if (n1==3 && m1==2 ) {eqtResult ="إن الاسم الثاني  يغلب  الاسم الأول " }
else if (n1==3 && m1==1 ) {eqtResult ="إن الاسم الأول  يغلب  الاسم الثاني" }
 else if (n1==3 && m1==4 ) {eqtResult ="إن الاسم الأول يغلب  الاسم الثاني" }
else if (n1==3 && m1==5 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==3 && m1==6 ) {eqtResult ="إن الاسم الأول يغلب  الاسم الثاني" }
else if (n1==3 && m1==7 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==3 && m1==8 ) {eqtResult ="إن الاسم الأول يغلب  الاسم الثاني" }
else if (n1==3 && m1==9 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }


else if (n1==4 && m1==1 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==4 && m1==2 ) {eqtResult ="إن الاسم الأول  يغلب  الاسم الثاني" }
else if (n1==4 && m1==3 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==4 && m1==5 ) {eqtResult ="إن الاسم الأول  يغلب  الاسم الثاني" }
else if (n1==4 && m1==6 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==4 && m1==7 ) {eqtResult ="إن الاسم الأول  يغلب  الاسم الثاني" }
else if (n1==4 && m1==8 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==4 && m1==9 ) {eqtResult ="إن الاسم الأول  يغلب  الاسم الثاني" }

else if (n1==5 && m1==1 ) {eqtResult ="إن الاسم الأول يغلب  الاسم الثاني" }
else if (n1==5 && m1==2 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==5 && m1==3 ) {eqtResult ="إن الاسم الأول يغلب  الاسم الثاني" }
else if (n1==5 && m1==4 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==5 && m1==6 ) {eqtResult ="إن الاسم الأول يغلب  الاسم الثاني" }
else if (n1==5 && m1==7 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==5 && m1==8 ) {eqtResult ="إن الاسم الأول يغلب  الاسم الثاني" }
else if (n1==5 && m1==9 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }


else if (n1==6 && m1==1 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==6 && m1==2 ) {eqtResult ="إن الاسم الأول  يغلب  الاسم الثاني" }
else if (n1==6 && m1==3 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==6 && m1==4 ) {eqtResult ="إن الاسم الأول  يغلب  الاسم الثاني" }
else if (n1==6 && m1==5 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==6 && m1==7 ) {eqtResult ="إن الاسم الأول  يغلب  الاسم الثاني" }
else if (n1==6 && m1==8 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==6 && m1==9 ) {eqtResult ="إن الاسم الأول  يغلب  الاسم الثاني" }

else if (n1==7 && m1==1 ) {eqtResult ="إن الاسم الأول يغلب  الاسم الثاني" }
else if (n1==7 && m1==2 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==7 && m1==3 ) {eqtResult ="إن الاسم الأول يغلب  الاسم الثاني" }
else if (n1==7 && m1==4 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==7 && m1==5 ) {eqtResult ="إن الاسم الأول يغلب  الاسم الثاني" }
else if (n1==7 && m1==6 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==7 && m1==8 ) {eqtResult ="إن الاسم الأول يغلب  الاسم الثاني" }
else if (n1==7 && m1==9 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }



else if (n1==8 && m1==1 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==8 && m1==2 ) {eqtResult ="إن الاسم الأول  يغلب  الاسم الثاني" }
else if (n1==8 && m1==3 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==8 && m1==4 ) {eqtResult ="إن الاسم الأول  يغلب  الاسم الثاني" }
else if (n1==8 && m1==5 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==8 && m1==6 ) {eqtResult ="إن الاسم الأول  يغلب  الاسم الثاني" }
else if (n1==8 && m1==7 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==8 && m1==9 ) {eqtResult ="إن الاسم الأول  يغلب  الاسم الثاني" }

else if (n1==9 && m1==1 ) {eqtResult ="إن الاسم الأول يغلب  الاسم الثاني" }
else if (n1==9 && m1==2 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==9 && m1==3 ) {eqtResult ="إن الاسم الأول يغلب  الاسم الثاني" }
else if (n1==9 && m1==4 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==9 && m1==5 ) {eqtResult ="إن الاسم الأول يغلب  الاسم الثاني" }
else if (n1==9 && m1==6 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }
else if (n1==9 && m1==7 ) {eqtResult ="إن الاسم الأول يغلب  الاسم الثاني" }
else if (n1==9 && m1==8 ) {eqtResult ="إن الاسم الثاني يغلب  الاسم الأول " }

else if (n1==m1) {eqtResult ="إن الإثنان في حالة تعادل يربح من لديه قوة رغبة اكثر  الآخر"}



$('#Name').html(eqtResult);

}