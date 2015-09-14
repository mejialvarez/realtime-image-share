angular.module('com.htmlxprs.imageShare.directives',[]).directive('browseFile',['$rootScope','USER',function($rootScope,USER){
  return {
    scope:{

    },
    replace:true,
    restrict:'AE',
    link:function(scope,elem,attrs){
      scope.browseFile=function(){
        document.getElementById('browseBtn').click();
      }

      angular.element(document.getElementById('browseBtn')).on('change',function(e){
        var file=e.target.files[0];

        angular.element(document.getElementById('browseBtn')).val('');

        var fileReader=new FileReader();

        fileReader.onload=function(event){
          $rootScope.$broadcast('event:file:selected',{image:event.target.result,sender:USER.name})
        }i

        fileReader.readAsDataURL(file);
      });

    },
    templateUrl:'views/browse-file.html'
  }
}]);