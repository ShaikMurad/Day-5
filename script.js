// // // Question : (1)
// // // a) Print odd numbers in an array
// // ________________________________________
// Normal function :

var arr = [12,13,14,15,16];
var result =[];
function odd(arr){
for (var i=0; i<arr.length; i++){
if(arr[i]%2!=0){
    result.push(arr[i]);
}
}
 return result
}
console.log(odd(arr));
// -------------------------------------
// anonymous function :
var arr = [12,13,14,15,17,19,21]
var result = [];
var odd = function (arr){
    for (var i=0; i<arr.length; i++){
        if(arr[i]%2!=0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(odd(arr));
// _______________________________________________________________
// b)Convert all the strings to title caps in a string array
// anonymous function :

  function titleCase(str){
    str = str.toLowerCase().split(' ');
    for (var i=0; i<str.length; i++){
        str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1)
    }
    return str.join(' ')

}
console.log(titleCase("murad cherry"));

// IIFE :

(function (string) {
    var sent = string.toLowerCase().split(" ");
    for(var i = 0; i< sent.length; i++){
       sent[i] = sent[i][0].toUpperCase() + sent[i].slice(1);
    }
 sent.join(" ");
 var res="";
 for(let i=0;i<sent.length-1;i++)
 {
     res+=sent[i]+" "
 }
 res+=sent[sent.length-1]
 console.log(res);
 }) ("murad cherry");
// ___________________________________________________________________________________-

// C)Sum of all numbers in an array
// anonymous function :

var sum = function(a){
var res = 0;
for(var i=0; i<a.length; i++){
  
  res+=a[i]
  }
  return res;
  
  }
  console.log(sum([1,2,3,4,5]));

//   IIFE :
    (function(a){
    var  res=0;
    for(i=0;i<a.length;i++)
    {
            res+=a[i]
    }
    console.log(res);
})([1,2,3,4,5]);
// ----------------------------------------------------------
// d)Return all the prime numbers in an array
// anonymous function :

var num = function(a){
    a=a.filter((ele)=>{
        for (var i=2; i<=Math.sqrt(ele);i++){
            if(ele%i===0)return false;
        }
        return true;
    })
    return a;
}
console.log(num([2,3,4,5,6,7,8,9,19]));;

// IIFE:
(function(a){
    var  res="";
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            res+=a[i]+" "
        }
    }
    console.log(res);
//     ________________________________________________________________________________
//  E)
 
var palind=function(a){
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
        
        for(j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" "
        }
        res="";
    }
    return ans;
 
}
console.log(palind([1,11,343,200,798,80108,8008,999,7171,700007]))
// _______________________________________________________________
// F)
var arr=function(a,b){
    var c=[];
    var n=a.length;
    var p=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }
    
     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k])
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(b[m])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
     return med;
    
}
console.log(arr([1,2,3,7],[4,5,6,8]));
// ________________________________________________________________________________
// G)
var arr=function(a){
    var b=[];
    var n=a.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(a[i]===a[j])
            {
                delete a[j]
            }
        }
    }
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%10===Math.floor(a[i]%10))
        {
            b.push(a[i])
        }
    }
    let c=""
    for(let i=0;i<b.length-1;i++)
     {
         c+=b[i]+" ";
    }
    c+=b[b.length-1];
     return c;
    
}
console.log(arr([1,1,2,1,2,3,3,3,4,3,3,3,3,2,2,2]));
// -_______________________________________________________________
// H)

var rotate = function (a,k){
  for (var i=0; i<k; i++){
    a.unshift(a.pop())
    }
    return a;
  }
  
  console.log(rotate([1,2,3,4,5],3));
//   _______________________________________________________________

//   Question 3):

//   A)Print odd numbers in an array

var odd = [12,13,14,15,17,19,21];
var res = odd.filter(ele=>ele%2!=0)
console.log(res);
// _______________________________________________________________
// B) Convert all the strings to title caps in a string array

  function titleCase(str){
    str = str.toLowerCase().split(' ');
    for (var i=0; i<str.length; i++){
        str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1)
    }
    return str.join(' ')

}
console.log(titleCase("murad cherry"));
// ________________________________________________________________________________
// C)Sum of all numbers in an array

var sum = [1,2,3,4,5];
var res = sum.reduce((acc,cv)=>acc+cv,0)
console.log(res);
