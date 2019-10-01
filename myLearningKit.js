
window.onload = () =>{
  for(var i = 1; i <= 30; i++){
    var newBtn = document.createElement("button");
    $(newBtn).attr("id", "btn" + i); // id = "btn1"
    $(newBtn).html("Problem " + i);
    $("nav").append(newBtn);
    var func_name = "f" + i + "()";
    $(newBtn).attr("onclick", func_name);}}


function f1(){
  document.getElementById("js").setAttribute("src","image/f1.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("flowchart").setAttribute("src","image/e1.jpeg");


  document.getElementById("flowchart").setAttribute("style","display:none");
  var w = parseInt(prompt("Enter a number:"));
  var h = parseInt(prompt("enter another number:"));
  var sum = w+h;
  document.getElementById("problem").innerHTML ="the sum of two number is" + sum;
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
}

function f2(){
  document.getElementById("flowchart").setAttribute("src","image/e2.jpeg");


  document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("js").setAttribute("src","image/f2.png");
  document.getElementById("js").setAttribute("style","display:none");
  var w = parseInt(prompt("Enter a number:"));
  var h = parseInt(prompt("enter another number:"));
  var sum = 2*(w+h);
  document.getElementById("problem").innerHTML ="the perimeter of rectangle is" + sum;
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
}

function f3(){
  document.getElementById("flowchart").setAttribute("src","image/e3.jpeg");


  document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("js").setAttribute("src","image/f3.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  var num=parseInt(prompt("enter a number to check if it is positive or not"));
  var i;
  var p=0;
  var n=0;
  while(num!=0){
    if(num>0){
     p = p+1;
    }
    else {
     n=n+1;
    }
    var num=parseInt(prompt("enter a number to check if it is positive or not"));
  }
  document.getElementById("problem").innerHTML = "the number of positive number" + p + "the number of negative number" + n;
}

function f4(){
  document.getElementById("js").setAttribute("src","image/f4.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("flowchart").setAttribute("src","image/e4.jpeg");


  document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  var sum=0;
  for(i=10;i<=30;i++){
    sum=sum+i;
  }
  document.getElementById("problem").innerHTML = "10+11+....+30=" + sum;
}

function f5(){
  document.getElementById("js").setAttribute("src","image/f5.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("flowchart").setAttribute("src","image/e5.jpeg");


  document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  do{
    var num = parseInt(prompt("Enter a number to check whether number of positive number are twice than number of negative number: "));
    if(num > 0){
      p++;
    } else if(num < 0){
      n++;
    }
  } while((num != 0) && (p <= 2*n));
}

function f6(){
  document.getElementById("flowchart").setAttribute("src","image/e3.jpeg");


  document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("js").setAttribute("src","image/f6.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  var num = parseInt(prompt("Enter a number: "));
  var i;
  var answer = "Primes are as follows: ";
  for(i = 2; i <= num; i++){
    if(prime(i) == true){
      answer += i + ", ";
    }
  }
  document.getElementById("problem").innerHTML = answer;
}
function prime(num){
  var flag = true;
  var d = 2;
  while(flag == true && d <= num/2){
    if(num % d == 0){
      flag = false;
    }
    d++;
  }
  return flag;
}

function f7(){
  document.getElementById("flowchart").setAttribute("src","image/e7.jpeg");


  document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("js").setAttribute("src","image/f7.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  var num = parseInt(prompt("enter a positive whole number"));
  var f=0;
  for(i=1;i<=num;i++){
    f=f*i;
  }
  document.getElementById("problem").innerHTML = num + "!=" + f;
}

function f8(){
  document.getElementById("flowchart").setAttribute("src","image/e8.jpeg");


  document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("js").setAttribute("src","image/f8.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  var num = parseInt(prompt("enter a positive number to determine if it is a power of 2 or not"));
  do{
    num = num/2;
  }while(num>1);

  if(num=1){
    document.getElementById("problem").innerHTML = "yes";
  }
  else{
    document.getElementById("problem").innerHTML = "no";
  }
}

function f9(){
  document.getElementById("flowchart").setAttribute("src","image/e9.jpeg");


  document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("js").setAttribute("src","image/f9.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  var num = parseInt(prompt("Please enter a number: "));
  var x = 1, y = 0, z;
  while (num >= 0){
    z = x;
    x = x + y;
    y = z;
    num--;
  }
   document.getElementById("problem").innerHTML="Fibonacci serie of given number is as follows:->"  + y;
}

function f10(){
  document.getElementById("flowchart").setAttribute("src","image/e10.jpeg");


  document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("js").setAttribute("src","image/f10.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  var x = parseInt(prompt("Please enter a first positive number: "));
  var y = parseInt(prompt("Please enter a second postive number: "));
  var sum = 0;
  for (var i = 0; i < Math.abs(y); i++) {
    sum += x;
  }
  document.getElementById("problem").innerHTML="The output of multiplying x and y without using actual multiplication:->" + sum;
  }

function f11(){document.getElementById("flowchart").setAttribute("src","image/e9.jpeg");


document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("js").setAttribute("src","image/f11.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  var result = 'x ';
  for (var i = 0; i < 11; i++) {

    for (var j = 0; j < 11; j++) {

        if(i == 0 && j > 0){
          result += '[' + j + ']';
        }
        else if(j == 0 && i>0){
          result += '[' + i + '] ';
        }
        else if(i>0 && j>0){
        result += (i*j) + ' ';
        }
    }
    result += '\n'
}
  document.getElementById("problem").innerHTML = "multiplication table:" + result;
}

function f12(){document.getElementById("flowchart").setAttribute("src","image/e9.jpeg");


document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("js").setAttribute("src","image/f12.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  var result = sum();
  document.getElementById("problem").innerHTML = "sum  of all numbers less than 100:" + result;
}
function sum(){
  var sum=0;
  for(i=1;i<=100;i++){
    sum=sum+i;
  }
  return sum;
}

function f13(){document.getElementById("flowchart").setAttribute("src","image/e8.jpeg");


document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("js").setAttribute("src","image/f13.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  var result = factorial();
  document.getElementById("problem").innerHTML = "factorial of number between 1 to 10:" + result;
}
function factorial(){
  var f=1;
  for(var i=1;i<=10;i++){
    f=f*i;
  }
  return f;
}

function f14(){document.getElementById("flowchart").setAttribute("src","image/e8.jpeg");


document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("js").setAttribute("src","image/f14.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  var num = parseInt(prompt("Please enter a number: "));
  var d = parseInt(prompt("Please enter a divisor to divide the number with: "));
       var i = 1;
       var p = 0;
       while (p <= num)
       {
           p = d * i;
           i++;
       }
       num= num - (p - d);

     document.getElementById("problem").innerHTML="the result of performing modulo without using the modulo operation" + num;
}

function f15(){document.getElementById("flowchart").setAttribute("src","image/e3.jpeg");


document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("js").setAttribute("src","image/f15.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  var result = sumofprimenumbers();
  document.getElementById("problem").innerHTML = "sum of all prime numbers less than 100:" + result;
}
function sumofprimenumbers(){
  var answer = 0;
  for(var i=1; i <= 100; i++){
    if(prime(i)==true){
      answer += i;
    }
  }
  return answer;
}


function f17(){document.getElementById("flowchart").setAttribute("src","image/e5.jpeg");


document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("js").setAttribute("src","image/f17.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  var outputObj=document.getElementById("problem");

    var a = parseInt(prompt("Please enter a number: ", ""));

    outputObj.innerHTML="number: "+a+"<br><br>";

  document.getElementById("problem").setAttribute("style", "text-align: left; font-size: 11px");

    var i, j;
    for(i = 1; i <= a; i++){
      for(j = 1; j <= i; j++){
        outputObj.innerHTML = outputObj.innerHTML + "XX ";
      }
      outputObj.innerHTML = outputObj.innerHTML + "<br>";
    }

}
function f16(){document.getElementById("flowchart").setAttribute("src","image/e2.jpeg");


document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("js").setAttribute("src","image/f16.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  var a=parseInt(prompt("enter length of rec:"));
  var b=parseInt(prompt("enter width of rec:"));
  var result=recarea(a,b);
  document.getElementById("problem").innerHTML="rectangle area" + result;
}
function recarea(l,w){
  var area;
  area=l*w;
  return area;
}

function f18(){document.getElementById("flowchart").setAttribute("src","image/e4.jpeg");


document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("js").setAttribute("src","image/f18.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  var a=parseInt(prompt("enter height of cone:"));
  var b=parseInt(prompt("enter radius of cone:"));
  var result=conearea(a,b);
  document.getElementById("problem").innerHTML="surface area of cone" + result;
}
function conearea(l,w){
  var area;
  var pi=3.14;
  area=(1/3)*pi*(w*w)*l;
  return area;
}

function f19(){document.getElementById("flowchart").setAttribute("src","image/e12.jpeg");


document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("js").setAttribute("src","image/f19.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
    var a = parseInt(prompt("enter first number: "));
      var b = parseInt(prompt("enter second number: "));
          if (b == 0)
              return 1;

          var ans = a;
          var inc = a;
          var i, j;

          for (i = 1; i < b; i++) {
              for (j = 1; j < a; j++) {
                  ans += inc;
              }
              inc = ans;
          }
          document.getElementById("problem").innerHTML = "a power b without the use of power or multiplication " + ans;
}

function f20(){
  document.getElementById("flowchart").setAttribute("src","image/e11.jpeg");


  document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("js").setAttribute("src","image/f20.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  var a=[[8,3],[2,4]],b=[[1,2],[3,4]];
  var mulres=multiplymatrice(a,b);
  document.getElementById("problem").innerHTML="matrix 1:->" +a+"<br/>"+"matrix 2:->" +b+"<br/>"+"multiplication result:->"+mulres;

  console.table(mulres);
  }

function multiplymatrice(a,b){
  var result=[];

   for (var i = 0; i < a.length; i++) {
       result[i] = [];
       for (var j = 0; j < b[0].length; j++) {
           var sum = 0;
           for (var k = 0; k < a[0].length; k++) {
               sum += a[i][k] * b[k][j];
           }
           result[i][j] = sum;
       }
   }
   return result;
}

function f21(){
  document.getElementById("flowchart").setAttribute("src","image/e1.jpeg");


  document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("js").setAttribute("src","image/f21.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
    var num = parseInt(prompt("Please enter number to get factorial: "));

    var num2 = 0;
    var num3 = 0;
    var a = num;
    var b = num;
    for (var i = a; i > 1; i--)
    {
        for (var j = 1; j <= i-1; j++)
        {
            num3 = b + num2;
            num2 = num3;
          }
        b = num3;
        num2 = 0;
      }
      document.getElementById("problem").innerHTML = "outputting the result of factorial without having to use the multiplication  " + num3;
}

function f22(){
  document.getElementById("flowchart").setAttribute("src","image/e8.jpeg");


  document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("js").setAttribute("src","image/f22.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  for (var i = 1; i < 10; ++i)
 {
   for (var j = 0; j < 10; ++j)
     {
        for (var k = 0; k < 10; ++k)
        {
          var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
          var plus = (i * 100 + j * 10 +  k);
          if (pow == plus)
           {
             console.log(pow);
             document.getElementById("problem").innerHTML="Armstrong number:"+pow;
            }
         }
       }
    }
  }

function f23(){
  document.getElementById("flowchart").setAttribute("src","image/e9.jpeg");


  document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("js").setAttribute("src","image/f23.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  var outputObj=document.getElementById("problem");
  var a = parseInt(prompt("Please enter a number: ", ""));
  outputObj.innerHTML="number: "+a+"<br><br>its digits reversed: ";
  while(a > 0){
      var num = a % 10;
      if(a < 10){
        outputObj.innerHTML += num;
      }
      else{
        outputObj.innerHTML+= num + ", ";
      }
      a = a - num;
      a = a / 10;
    }

}

function f24(){document.getElementById("flowchart").setAttribute("src","image/e13.jpeg");


document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("js").setAttribute("src","image/f24.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  var num=parseInt(prompt("enter a number between 0 and 10:"))
  var words = ["zero", "one", "two"];
  if (num<words.length){
    document.getElementById("problem").innerHTML=words[num];
}
 else
 {
   document.getElementById("problem").innerHTML="more than two";
 }
}

function f25(){
  document.getElementById("flowchart").setAttribute("src","image/e14.jpeg");


  document.getElementById("flowchart").setAttribute("style","display:none");
  document.getElementById("js").setAttribute("src","image/f25.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  var num=Math.random();
  var result=document.getElementById("problem");
  if(num>0.5){
    result.innerHTML=num+"is greater than 0.5";
  }
  else if(num>0.2){
    result.innerHTML=num+"is greater than 0.2";
  }
}
function f27(){
  document.getElementById("js").setAttribute("src","image/f27.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  var result = document.getElementById("problem");
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var myDate = new Date();
var day = myDate.getDay();

result.innerHTML += "<br> Today is " + dayNames[day];
}

function f26(){
  document.getElementById("js").setAttribute("src","image/f26.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  var str="A man, a plan, a canal. Panama";
  var result=palindrome(str);

  var r=document.getElementById("problem");
  r.innerHTML="palindrome of string:"+str+"<br/>"+ result;

}
function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

function f28(){
  document.getElementById("js").setAttribute("src","image/f28.png");
  document.getElementById("js").setAttribute("style","display:none");
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  var greeting=["hello","yo","hi","welcome"];
  var selectone=randomfunc();
  var result=document.getElementById("problem");
  result.innerHTML=greeting[selectone];
}
function randomfunc(){
  var num=Math.floor(Math.random()*4);
  return num;
}

function f29() {


  document.getElementById("problem").innerHTML="<p>A coffee of Italian origin, thicker than coffee brewed by other methods, with crema on top (a foam with a creamy consistency)</p>";


  /* in Ex2, add a getElementById here to get "flowchart" img and
     set its attribute src to espresoMaking.png. Note that espresso images are
	 in sub-folder espresso inside images folder.
  */

  document.getElementById("flowchart").setAttribute("src","image/espressoMaking.png");

  /* in Ex2, add a getElementById here to get "flowchart" img and
     set the display property of its style to none
  */
  document.getElementById("flowchart").setAttribute("style","display:none");


  /* in Ex2, repeat the above two steps for "js" img here
     for the image that is shown for "js", use espresso.jpg
  */
  document.getElementById("js").setAttribute("src","image/espresso.jpg");
  document.getElementById("js").setAttribute("style","display:none");

  document.getElementById("another").setAttribute("src","image/espresso2.jpg");
  document.getElementById("another").setAttribute("style","display:none");

  /* the following two lines get the checkboxes with IDs check1
     and check2, and uncheck them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
}


/* in Ex3, uncomment the following function and complete it*/


function checkUncheck1(){
  if (document.getElementById("flowchart").style.display==="none") {
     document.getElementById("flowchart").style.display="inline";

  }
  else {
    document.getElementById("flowchart").style.display="none";

  }
}

function checkUncheck2(){
  if (document.getElementById("js").style.display==="none") {
     // add a getElementById here to get "js" img and
     // set the display property of its style to "inline"
     document.getElementById("js").style.display="inline";

  }
  else {
     // add a getElementById here to get "js" img and
     // set the display property of its style to "none"
       document.getElementById("js").style.display="none";

  }
}

/* in Ex4, or step 4 of Ex2, you need to create function
   checkUncheck3, which is similar to checkUncheck 1 and 2
*/
function checkUncheck3(){
  if (document.getElementById("another").style.display==="none") {
     // add a getElementById here to get "js" img and
     // set the display property of its style to "inline"
     document.getElementById("another").style.display="inline";

  }
  else {
     // add a getElementById here to get "js" img and
     // set the display property of its style to "none"
       document.getElementById("another").style.display="none";

  }
}


/* in Ex4, create function p02Func similar to p01Func */
function f30(){
  document.getElementById("problem").innerHTML="<p>An espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam (microfoam); usually served with breakfast.</p>";
  document.getElementById("flowchart").setAttribute("src","image/cappuccinoIngredients.png");


  document.getElementById("flowchart").setAttribute("style","display:none");


  document.getElementById("js").setAttribute("src","image/cappuccino.jpg");
  document.getElementById("js").setAttribute("style","display:none");

  document.getElementById("another").setAttribute("src","image/cappuccino2.jpg");
  document.getElementById("another").setAttribute("style","display:none");

  /* the following two lines get the checkboxes with IDs check1
     and check2, and uncheck them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;

}
/* in Ex5, create functions zoomIn() and zoomOut() */
function zoomIn(){
  document.getElementById("flowchart").style.width="200%";
}
function zoomIn(){
  document.getElementById("flowchart").style.width="100%";
}
