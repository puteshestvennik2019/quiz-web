angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quiz-api-artur.qaalabs.com/';

    return service;
}]);