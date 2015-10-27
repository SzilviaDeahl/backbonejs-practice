// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

// ******************* Initialize Model ******************
// var Song = Backbone.Model.extend({
//   initialize: function () {
//     console.log('A new song has been created');
//   }
// });
// ******************* Initialize Model end **************


// ******************* Setting Attributes ****************
//
// var song = new Song({
//   title: 'Blue in Green',
//   artist: 'Miles Davis',
//   publishYear: 1959
// });

// var Song = Backbone.Model.extend({
//   initialize: function () {
//     console.log('A new song has been created');
//   }
// });

// song.set('title', 'Blue in Green');
// song.set({
//   artist: 'Miles Davis',
//   publishyear: 1959
// })
// ******************* Setting Attributes end ************

// ******************* Validation ************************
// var Song = Backbone.Model.extend({
//   validate: function (attrs){
//     if(!attrs.title)
//       return "Title is required";
//   }
// });
//
// ****************** Validation end *********************

// ******************* Inheritance ***********************

// var Animal = Backbone.Model.extend({
//   walk: function () {
//     console.log('Animal walking..');
//   }
// });
//  var Dog = Animal.extend({
//    walk: function () {
//      console.log('Dog walking..');
//    }
//  });
//  var dog = new Dog();
//
//  dog.walk();
//
//  ***** Using the base method *****
//
//  var Animal = Backbone.Model.extend({
//    walk: function () {
//      console.log('Animal walking..');
//    }
//  });
//   var Dog = Animal.extend({
//     walk: function () {
//       Animal.prototype.walk.apply(this);
//       console.log('Dog walking..');
//     }
//   });
//   var dog = new Dog();
//
//   dog.walk();

  // ****************** Ingeritance end ******************

//   ************** Connecting to the Server *************
//
//   var Song = Backbone.Model.extend({
//     urlRoot: '/api/songs'
//   });
//
// --> GET /api/songs/1 -->
//
//   var song = new Song({id:1});
//    song.fetch();
//
//    song.set('title', 'newTitle');
//    song.save();
//
//  --> PUT /api/songs/1 -->
//
// var song = new Song();
// song.set('title', 'Title');
// song.save();
//
// --> POST api/songs -->
//
// var song - new Song({ id: 1});
//  song.destroy();
//
//  --> Delete api/songs/1 -->
//
//  --> Callbacks -->
//
//  song.fetch({
//    success: function () {},
//    error: function () {}
//  });
//
//  song.destroy({
//    success: function () {},
//    error: function () {}
//  });
//
//  song.save({}, {
//    success: function () {},
//    error: function () {}
//  });
//
//  --> with save you have to pass inan empty object first, to specify which object your updting, then the success and error.
//  If empty object is ommited, success and error wont be executed -->
//
//  *************** Connecting to Server end *******************

// ************** Creating Collections ********************
//
// var Song = Backbone.Model.extend();
//
// var Songs = Backbone.Collection.extend({
//   model: Song
// }); --> creating a collection type -->
//
// var songs = new Songs([
//   new Song({title: 'Song 1'}),
//   new Song({title: 'Song 2'}),
//   new Song({title: 'Song 3'})
// ]);
//
// // --> OR -->
// songs.add(new Song({title: 'Song 4'}));
//
// --> use -->
//
// songs.at(0) --> to get a model from the collection at the specified index-->
//
// --> OR -->
//
// songs.get('c1') --> gets the model using cid to identify which model to get -->
//
// songs.remove(songs.at(0)); --> to remove amodel from a collection  -->
//
// songs.length --> will return the number of models inside the collection -->
//
// ****************** Creating Collections end *******************

