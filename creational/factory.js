function Car(options) {
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "silver";
}

function Truck(options) {
    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
}

function VehicleFactory() {}

VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createVehicle = function(options) {
    switch(options.vehicleType) {
        case "car":
            this.vehicleClass = Car;
            break;
        case "truck":
            this.vehicleClass = Truck;
            break;
    }

    return new this.vehicleClass(options);
};

var carFactory = new VehicleFactory();

var car = carFactory.createVehicle({
    vehicleType: "car",
    color: "yellow",
    doors: 6
});

var truckFactory = new VehicleFactory();

var truck = truckFactory.createVehicle({
    vehicleType: "truck",
    color: "green",
    doors: 4
});

console.log(car instanceof Car, car);

console.log(truck instanceof Truck, truck);