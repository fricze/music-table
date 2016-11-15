function MusicCtrl(GetMusicData, $filter) {
  'ngInject';
  const vm = this;

  const convertDates = $filter('ConvertDatesFilter');

  vm.title = 'Music';
  vm.albums = [];

  GetMusicData()
    .then(({ data }) => {
      data = convertDates(data, 'production_date');
      vm.albums = data;
    })
    .catch(
      error => console.error(error)
    );
}

export default {
  name: 'MusicCtrl',
  fn: MusicCtrl
};
