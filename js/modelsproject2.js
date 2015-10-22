var Vehicle = Backbone.Model.extend({
  validate: function (attrs) {
    if(!attrs.registrationNumber)
      return 'Registration number is required';
  },

  urlRoot: '/api/vehicles',

  start: function () {
    console.log("Vehicle started");
  }
});

var Car = Vehicle.extend({
  start: function () {
    console.log('Car with registration number ' + this.get('registrationNumber') + ' started');
  }
});

var car =  new Car({
  registrationNumber: 'XLI228',
  color: 'Black'
});
car.start();

car.unset('registrationNumber');

if (!car.isValid())
  console.log(car.validationError);

car.start();

car.set('registrationNumber', 'abc123');

if (!car.isValid())
  console.log(car.validationError);
  else {
    console.log(car.attributes.color, car.attributes.registrationNumber);
  }

var Cars = Backbone.Collection.extend({
  model: Car
});

var cars = new Cars([
  new Car({registrationNumber: 'XLI887', color: 'Blue'}),
  new Car({registrationNumber: 'ZNP123', color: 'Blue'}),
  new Car({registrationNumber: 'XUV456', color: 'Gray'})
]);

console.log(cars);

var blueCars = cars.where({color: 'Blue'});
console.log(blueCars);

var reg = cars.where({registrationNumber: 'ZNP123'});
console.log(reg);

cars.remove(reg);
console.log(cars);

console.log(cars.toJSON());

var carslist = cars.each({cars});
console.log('hello');
console.log(carslist);
