describe('App', function() {
  var app, fakeSongs;

  beforeEach(function() {
    fakeSongs = new Songs([
      {
        artist: 'data',
        url: '/test/testsong.mp3',
        title:'test song'
      },
      {
        artist: 'data',
        url: '/test/testsong2.mp3',
        title:'test song 2'
      }
    ]);
    app = new AppModel({library: fakeSongs});
  });

  xit('creates a song queue on initialize', function(){
    expect(app.get('songQueue')).to.be.an.instanceof(SongQueue);
  });

  xit('sets the current song when a "play" event is fired', function(){
    expect(app.get('currentSong')).to.be.an('object');
    app.get('library').at(0).play();
    expect(app.get('currentSong')).to.equal(app.get('library').at(0));
  });

  xit('queues the next song when an "enqueue" event is fired', function(){
    app.get('library').at(1).enqueue();
    expect(app.get('songQueue').at(0)).to.equal(app.get('library').at(1));
  });

});
