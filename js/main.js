// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.


var Song = Backbone.Model.extend({
  initialize: function () {
    console.log('A new song has been created');
  }
});
var Song = Backbone.Model.extend();
var song = new Song({
  title: 'Blue in Green',
  artist: 'Miles Davis',
  publishYear: 1959
});
// song.set('title', 'Blue in Green');
// song.set({
//   artist: 'Miles Davis',
//   publishyear: 1959
// })
