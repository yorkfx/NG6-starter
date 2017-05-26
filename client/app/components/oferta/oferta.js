import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ofertaComponent from './oferta.component';

let ofertaModule = angular.module('oferta', [
  uiRouter
])
  .component('oferta', ofertaComponent)

.name;

export default ofertaModule;
