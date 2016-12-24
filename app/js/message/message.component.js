(function(){

angular.module('app')
.component('messageItem', {
						templateUrl:'./js/message/message.template.html',
						bindings:{
							color:'@',
							message:'<'
						}
					});

})();