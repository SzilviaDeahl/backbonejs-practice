var Vehicle = Backbone.Model.extend({
  urlRoot: '/api/vehicles',

  validate: function (attrs) {
    if(!attrs.registrationNumber)
      return "Registration number is required";
  },

  start: function () {
    console.log('Vehicle started');
  }
});

var Car = Vehicle.extend({
  start: function () {
    console.log('Car with registration number ' + this.get('registrationNumber') + ' started');
  }
});

var car = new Car({
  registrationNumber: 'XLI887',
  color: 'Blue'
});
car.start();

car.unset('registrationNumber');

car.isValid();
--> checks if car is valid -->

car.validationError;
--> logs error message -->

car.set('registrationNumber', 'XLI885');

if (car.isValid())
console.log('Car is valid');
else
  console.log(car.validationError);

// var Vehicles = Backbone.Collection.extend({
//   model: Vehicle
// });
//
// var vehicles = new Vehicles([
//   new Vehicle({car1: ' registrationNumber = “XLI887”, color = “Blue” '}),
//   new Vehicle({car2: ' registrationNumber = “ZNP123”, color = “Blue” '}),
//   new Vehicle({car3: 'registrationNumber = “XUV456”, color = “Gray”'})
// ]);
//
// console.log(vehicles);
// console.log(vehicles.findWhere({color: 'Blue'}));
