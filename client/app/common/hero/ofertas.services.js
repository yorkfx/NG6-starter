class OfertasService {

  /**
   * Constructor class OfertasService
   *
   * @param {object} $scope
   */
  constructor($log) {
    'ngInject';

    $log.log('OfertasService');

    this.data = require('./ofertas.json');
  }

  getById(id) {
    return this.data.find((item) => {
      return item.id === id;
    });
  }

}

export default OfertasService;
