// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  add: function(song){
    console.log('songQueue also invoked with song:', song);
    // check if song to play is only song in queue, if it is -- play it
    this.playFirst(song);
  },

  playFirst: function(song){
    // console.log('playFirst was invoked');
    // call playerview model's playerview.setSong() with first song
    PlayerView.prototype.setSong(song);
    console.log('')
  }

})