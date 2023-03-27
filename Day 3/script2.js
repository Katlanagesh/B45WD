//TASK FOR EACH
  let div = document.createElement("div");
document.body.appendChild(div);
   // create a new xmlhttprequest object
let xhr = new XMLHttpRequest();
// configure request
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
// send over the network
xhr.send();
xhr.onload = function () {
    if (xhr.status == 200) {
      let users = JSON.parse(xhr.response);
      
      
      users.forEach((value, index) => {
         let p = document.createElement("p");
         p.innerHTML = `${index + 1} <b>${value.title}</b> : ${value.completed}`;
         div.appendChild(p);
       });
    } else {
      console.log(xhr.status);
    }
  };

//TASK FOR OF
  // let div = document.createElement("div");
  // document.body.appendChild(div);
     // create a new xmlhttprequest object
  let xhr = new XMLHttpRequest();
  // configure request
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
  // send over the network
  xhr.send();
  xhr.onload = function () {
    if (xhr.status == 200){
      //console.log(xhr.response);
      let users = JSON.parse(xhr.response);
      for (var i of users) {
           console.log(i);
            let p = document.createElement("p");
             p.innerHTML = `<b>${i.id}</b> : ${i.title}`;
             div.appendChild(p);
  }
  }else {
      console.log(xhr.status);
  }
  };

//for in
// let div = document.createElement("div");
// document.body.appendChild(div);
//    // create a new xmlhttprequest object
let xhr = new XMLHttpRequest();
// configure request
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
// send over the network
xhr.send();
xhr.onload = function () {
  if (xhr.status == 200){
    //console.log(xhr.response);
     let users = JSON.parse(xhr.response);
//console.log(JSON.parse(xhr.response))
     for (var i in users){
     console.log(i)
    let p = document.createElement("p");
          p.innerText = users[i].completed;
          div.appendChild(p);
}
}else {
    console.log(xhr.status);
 }
};

//for loop
// let div = document.createElement("div");
// document.body.appendChild(div);
//    // create a new xmlhttprequest object
let xhr = new XMLHttpRequest();
// configure request
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
// send over the network
xhr.send();
xhr.onload = function () {
  if (xhr.status == 200){
    //console.log(xhr.response);
     let users = JSON.parse(xhr.response);
//console.log(JSON.parse(xhr.response))
      for (var i = 0; i < users.length; i++){
   let p = document.createElement("p");

   p.innerHTML= `<b>${users[i].title}</b>  ${users[i].id}`
          //p.innerText = users[i].title;
          div.appendChild(p);
}
}else {
    console.log(xhr.status);
 }
};






var json=[
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    }]
  //for loop
    for(var i=0; i<json.length; i++){
        console.log(json[i].id)
        console.log(json[i].title)
        console.log(`${json[i].title}  ${json[i].id}`)
    }
  //for each
    json.forEach((value,index)=>{
        console.log(value.id)
        console.log(value.title)
    })
  // for in
      for(var i in json){
        console.log(json[i].title)
        console.log(`${json[i].title}  ${json[i].id}`)
      }
  // for of
     for(var i of json){
        console.log(i.title)
        console.log(`${i.title}  ${i.id}`)
     }



    let myResume={
        "Introduction": {
          "Name": "NAGESH K",
          "email": "nageshkatla13@gamil.com",
          "phone": 6300156132,
          "degree": "B.Tech",
        "location": {
            "address": "1-177 Kasimdevipet ",
            "postalCode": 506352,
            "city": "Mulugu",
            "state": "Telangana",
            "country": "India"
          },
          "profiles": [
            {
              
              "github":"https://github.com/Katlanagesh/B45WD"
            }
          ]
        },
        "Work": [
          {
            "company": "Cyient Manufacturing pvt ltd",
            "position": "Technical operator",
            "startDate": "2020-08-23",
            "endDate": "2021-12-31",
            "summary": "i am the Operator handling testing the object",
          },
        ],
        "education": [
          {
            "Institution": "Sree Dattha Group Of Institutions",
            "Department": "Mechanical Engineering",
            "StudyType": "fulltime",
            "Start year": 2019,
            "End year": 2022,
            "Gpa": 6.5,
          }
        ],
        "Skills": [
          {
            "name": "javascript",
            "level": "beginer",
            "project": [
              
            ]
          }
        ],
        "languages": [
          {
            "language": "Telugu,Enlish",
          }
        ],
        "intrests": [
            {
              "intrests": "Travelling",
            }
          ]
            
      }
      console.log(myResume);