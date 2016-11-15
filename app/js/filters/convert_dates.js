function ConvertDatesFilter() {
  const convertDate = date => {
    const [ day, month, year ] = date.split('.');

    return new Date(`${month}.${day}.${year}`);
  };

  return (collection, key) => collection.map(element => {
    element.data = convertDate(element[key]);

    return element;
  });
}

export default {
  name: 'ConvertDatesFilter',
  fn: ConvertDatesFilter
};
