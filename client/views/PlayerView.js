// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    // console.log('inside PlayerView:');
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    // For some reason this.$el is UNDEFINED!!!
    console.log('testing:', this.$el);
    // Is the 'src' attribute of $el SUPPOSED to be defined, or changed??
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
