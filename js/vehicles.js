var Vehicle = Backbone.Model.extend();

var Vehicles = Backbone.Collection.extend({
  model: Vehicle
});

var VehicleView = Backbone.View.extend({
  tagName: 'li',

  events: {
    'click .delete': 'delete',
  },

  delete: function (vehicle) {
    this.remove();
  },

  render: function () {
    this.$el.html(this.model.get('registrationNumber') + '<button class="delete">Delete</button>');
    return this;
  }
});

var VehiclesView = Backbone.View.extend({
  tagName: 'ul',
  render: function () {
    var self = this;
    this.model.each(function (vehicle) {
      var vehicleView = new VehicleView({ model: vehicle});
      self.$el.append(vehicleView.render().$el);
    });
  }
});
// Aggregation
var NewVehicleView = Backbone.View.extend({

  events: {
    'click .add': 'add'
  },

  add: function () {
    this.collection.add();
  },

  render: function () {
    this.$el.append('<input id="foobar" type="text"></input>' + '<button class="add">Add</button>')
  }
});

var newVehiclesView = new NewVehicleView({ el: '#foobar', model: vehicles});
newVehiclesView.render();

var vehicles = new Vehicles([
  new Vehicle({name: 'car1', registrationNumber: 'XLI887'}),
  new Vehicle({name: 'car2', registrationNumber: 'ZNP123'})
]);

var vehiclesView = new VehiclesView({ el: '#vehicles', model: vehicles });
vehiclesView.render();
