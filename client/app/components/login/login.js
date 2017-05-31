import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularfire from 'angularfire';
import loginComponent from './login.component';

let loginModule = angular.module('login', [
  uiRouter, angularfire
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('login', {
      url: '/login',
      component: 'login'
    });
})


.component('login', loginComponent)

.name;

export default loginModule;
