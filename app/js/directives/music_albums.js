function MusicAlbumsDirective() {
  return {
    restrict: 'E',
    templateUrl: 'directives/music_albums.html',
    scope: {
      albums: '<'
    }
  };
}

export default {
  name: 'musicAlbumsDirective',
  fn: MusicAlbumsDirective
};
