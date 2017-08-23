//创建自定义指令
(function(angular){
    //创建模板
    var app =angular.module('auto-active',[]);
    //创建自定义指令
    app.directive('autoActive',['$location',function($location){
        return{
            link:function(scope,element,attributes){
                element.on('click',function(){
                    //让当前元素的兄弟元素失去样式
                    element.parent().children().removeClass('active');
                    //让当前元素添加样式
                    element.addClass('active');
                })
                // scope.loce=$location;
                // //监视锚点值的变化
                // scope.$watch('loca.url()',function(now,old){
                //     var hash =element.find('a').attr('href').substr(1);
                //     //startsWith 表示一个字符是否以另一个字符开始
                //     if(now.startsWith(hash)){
                //         //让当前元素的兄弟元素失去样式
                //         element.parent().children().removeClass('active');
                //         //让当前元素添加样式
                //         element.addClass('active');
                //     }
                // })
            }
        }
    }])
})(angular)