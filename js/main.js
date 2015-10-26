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

// var Backbone = require('backbone'); // example: backbone is imported
// // Add this!
// if (window.__backboneAgent) {
//   window.__backboneAgent.handleBackbone(Backbone);
// };

var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({
  events: {
    'click': 'onClick',
    'click .bookmark': 'onClickBookmark',
  },

  onClick: function () {
    console.log('Listen Clicked');
  },
  onClickBookmark: function (e) {
    e.stopPropagation();
    console.log('Bookmark Clicked');
  },

  render: function () {
    this.$el.html(this.model.get('title') + '<button>Listen</button> <button class="bookmark">Bookmark</button>');

    return this;
  }
});

var song = new Song({title: 'Blue in Green'});

var songView = new SongView({ el: '#container', model: song});
songView.render();
