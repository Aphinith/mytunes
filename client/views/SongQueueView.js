// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    // set up view with first song model
    
  },


  render: function(){
    SongQueueEntryView.prototype.render();
    // console.log("inside SongQueueView.js, this.$el is ", this.$el)
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

  // render: function() {
  //   initialize: function() {

  //   };
  // }

});
