angular.module('productCatalogApp')
    .controller('productListController', function ($scope, productService) {
        $scope.products = [];
        $scope.loadProducts = function () {
            productService.getProducts().then(function (response) {
                $scope.products = response.data;
            });
        };
         $scope.addProduct = function () {
            var newProduct = {
                name: $scope.productName,
                category: $scope.productCategory,
                price: $scope.productPrice
            };

             productService.addProduct(newProduct).then(function (response) {
                 $scope.products.push(response.data);
            });

             $scope.productName = '';
            $scope.productCategory = '';
            $scope.productPrice = '';
        };
        $scope.loadProducts();

     });
