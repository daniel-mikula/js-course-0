var Car = function(maxSpeed, driver){
    
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){ 
        console.log(speed * time);
    };
    this.logDriver = function(){
        console.log("This driver name is " + this.driver);   
    };

}

var myCar = new Car(70, "Ninja");
var myCar2 = new Car(60, "Robin");
var myCar3 = new Car(30, "Ben");
var myCar4 = new Car(100, "Jinx");

myCar.drive(89,3);
myCar2.logDriver();

var birthday = new Date(1986, 5, 18, 15, 13, 59);
var birthday2 = new Date(1986, 5, 18, 15, 13, 59);


console.log(birthday.getMonth());

console.log(birthday.getFullYear());

console.log(birthday.getDate());

console.log(birthday.getDay());

console.log(birthday.getHours());

console.log(birthday.getTime());

if(birthday.getTime == birthday2.getTime){
    console.log("birthdays are equal");
} else{
    console.log("birthdays are not equal");
}

