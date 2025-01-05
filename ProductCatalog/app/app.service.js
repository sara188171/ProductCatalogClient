angular.module('productCatalogApp')
    .constant('API_CONFIG', {
        baseUrl: 'https://localhost:7055/api/'
    })
    .service('productService', ['$http', 'API_CONFIG', function ($http, API_CONFIG) {
        var apiUrl = API_CONFIG.baseUrl + 'Products';

        this.getProducts = function () {
            return $http.get(apiUrl)
                .then(response => response)
                .catch(error => {
                    console.error('Error fetching products:', error);
                    throw error;
                });
        };

        this.addProduct = function (product) {
            return $http.post(apiUrl, product)
                .then(response => response)
                .catch(error => {
                    console.error('Error adding product:', error);
                    throw error;
                });
        };
    }]);
