import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Oferta from './oferta/oferta';
import Login from './login/login';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Oferta,
  Login
])

.name;

export default componentModule;
