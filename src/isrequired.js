/*
* isRequired.js v0.6.0
* https://github.com/ytamai/isRequired.js
*
* Copyright 2015 ytamai
* Released under the MIT license
*/

function isRequired(type,test){
  function isNumber(x){
   if(String(typeof(x))!='number' && String(typeof(x))!='string'){
     return false;
   }else{
     return (x==parseFloat(x) && isFinite(x));
   }
  }
 function isValidDate(value,userFormat){
   userFormat=userFormat || 'yyyy/mm/dd';
   var delimiter=/[^mdy]/.exec(userFormat)[0];
   var theFormat=userFormat.split(delimiter);
   var theDate=value.split(delimiter);
   function isDate(date, format) {
     var m,d,y,f;
     for(var i=0; i < format.length; i++) {
       if(/y/.test(format[i])){y=date[i];}
       if(/m/.test(format[i])){m=date[i]-1;}
       if(/d/.test(format[i])){d=date[i];}
     }
     var newDate=new Date(y,m,d);
     if(m>0 && m<13 && y && y.length===4 && d>0 && d<=(new Date(y,m,0)).getDate()){
       return newDate;
     }else{
       return false;
     }
   }
   var result=isDate(theDate,theFormat);
   return result;
 }

 //core
 var typeResult=typeof(test),result;
 switch(typeResult){
   case 'object':
   if(Array.isArray(test)){
     typeResult='array';
   }
   break;
   case 'string':
     if(isNumber(test)){
       typeResult='number';
       result=Number(test);
     }
     if(type==='date'){
       var date=isValidDate(test);
       if(isValidDate(test)){
         typeResult='date';
         result=date;
       }
     }
   break;
 }
 if(typeResult===type){
   return result;
 }else{
    console.error(test+' is '+typeResult;'.');
    return false;
 }
}