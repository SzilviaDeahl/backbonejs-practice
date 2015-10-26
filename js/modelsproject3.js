// Vehicle model

var Vehicle = Backbone.Model.extend();

// list of Vehicles
var Vehicles = Backbone.Collection.extend({
  model: Vehicle
});

// the view for one vehicle
var VehicleView = Backbone.View.extend({

  tagName: 'li',

  render: function () {
    this.$el.html(this.model.get('registrationNumber'));
    return this;
  }
});

//  view for all vehicles
var VehiclesView = Backbone.View.extend({
  tagName: 'ul',

  render: function () {
    var self = this;
    this.model.each(function (vehicle) {
      var vehicleView = new VehicleView({model: vehicle});
      self.$el.append(vehicleView.render().$el);
    });
  }
});

var vehicles= new Vehicles([
  new Vehicle({name: 'car1', registrationNumber: 'XLI887'}),
  new Vehicle({name: 'car2', registrationNumber: 'ZNP123'})
]);

var vehiclesView = new VehiclesView({ el: '#container', model: vehicles});
vehiclesView.render();
