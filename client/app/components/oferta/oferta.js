import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ofertaComponent from './oferta.component';

let ofertaModule = oferta.module('oferta', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('oferta', {
      url: '/oferta',
      component: 'oferta'
    });
})

.component('oferta', ofertaComponent)
  
.name;

export default ofertaModule;
