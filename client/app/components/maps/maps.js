import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mapsComponent from './maps.component';

let mapsModule = angular.module('maps', [
  uiRouter
])

.component('maps', mapsComponent)

.name;

export default mapsModule;
