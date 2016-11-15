function MusicAlbumsDirective() {
  const controller = ($scope, $timeout) => {
    $scope.filters = {
      artist: {
        desc: false
      },
      title: {
        desc: false
      },
      productionDate: {
        desc: false
      },
    };

    $scope.sortByInOrder = key => {
      $scope.sortBy(key, $scope.filters[key].desc);
      $scope.filters[key].desc = !$scope.filters[key].desc;
    };

    $scope.show = false;

    $timeout(() => {
      $scope.show = true;
    });

    const unwatchAlbums = $scope.$watch('data.albums', albums => {
      if (albums.length) {
        $scope.show = false;
        unwatchAlbums();
      }
    });
  };
  controller.$inject = ['$scope', '$timeout'];

  return {
    restrict: 'E',
    templateUrl: 'directives/music_albums.html',
    scope: {
      data: '<',
      sortBy: '<'
    },
    controller
  };
}

export default {
  name: 'musicAlbumsDirective',
  fn: MusicAlbumsDirective
};
