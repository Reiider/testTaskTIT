(function(){

angular.module('app')
.directive('dropElem', ['$parse', function($parse) {
						return {
							restrict:'A',
							link: function ($scope, element, attrs){
											element.addClass("draggable");
											element.attr("draggable", true);
											element.on("mousedown", clickToElem);

										  var x, lx, rx, funDrop;

										  function clickToElem(ev){
										  	ev.stopPropagation();
										  	ev.preventDefault();

										  	document.addEventListener("mouseup", dragEnd);
												document.addEventListener("mousemove", drag);

										  	x = ev.clientX;
										  	lx = Number.parseInt(element.css('left'));
										  	rx = 200;
										  	if(isNaN(lx)) lx = 0;	
										  }

										  function drag(ev){
										  	if(ev.pageX - x >= 0){
										  		element.css('left', lx + (ev.pageX - x) + 'px');
										  		if((ev.pageX - x) < 200){
										  			element.css('opacity', (200-(ev.pageX - x))/200);
										  		}
										  	}
										  }

										  function dragEnd(ev){
										  	if(rx < Number.parseInt(element.css('left'))){
										  		funDrop = $parse(element.attr('drop'));
													$scope.$apply(funDrop);
												}
												else{
													element.css('left', 0 + 'px');
													element.css('opacity', 1);
												}
												document.removeEventListener("mouseup", dragEnd);
												document.removeEventListener("mousemove", drag);
										  }
										}
						}
					}]);

})();