var carManager = (function() {
    return {
        requestInfo: function(model, id) {
            return "The information for " + model + " with ID " + id + " is foobar";
        },
        buyVehicle: function(model, id) {
            return "You have successfully purchased Item " + id + ", a " + model;
        },
        arrangeViewing: function(model, id) {
            return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
        }
    }      
})();

//COMMAND OBJECT (Abstract away so don't have to directly call methods)
carManager.execute = function ( name ) {
    return carManager[name] && carManager[name].apply( carManager, [].slice.call(arguments, 1) );
};

console.log(carManager.execute('buyVehicle', 'Ford Escort', '453543'));
console.log(carManager.execute( "requestInfo", "Ford Mondeo", "54323" ));
console.log(carManager.execute( "requestInfo", "Ford Escort", "34232" ));
console.log(carManager.execute( "arrangeViewing", "Ferrari", "14523" ));
console.log(carManager.execute( "buyVehicle", "Ford Escort", "34232" ));