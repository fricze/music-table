function SpinnerDirective($document) {
  'ngInject';

  return {
    restrict: 'EA',
    templateUrl: 'directives/spinner.html',
    replace: true,
    link: (_, element) => {
      $document[0].body.appendChild(element[0]);
    }
  };
}

export default {
  name: 'spinnerDirective',
  fn: SpinnerDirective
};
