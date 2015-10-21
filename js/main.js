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
