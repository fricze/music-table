function SpinnerDirective() {
  return {
    restrict: 'EA',
    templateUrl: 'directives/spinner.html',
    replace: true,
    link: (_, element) => {
      element.parent().css('position', 'relative');
    }
  };
}

export default {
  name: 'spinnerDirective',
  fn: SpinnerDirective
};
