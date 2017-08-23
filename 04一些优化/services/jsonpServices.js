(function(angular){
    //1. 创建模块
    var app =angular.module('myJsonpService',[]);
    //2.创建服务
    app.service('MyService',['$window',function($window){
        this.jsonp = function(url,arg,fn){
            console.log(fn);
        //1.创建script标签
        var scrip =$window.document.createElement('script');
        //2.设置src属性，拼接url及arg为 http?a=b&c=d 格式
        var querystring = '';
        for(var key in arg){
            querystring+=key+'='+arg[key]+'&'
        }
        var funcName = 'myJsonp'+$window.Math.random().toString().substr(2);
        url+='?'+querystring+'callback='+funcName;
        console.log(url);
        
        $window[funcName] = function(data){
            fn(data);   
        }

        scrip.src =url;
        //3.把script标签添加到DOM中去
        $window.document.body.appendChild(scrip)




        }
    }])
})(angular)