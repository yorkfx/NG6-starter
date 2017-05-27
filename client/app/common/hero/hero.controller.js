class HeroController {
  constructor($log, OfertasService) {
    'ngInject';

    this.name = 'hero';
    let vm = this;

    $log.log('OfertasController');

    vm.ofertas = OfertasService.data;

  }
}

export default HeroController;
