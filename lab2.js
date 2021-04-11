//Lab 02
//Question 02:

function Vehicle (type) {
    this.type = type;

    if (typeof Vehicle.VehicleCount == 'undefined') {
        Vehicle.VehicleCount = 0;
    }
    Vehicle.VehicleCount++;

}

Vehicle.prototype.drive = function () {
    console.log('Vehicle is driving');
};

var vehicleA = new Vehicle('Toyota');
console.log(vehicleA.type);
console.log(vehicleA.VehicleCount);
console.log(vehicleA.VehicleCount);
vehicleA.drive();

function Car (type) {
    Vehicle.call(this.type);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.balanceWheels = function () {
    console.log('Wheels are balanced');
}

var carA = new Car('Prius');
console.log(carA.type);
console.log(carA.VehicleCount);
carA.drive();
carA.balanceWheels();

