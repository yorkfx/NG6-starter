
import ofersService from './ofers/ofers.service'

const sessionModule = angular.module('app.service', [])
.factory('ofers',ofersService);
export default sessionModule;
