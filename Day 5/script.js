// 1) Print odd numbers in an array
// anonymous

 let array= [8, 19, 5, 6, 14, 9, 13, 15, 21];
let odd=function(){
                  for(var i = 0 ; i< array.length ; i++){
                        if(array[i]%2!=0){
                           console.log(array[i])
                        } 
                   }
                }
                odd(array);
// IIFE
 (function(array){
  for(var i = 0 ; i< array.length ; i++){
             if(array[i]%2!=0){
                console.log(array[i])
             } 
        }
  })(array)




// 2)Convert all the strings to title caps in a string array
// Anonymous fun
let str= ("NAGESH IS  MECHANIC")
let caps =function () {
                  str = str.toLowerCase().split(' ');
                  for (var i = 0; i < str.length; i++) {
                    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                  } 
                  console.log(str.join(' '));
                }
                caps(str)
IIFE
(function (str) {
   str = str.toLowerCase().split(" ");
  for(var i = 0; i< str.length; i++){
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
console.log(str.join(" "));
})
("NAGESH IS  MECHANIC");

 


// 3)Sum of all numbers in an array 
 let array1= [8, 19, 5, 6, 14, 9, 13, 15, 21];
 // Anonymous : 
let add=function(){
   var sum = 0;
   for(var i = 0 ; i< array1.length ; i++){
      sum +=array1[i];
    }
    return sum;
 }
console.log(add(array1))

// // IIFE : 
//-in 86th line array will mention or not mentioned-no problem
(()=>{
var sum = 0;
        for(var i = 0 ; i< array1.length ; i++){
          sum += array1[i];
        }
       console.log(sum);
        
      })(array1)


// 4) Return all the prime numbers in an array
let array2=[8, 19, 5, 6, 14, 9, 13, 15, 21];

// Anonymous : 
  let prime=function(){
                      array2 = array2.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(array2);
                  }
                  prime(array2)

// IIFE : 
(function(){
   array2 = array2.filter((number) => {
for (var i = 2; i <= Math.sqrt(number); i++) {
if (number % i === 0) return false;
}
return true;
});
console.log(array2);
})(array2)


// 5)Return all the palindromes in an array

let arr=['abc', 'car', 'ada', 'racecar', 'cool', 'eye']

function isPalindrome(str){
    return str === str.split("").reverse().join("")
}
function palindromesarray(arr){
    let palindromeArr=[]
    for(let i=0; i< arr.length;i++){
        if(isPalindrome(String(arr[i]))){
            palindromeArr.push(arr[i])
        }
    }
  return(palindromeArr)
}
console.log(palindromesarray(arr))

anonymous
function isPalindrome(str){
    return str === str.split("").reverse().join("")
}
let palindrome =function (){
    let palindromeArr=[]
    for(let i=0; i< arr.length;i++){
        if(isPalindrome(String(arr[i]))){
            palindromeArr.push(arr[i])
        }
    }
  console.log(palindromeArr)
}
palindrome(arr)

IIFE
function isPalindrome(str){
    return str === str.split("").reverse().join("")
}
(function (){
    let palindromeArr=[]
    for(let i=0; i< arr.length;i++){
        if(isPalindrome(String(arr[i]))){
            palindromeArr.push(arr[i])
        }
    }
  console.log(palindromeArr)
})(arr)




// 6)Return median of two sorted arrays of the same size.

let arr1= [2, 13, 17, 30, 45]
let arr2=[1, 12, 15, 26, 38]
   //console.log(arr.concat(arr2))
  var arr3 =(arr1.concat(arr2))
//console.log(arr3.sort((a, b) => a - b))
let arr4= arr3.sort((a, b) => a - b)
let n= arr4.length;
  // untill here same 
  // Anonymous
  let getMedian = function(){
  
  if (n % 2 !== 0){
     console.log((arr4[n / 2])/2)
  }else{
    console.log((parseInt(arr4[Math.floor((n-1)/2)]) + parseInt(arr4[n / 2]))/2);
}
}
getMedian(arr4)

// IIFE
(function (){
  
    if (n % 2 !== 0){
       console.log((arr4[n / 2])/2)
    }else{
      console.log((parseInt(arr4[Math.floor((n-1)/2)]) + parseInt(arr4[n / 2]))/2);
  }
  })(arr4)

// Arrow
  getMedian= ()=>{
  
  if (n % 2 !== 0){
     console.log((arr4[n / 2])/2)
  }else{
    console.log((parseInt(arr4[Math.floor((n-1)/2)]) + parseInt(arr4[n / 2]))/2);
}
}
getMedian(arr4)

// 7)Remove duplicates from an array

let array3=[8, 19, 5, 8, 14, 5, 13, 5, 21];
// single line ans---console.log(Array.from(new Set(array)));
// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.

// Anonymous
let duplicate=function(array3){
                        let dup = [...new Set(array3)];
                        console.log(dup);
                      }
                      duplicate(array3)
                      
  // IIFE                    
         (function(array3){
                        let dup = [...new Set(array3)];
                        console.log(dup);
                      })
                      (array3)
                      
  //Arrow                    
 duplicate=(array3)=>{
                        let dup = [...new Set(array3)];
                        console.log(dup);
                      }
                      duplicate(array3)


// 8) Rotate the array k times
// let arr= [1, 2, 3, 4, 5]
let k=1;
//Anonymous
let rotate = function (arr){
  for(let  i = 0; i < k;i++){
      let temp= arr[0];
      for(let j=0;j<arr.length;j++){
          arr[j]=arr[j+1]
      }
      arr[arr.length-1] = temp
  }
  console.log(arr)
}
rotate(arr)

//IIFE
(function (arr){
  for(let  i = 0; i < k;i++){
      let temp= arr[0];
      for(let j=0;j<arr.length;j++){
          arr[j]=arr[j+1]
      }
      arr[arr.length-1] = temp
  }
  console.log(arr)
})
(arr)

//Arrow
rotate =()=>{
  for(let  i = 0; i < k;i++){
      let temp= arr[0];
      for(let j=0;j<arr.length;j++){
          arr[j]=arr[j+1]
      }
      arr[arr.length-1] = temp
  }
  console.log(arr)
}
rotate(arr)



// Do the below programs in arrow functions.

// Print odd numbers in an array
 let array4= [8, 19, 5, 6, 14, 9, 13, 15, 21];
((array4)=>{
  for(var i = 0 ; i< array4.length ; i++){
                 if(array4[i]%2!=0){
                    console.log(array4[i])
                 } 
            }

})(array4)
/(or)
((array4)=>{
for (i=0;i<array4.length;i++) {
  if (array4[i] % 2 === 1) {
    console.log(array4[i])
  }
}
})(array4)


// Convert all the strings to title caps in a string array
// let str= ("NAGESH IS  MECHANIC")
titleCase = () =>{
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
   }
   return str.join(' ');
   }
   console.log(titleCase(str));  



// Sum of all numbers in an array
//  let array= [8, 19, 5, 6, 14, 9, 13, 15, 21];
sum = ()=>{
   var sum = 0;
        for(var i = 0 ; i< array.length ; i++){
           sum = sum + array[i];
         }
         return sum;
         }
         console.log(sum(array))


// Return all the prime numbers in an array
// let array=[8, 19, 5, 6, 14, 9, 13, 15, 21];
prime = () => {
   array = array.filter((number) => {
for (var i = 2; i <= Math.sqrt(number); i++) {
if (number % i === 0) return false;
}
return true;
});
console.log(array);
}
   prime(array)


// Return all the palindromes in an array
// let arr=['abc', 'car', 'ada', 'racecar', 'cool', 'eye']

function isPalindrome(str){
    return str === str.split("").reverse().join("")
}
 palindrome = ()=>{
    let palindromeArr=[]
    for(let i=0; i< arr.length;i++){
        if(isPalindrome(String(arr[i]))){
            palindromeArr.push(arr[i])
        }
    }
  console.log(palindromeArr)
}
palindrome(arr)