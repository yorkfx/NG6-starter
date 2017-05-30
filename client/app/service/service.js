
import offersService from './ofers/ofers.service'

const sessionModule = angular.module('app.service', [])
.factory('Offers',offersService)
.factory("Postoffers", Postoffers);

export default sessionModule;
