import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Oferta from './oferta/oferta';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Oferta
])

.name;

export default componentModule;
