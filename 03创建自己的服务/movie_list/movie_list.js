(function (angular) {
    //1. 首页模块、
    var app = angular.module('movie_list', ['ngRoute','myJsonpService']);
    //2.路由规则
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/:movieType/:page?', {
                // templateUrl: 'in_theaters/in_theaters.html',
                // controller: 'in_theatersController'
                templateUrl: 'movie_list/movie_list.html',
                controller: 'movie_listController'
            })
    }])
    //3.创建控制器
    app.controller('movie_listController', ['$scope','MyService','$route','$routeParams', function ($scope,MyService,$route,$routeParams) {
        //每页五条
        $scope.pageSize=5;
        //第几页
        $scope.page =($routeParams.page ||"1")-0;
        //从第几条开始
        var start =($scope.page-1)*$scope.pageSize;


       MyService.jsonp('https://api.douban.com/v2/movie/'+$routeParams.movieType,
        {start:start,count:$scope.pageSize},function(data){
            $scope.data=data;
            //根据每页条数计算出总页面
            $scope.totalPage=Math.ceil($scope.data.total/$scope.pageSize);
            $scope.$apply();
            console.log($scope.data);
        })

        //获取指定页的数据
        $scope.getPage=function(nowPage){
            //可以改变锚点中的参数部分
            if(nowPage<=0||nowPage>$scope.totalPage){
                return;
            }
            $route.updateParams({page:nowPage})
        }
    }])

})(angular)