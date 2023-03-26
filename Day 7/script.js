//Get all the countries from Asia continent /region using Filter function

    // let div = document.createElement("div");
    // document.body.appendChild(div);
    //    // create a new xmlhttprequest object
    // let xhr = new XMLHttpRequest();
    // // configure request
    // xhr.open("GET", "https://restcountries.com/v3.1/all");
    // // send over the network
    // xhr.send();
    // xhr.onload = function () {
        
    //       let users = JSON.parse(xhr.response);
    //        const asia = users.filter((element)=>{
    //         if(element.region === 'Asia'){
    //             return element.name
    //         }
    //        })
    //       console.log(asia)
    //     };

 //Get all the countries with population of less than 2 lacs using Filter function
//  let div = document.createElement("div");
//     document.body.appendChild(div);
//     //    create a new xmlhttprequest object
//     let xhr = new XMLHttpRequest();
//     // configure request
//     xhr.open("GET", "https://restcountries.com/v3.1/all");
//     // send over the network
//     xhr.send();
//     xhr.onload = function () {
        
//           let users = JSON.parse(xhr.response);
//            const population = users.filter((element)=>{
            
//                 return element.population<200000;
            
//            })
//           console.log(population)
//         };
        
//Print the following details name, capital, flag using forEach function.

// let xhr = new XMLHttpRequest();
// // configure request
// xhr.open("GET", "https://restcountries.com/v3.1/all");
// // send over the network
// xhr.send();
// xhr.onload = function () {
    
//       let users = JSON.parse(xhr.response);
//         users.forEach((element)=>{
//         console.log(element.name.common, element.capital, element.flag)
//         })
//     };

//Print the total population of countries using reduce function 
// let xhr = new XMLHttpRequest();
//     // configure request
//     xhr.open("GET", "https://restcountries.com/v3.1/all");
//     // send over the network
//     xhr.send();
//     xhr.onload = function () {
//         let users = JSON.parse(xhr.response);
//         const population = users.reduce((value,element)=> 
//         value+element.population, 0)
//           console.log(population)
//         };

//Print the country which use US Dollars as currency.
// let xhr = new XMLHttpRequest();
//     // configure request
//     xhr.open("GET", "https://restcountries.com/v3.1/all");
//     // send over the network
//     xhr.send();
//     xhr.onload = function () {
//         let users = JSON.parse(xhr.response);
        
//     let currency = users.filter((users) =>  {
//     for (let key in users.currencies) {
//         if(users.currencies[key].name === "United States dollar"){
//       return users
//       }
//     }
//     })
//     console.log(currency.length, currency[0].currencies)
// }
        

    // let xhr = new XMLHttpRequest();
    // xhr.open("GET", "https://restcountries.com/v3.1/all");
  
    // xhr.send();
    // xhr.onload = () => {
    //     const data = JSON.parse(xhr.response);
    //     const datas = data
    //       .filter((item) => item?.currencies?.USD)
    //       .map((value) => value.currencies);
    //     console.log( datas);
    //   };

    
  
  
  