// ************** Working with Collections ********************
// Methods to use
//
// songs.add(new Song(), {at: 0}); --> specifies at which location do you want to insert new model -->
// songs.push(new Song()); --> method to use to insert a model at the end of a collection -->
// var lastSong = song.pop() --> removes and returns the model at the end of a collection -->
// var jazzSongs = songs.where({genre: 'Jazz'}) --> method to search the collection ->
// songs.findWhere({genre:'Jazz'}) --> checks the attributes we pass against the models attribute and returns sought after model -->
// songs.filter(function (song) {
//   return song.get('downloads') > 100;
// }); --> we can use filter method for more complicated searching -->
//
// songs.each(function () {
//
// }); --> used to iterate collections -->
//
// ************* Working with Collections end **************

 // ************** Connecting to the Server *****************
 //
 // -->to retrieve a collecion from the server, we need to specify a url and call the fetch method-->
 //
 // var Songs = Backbone.Collection.extend({
 //   model: Song
 //   url: '/api/songs' --> tells backbone where the collecton exists on the server -->
 // });
 //
 // var songs = new Songs;
 // songs.fetch(); --> this will send out a get request to the server to get the collections data (async call)-->
 //  --> Backbone uses jQuery to make AJAX calls -->
 //  songs.fetch({
 //    data: {   -->
 //      page: 2   --> Data hash -->
 //    },   -->
 //    success: function () {},
 //    error: function(){};
 //  }); --> this results in an extra query perimeter that gets sent along with the http get request -->
 //
 //  --> GET api/songs?page=2 -- >
 //
 //  ************** Connecting to the Server ******************

 // **************** Creating Views **********************
 //

 // -when creating VIEWs, always have to create:
 //  -model
 //  -collection (this is a plural word like Cars)
 //  -view of one item, that renders each item in collection as a li
 //    in this view you g=have to have a tagname for li, a render function and maybe an event like click that will trigger another function
 //  -view for the collection (also plural because its multiple items)
 //    inside collection view:
 //    -tagname for ul,
 //    -render function that will iterate through the collection using each function and then inside that each function
 //    create a new variable for the view of one item, like:
 //    render: function () {
 //      ver self = this;
 //      this.model.each(function (car) {
 //        var car = new CarView({model: car});
 //        self.$el.append(car.render().$el);
 //      });
 //    };

 // -then initialize a collection with cars inside and render:
 // var songs = new Songs([
 //   new Song({title: 'Blue in Green'}),
 //   new Song({title: 'So what'}),
 //   new Song({title: 'All Blues'})
 // ]);
 //
 // var songsView = new SongsView({ el: '#songs', model: songs});
 // songsView.render();


 // var Song = Backbone.Model.extend();
 //
 // var Songs = Backbone.Collection.extend({
 //   model: Song
 // });
 //
 // var SongView = Backbone.View.extend({
 //   tagName: 'li',
 //
 //   render: function () {
 //     this.$el.html(this.model.get('title'));
 //     return this;
 //   }
 // });
 //
 // var SongsView = Backbone.View.extend({
 //   render: function () {
 //     var self = this;
 //     this.model.each(function (song) {
 //       var songView = new SongView({ model: song });
 //       self.$el.append(songView.render().$el);
 //     });
 //   }
 // });
 //
 // var songs = new Songs([
 //   new Song({title: 'Blue in Green'}),
 //   new Song({title: 'So what'}),
 //   new Song({title: 'All Blues'})
 // ]);
 //
 // var songsView = new SongsView({ el: '#songs', model: songs});
 // songsView.render();
 //
 // ***************** Creating Views end *******************

// **************** Handling DOM Events *******************
//
// // var Backbone = require('backbone'); // example: backbone is imported
// // // Add this!
// // if (window.__backboneAgent) {
// //   window.__backboneAgent.handleBackbone(Backbone);
// // };
//
// var Song = Backbone.Model.extend();
//
// var SongView = Backbone.View.extend({
//   events: {
//     'click': 'onClick',
//     'click .bookmark': 'onClickBookmark',
//   },
//
//   onClick: function () {
//     console.log('Listen Clicked');
//   },
//   onClickBookmark: function (e) {
//     e.stopPropagation();
//     console.log('Bookmark Clicked');
//   },
//
//   render: function () {
//     this.$el.html(this.model.get('title') + '<button>Listen</button> <button class="bookmark">Bookmark</button>');
//
//     return this;
//   }
// });
//
// var song = new Song({title: 'Blue in Green'});
//
// var songView = new SongView({ el: '#container', model: song});
// songView.render();
//
// ****************** Handling DOM events end ********************

// ***************** Handling Model Events **********************
//
// var Song = Backbone.Model.extend({
//   defaults: {
//     listeners: 0
//   }
// });
//
// var SongView = Backbone.View.extend({
//   initialize: function () {
//     this.model.on('change', this.render, this);
//   },
//   render: function () {
//     this.$el.html(this.model.get('title') + ' - Listeners: ' + this.model.get('listeners'));
//
//     return this;
//   }
// });
//
// var song =  new Song({title: 'Blue in Green'});
//
// var songView = new SongView({ el: '#container', model: song});
// songView.render();
//
// ***************** Handling Model Events end *********************

