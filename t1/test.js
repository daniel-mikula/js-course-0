var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Daniel";
myCar.drive = function (){ console.log("now driving");};

myCar.drive();

var myCar2 = {
    maxSpeed: 70,
    driver: "DanielM",
    drive: function(speed, time){ 
       console.log(speed * time);
    }
};

console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);


