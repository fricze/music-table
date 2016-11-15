function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
    .state('Home', {
      url: '/',
      controller: 'HomeCtrl as home',
      templateUrl: 'home.html',
      title: 'Home'
    })
    .state('Music', {
      url: '/music',
      controller: 'MusicCtrl as music',
      templateUrl: 'music.html',
      title: 'Music'
    });

  $urlRouterProvider.otherwise('/');
}

export default OnConfig;
