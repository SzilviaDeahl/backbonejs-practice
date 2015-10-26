// car Model
var Car = Backbone.Model.extend();

// cars collection
var Cars = Backbone.Collestion.extend({
  model: Car
});

// view for one car
var CarView = Backbone.View.extend({
  // tagname li needed
  // template if using one
  // initialize: function () {
    // this.render()
  // }
  // render: function () {
    // this.$el.html(this.template(this.model.toJSON()));
  // }
});

// view for cars collection
var CarsView = Backbone.View.extend({
// tagName: ul, because its multiple cars
// loop over all the car objects in cars collection
  // and create a view for each person
// call render for the var objects
// display a collection in html
})