// **************** Handling Collection Events *******************
//
// var Song = Backbone.Model.extend();
//
// var Songs = Backbone.Collection.extend({
//   model: Song
// });
//
// var SongView = Backbone.View.extend({
//   tagName: 'li',
//
//   render: function () {
//     this.$el.html(this.model.get('title'));
//     this.$el.attr('id', this.model.id);
//     return this;
//   }
// });
//
// var SongsView = Backbone.View.extend({
//   tagName: 'ul',
// --> change div in body to ul tag, and change id to songs instead of container -->
//   initialize: function () {
//     this.model.on('add', this.onSongAdded, this);
//     this.model.on('remove', this.onSongRemoved, this);
//   },
//   onSongAdded: function (song) {
//     var songView = new SongView({ model: song });
//     this.$el.append(songView.render().$el);
//   },
//   onSongRemoved: function (song) {
//     this.$('li#' + song.id).remove();
//   },
//
//   render: function () {
//     var self = this;
//     this.model.each(function (song) {
//       var songView = new SongView({ model: song });
//       self.$el.append(songView.render().$el);
//     });
//   }
// });
//
// var songs = new Songs([
//   new Song({id: 1, title: 'Blue in Green'}),
//   new Song({id: 2, title: 'So what'}),
//   new Song({id: 3, title: 'All Blues'})
// ]);
//
// var songsView = new SongsView({ el: '#songs', model: songs});
// songsView.render();
//
// *************** Handling Collection EVents end ******************

// // **************** Templating ******************
//
// var Song = Backbone.Model.extend();
//
// var SongView = Backbone.View.extend({
//   render: function () {
//     var template = _.template($('#songTemplate').html());
//     var html = template(this.model.toJSON());
//     this.$el.html(html);
//
//     return this;
//   }
// });
//
// var song = new Song({title: 'Blue in Green', plays: 1100});
//
// var songView = new SongView({ el: '#container', model: song});
// songView.render();
// --> insert int index.html: -->
// --> <script id='songTemplate' type='text/html'><%= title %><button>Listen</button></script>
//
// ********************** Templates ********************

// ******************* Events **********************
//
// var person = {
//   name: 'Szilvia',
//
//   walk: function () {
//     this.trigger('walking',
//   {
//     speed: 1,
//     startTime: '8:00'
//   });
//   }
// };
//
// _.extend(person, Backbone.Events);
//
// // to trigger/start an event
// person.on('walking', function (e) {
//   console.log('Person is walking.', e);
// });
// // to unsubscribe from an event
// person.off('walking');

// -events are just containers with data
// -events have no behavior
//
// ****************** Events end ********************

// ******* Create and Event Aggregator to Coordinate Multiple views *****

var Venue = Backbone.Model.extend();

var Venues = Backbone.Collection.extend({
	model: Venue
});

var VenueView = Backbone.View.extend({
	tagName: "li",

  initialize: function (options) {
    this.bus = options.bus;
  },

	events: {
		"click": "onClick",
	},

	onClick: function(){
    this.bus.trigger('venueSelected', this.model);
	},

	render: function(){
		this.$el.html(this.model.get("name"));

		return this;
	}
});

var VenuesView = Backbone.View.extend({
	tagName: "ul",

	id: "venues",

  initialize: function (options) {
    this.bus = options.bus;
  },


	render: function(){
		var self = this;

		this.model.each(function(venue){
			var view = new VenueView({ model: venue, bus: self.bus });
			self.$el.append(view.render().$el);
		});

		return this;
	}
});

var MapView = Backbone.View.extend({
	el: "#map-container",

  initialize: function (options) {
    this.bus = options.bus;

    this.bus.on('venueSelected', this.onVenueSelected, this)
  },

  onVenueSelected: function (venue) {
    this.model = venue;
    this.render();
  },

	render: function(){
		if (this.model)
			this.$("#venue-name").html(this.model.get("name"));

		return this;
	}
});

var bus = _.extend({}, Backbone.Events);

var venues = new Venues([
	new Venue({ name: "30 Mill Espresso" }),
	new Venue({ name: "Platform Espresso" }),
	new Venue({ name: "Mr Foxx" })
	]);

var venuesView = new VenuesView({ model: venues, bus: bus});
$("#venues-container").html(venuesView.render().$el);

var mapView = new MapView({bus: bus});
mapView.render();
