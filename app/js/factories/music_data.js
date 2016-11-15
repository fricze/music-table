const delay = duration => () => new Promise(resolve => {
  setTimeout(() => resolve(), duration);
});

function MusicData($http, $filter) {
  'ngInject';

  const convertDates = $filter('ConvertDatesFilter');
  const orderBy = $filter('orderBy');

  let albums = [];

  const getData = () => $http.get('/data/music.json', { cache: true })
          .then(({ data }) => data)
          .then(albums => convertDates(albums, 'productionDate'))
          .then(value => { albums = value })
  // delay a little, just to show spinner
          .then(delay(3000))
          .then(() => albums);

  return {
    get: getData,
    sortBy: (key, desc = false) => {
      albums = orderBy(albums, element => element[key], desc);
      return albums;
    }
  }
}

export default {
  name: 'MusicData',
  fn: MusicData
};
