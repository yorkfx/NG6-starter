import offersService from './ofers/ofers.service';

const sessionModule = angular.module('app.service', [])
.factory('Offers',offersService);

export default sessionModule;
