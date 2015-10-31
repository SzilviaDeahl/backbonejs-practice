// car Model
var Car = Backbone.Model.extend();

// cars collection
var Cars = Backbone.Collection.extend({
  model: Car
});

// view for one car
// var CarView = Backbone.View.extend({
//   tagName: 'li',
//
//   initialize: function () {
//     this.render()
//   },
//   render: function () {
//     var template = _.template($('#carTemplate').html());
//     var html = template(this.model.toJSON());
//     this.$el.html(html);
//
//     return this;
//   }
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
  tagName: 'ul',

  render: function () {
    this.model.each(function (car) {
      var carView = new CarView([
        new Car({registrationNumber: 'XLI887'}),
        new Car({registrationNumber: 'ZNP123'}),
      ]);
    })
  },
// tagName: ul, because its multiple cars
// loop over all the car objects in cars collection
  // and create a view for each person
// call render for the var objects
// display a collection in html
});
