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