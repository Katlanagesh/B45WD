//question 1) Class - Movie
        // The class Movie is stated below. An instance of class Movie represents a film.
        // This class has the following three properties:

        // title, which is a String representing the title of the movie
        // studio, which is a String representing the studio that made the movie
        // rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

        // a) Write a constructor for the class Movie, which takes a String representing the title of 
        // the movie, a String representing the studio, and a String representing the rating as its arguments, 
        // and sets the respective class properties to these values.

          // b) The constructor for the class Movie will set 
        // the class property rating to "PG" as default when no rating is provided.
       
     
class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        if(this.rating === undefined)
        {
            this.rating="PG"
        }
    
    }
 
   movieobject(){
    return ({title:this.title,
        studio:this.studio,
        rating:this.rating})

   }
   getPG(arr)
   {
    let data=arr.filter(film=>film.rating=="PG")
     console.log(data.map(b=>b.title))
   }
}
        let Movie1=new Movie("AVENGERS","RKFI","PG-13")
        let Movie2=new Movie("INFINITY WAR","GLOBAL","PG")
        let Movie3=new Movie("END GAME","THEATER","PG-13")

        let arr=[];
        arr.push(Movie1.movieobject())
        arr.push(Movie2.movieobject())
        arr.push(Movie3.movieobject())
        console.log(arr);

        Movie1.getPG(arr);
        
let rating1= new Movie("Casino Royale","Eno Productions","PG13");
console.log(rating1);



// 2)To convert the UML Circle-Class Diagram to Typescript class.
class Circle{
    constructor(centre,radius){
        this.centre=centre;
        this.radius=radius;
        this.color = "Red";
        if (typeof (radius) !== "undefined") {
            this.radius = radius;
        }
        if (typeof (color) !== "undefined") {
            this.color = color;
        }

    }
    
    setRadius(radius){
        this.radius=radius;
    }
    
    getRadius(){
        return this.radius;
    }
    setColor(Color){
        this.Color=Color;
    }
    
    getColor(){
        return this.Color;
    }
    getArea(){
        let Radius= (2 * (Math.PI) * this.radius).toFixed(2);
       return `"Radius of circle is" ${Radius}`

    }
   getCircumference(){
       let circum=(2*Math.PI*this.getRadius()).toFixed(2)
       return `"Circumference of circle is" ${circum}`
   }

}
let circle1=new Circle(5,5);
let circle2=new Circle(0,4);
let circle3=new Circle(3,6);

circle1.setRadius(6);
circle2.setRadius(9);

console.log(circle3.getArea());
console.log(circle3.getCircumference());

circle3.setColor("Blue");
console.log("Color after selection: " + circle3.getColor());


// 3) Write a “person” class to hold all the details.   
class Person{
    constructor(name,age, Dateofbirth, gender, Qualification,contact, email,state ){
        this.name=name;
        this.age=age;
        this.Dateofbirth=Dateofbirth;
        this.gender=gender;
        this.Qualification=Qualification;
        this.contact=contact;
        this.email=email;
        this.state=state;
    }
    details(){
        return(`
        name:${this.name}
        age:${this.age}
        Dateofbirth:${this.Dateofbirth}
        gender:${this.gender}
        Qualification:${this.Qualification}
        contact:${this.contact}
        email:${this.email}
        state:${this.state}`);
    }
}
let Person1=new Person("Katla Nagesh","24","05-04-1999","24","Btech","6300156132","nageshkatla99@gmail.com","Telangana");
console.log(Person1.details());


// 4)write a class to calculate the uber price.
class UberPrice{
    constructor(ubervehicle,Distancetravel){
        this.Distancetravel=Distancetravel;
        this.ubervehicle=ubervehicle;
    }
    uberauto(){
        let BasicPrice=20;
        let Totalprice;
        if(this.Distancetravel<=5)
	 {
	      Totalprice=this.Distancetravel*BasicPrice;
	  }
	else if(this.Distancetravel>5)
	 {
	   Totalprice=3*BasicPrice+(this.Distancetravel-5)*25;
	 }
	else if(this.Distancetravel>10)
	{
	    Totalprice=((3*BasicPrice)+3*25)+(this.Distancetravel-10)*30;
	}
        return Totalprice;
    }
    ubercar(){
        let BasicPrice=20;
        let Totalprice;
        if(this.Distancetravel<=5)
        {
             Totalprice=this.Distancetravel*BasicPrice;
         }
       else if(this.Distancetravel>5)
        {
          Totalprice=5*BasicPrice+(this.Distancetravel-5)*30;
        }
       else if(this.Distancetravel>10)
       {
           Totalprice=((5*BasicPrice)+5*30)+(this.Distancetravel-10)*55
       }
           return Totalprice;
    }
    
}

let uberpricecheck=new UberPrice("ubercar","25");
console.log(uberpricecheck.ubercar());




