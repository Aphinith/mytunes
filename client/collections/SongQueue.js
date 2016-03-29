// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    //create an empty array to store songs added
    this.storedSongs = [];
  },

  add: function(song){
    console.log('songQueue also invoked with song:', song);
    // check if song to play is only song in queue, if it is -- play it

    //store this song in an array by pushing it into storedSongs array
    this.storedSongs.push(song);
    console.log('this.storedSongs:', this.storedSongs);
    this.playFirst(song);
  },

  playFirst: function(song){
    // console.log('playFirst was invoked');
    // call playerview model's playerview.setSong() with first song
    PlayerView.prototype.setSong(this.storedSongs[0]);
    console.log('this.storedSongs inside SongQueue:', this.storedSongs)
  }

})