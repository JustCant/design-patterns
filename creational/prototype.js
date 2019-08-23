//PROTOTYPE
var vehicle = {
    getModel: function() {
        console.log("The model of this vehicle is..." + this.model);
    }
};

//new object using vehicle as its prototype
var car = Object.create(vehicle, {
    "id": {
        value: 5,
        enumerable: true
    },
    "model": {
        value: "Ford",
        enumerable: true
    }
});

vehicle.getModel();
car.getModel();