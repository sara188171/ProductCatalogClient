angular.module('productCatalogApp')
    .service('productService', ['$http', function ($http) {
        var apiUrl = 'https://localhost:7055/api/products';

        this.getProducts = function () {
            return $http.get(apiUrl);
        };

        this.addProduct = function (product) {
            return $http.post(apiUrl, product);
        };
    }]);
