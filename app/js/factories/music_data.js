function GetMusicData($http) {
  'ngInject';

  return () => $http.get('/data/music.json')
}

export default {
  name: 'GetMusicData',
  fn: GetMusicData
};
