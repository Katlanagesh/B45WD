// How to comapre to JSON have the same properties without order
let obj1 = {name: "person1", age: 5};
let obj2 = {age: 5, name:"person1"};

// console.log(obj1.name)
// console.log(obj2.name)
console.log(obj1.name===obj2.name)
// // console.log(JSON.stringify(obj1) === JSON.stringify(obj2))//false



//using the given url display the flags in console
  let div = document.createElement("div");
document.body.appendChild(div);
   // create a new xmlhttprequest object
let xhr = new XMLHttpRequest();
// configure request
xhr.open("GET", "https://restcountries.com/v3.1/all");
// send over the network
xhr.send();
xhr.onload = function () {
    if (xhr.status == 200) {
      let users = JSON.parse(xhr.response);
      
      
      users.forEach((value, index) => {
         let p = document.createElement("p");
         p.innerText = value.flag;
         div.appendChild(p);
       });
    } else {
      console.log(xhr.status);
    }
  };


//using the given url display the country name, region,subregion,population in console
  let data = document.createElement("div");
document.body.appendChild(data);
   // create a new xmlhttprequest object
let xhr = new XMLHttpRequest();
// configure request
xhr.open("GET", "https://restcountries.com/v3.1/all");
// send over the network
xhr.send();
xhr.onload = function () {
    if (xhr.status == 200) {
      let users = JSON.parse(xhr.response);
      
      
      users.forEach((value, index) => {
         let p = document.createElement("p");
         p.innerHTML =`<b>${value.name.common}</b> : ${value.region} : ${value.subregion} : ${value.population}`;
         div.appendChild(p);
       });
    } else {
      console.log(xhr.status);
    }
  };



