function MusicCtrl(MusicData) {
  'ngInject';
  const vm = this;

  vm.title = 'Music';
  vm.data = {
    albums: []
  };

  vm.sortBy = (key, desc) => {
    vm.data.albums = MusicData.sortBy(key, desc);
  };

  MusicData.get()
    .then(data => {
      vm.data.albums = data;
    })
    .catch(
      error => console.error(error)
    );
}

export default {
  name: 'MusicCtrl',
  fn: MusicCtrl
};
