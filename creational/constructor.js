function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.toString = function() {
    console.log(`${this.year} ${this.make} ${this.model}`);
}

const jackBandit = new Car('Toyota', 'Corolla', '1993');

jackBandit.toString();