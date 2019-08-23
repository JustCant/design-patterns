//Define a simple car constructor
var Car = function(settings) {
    this.model = settings.model || "no model provided";
    this.color = settings.color || "no colour provided";
}

//Mixin 
var Mixin = function () {};

Mixin.prototype = {
    driveForward: function() {
        console.log("drive forward");
    },
    driveBackward: function() {
        console.log("drive backward");
    },
    driveSideways: function() {
        console.log("drive sideways");
    }
};

//Extend an existing object with a method from another
function augment(receivingClass, givingClass) {
    //only provide certain methods
    if(arguments[2]) {
        for(var i = 2, len = arguments.length; i < len; i++) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    } 
    //provide all methods
    else {
        for(var methodName in givingClass.prototype) {
            /*check to make sure the receving class doesn't
            have a method of the same name as the one currently
            being processed*/
            if(!Object.hasOwnProperty.call(receivingClass.prototype, methodName)) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }

            /*Alternatively (check prototype chain as well):
            if (!receivingClass.prototype[methodName]) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
            */
        }
    }
}

//Augment the Car constructor to include "driveForward" and "drivebackward"
augment(Car, Mixin, "driveForward", "driveBackward");

var myCar = new Car({
    model: "Ford Escort",
    color: "blue"
});

myCar.driveForward();
myCar.driveBackward();

/*We can also augment Car to include all function froms our mixin
by not explicitly listing a selection of them
*/
augment(Car, Mixin);

var mySportsCar = new Car({
    model: "Porsche",
    color: "red"
});

mySportsCar.driveSideways();

var Character = function(settings){
    this.name = settings.name;
    this.race = settings.race;
}

var Wizard = () => { }

Wizard.prototype = {
    class: "Wizard"
}

augment(Character, Wizard);

const elrikai = new Character({
    name: "Elrikai",
    race: "Elf"
});

console.log(elrikai.class);