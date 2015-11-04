var EmployeeWarning = Backbone.Model.extend();

var EmployeeWarningsLists = Backbone.Collection.extend({
  model: EmployeeWarning
});

var EmployeeListItemView = Backbone.View.extend({
  tagName: 'li',

  // initialize:function () {
  //     this.model.on("change", this.render, this);
  //     this.model.on("destroy", this.close, this);
  // },

  render:function () {
      this.$el.html(this.model.get('name'));
      return this;
  }
});

var EmployeeListView = Backbone.View.extend({
  tagName: 'ul',

  // className: 'nav navbar-default',

  render:function () {
    var self = this;
    this.model.each(function (employeeWarning) {
      var employeeListItemView = new EmployeeListItemView({model: employeeWarning});
      self.$el.append(employeeListItemView.render().$el);
    });
  }
});

var employeeWarningsLists = new EmployeeWarningsLists([
  new EmployeeWarning({name: 'Szilvia'})
]);

var employeeListView = new EmployeeListView({ el: '#container', model: employeeWarningsLists});
employeeListView.render();
