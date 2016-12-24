(function(){

angular.module('app')
.component('msgContainer', {
						templateUrl:'./js/msgContainer.template.html',
						controller: MsgContainer
					});

	function MsgContainer(){
		var vm = this;
		vm.blue = {};
		vm.red = {};
		vm.green = {};

		vm.blue.list = [];
		vm.blue.doubleList = [];

		vm.red.list = [];
		vm.red.doubleList = [];

		vm.green.list = [];
		vm.green.doubleList = [];

		this.deleteAndShape = deleteAndShape;

		loadLists();
		shape(vm.blue);
		shape(vm.red);
		shape(vm.green);

		function loadLists(){
			var mes = {};

			mes.header = 'Lorem ipsum dolor sit amet';
			mes.id = '654187';
			mes.body = 'Sed ut perspitiatis unde omnis iste natus';
			mes.date = '05 June';
			vm.blue.list.push(mes);

			mes = {};
			mes.header = 'Lorem ipsum dolor sit amet';
			mes.id = '654188';
			mes.body = 'Sed ut perspitiatis unde omnis iste natus';
			mes.date = '05 June';
			vm.blue.list.push(mes);

			mes = {};
			mes.header = 'Lorem ipsum dolor sit amet';
			mes.id = '654189';
			mes.body = 'Sed ut perspitiatis unde omnis iste natus';
			mes.date = '07 June';
			vm.blue.list.push(mes);


			mes = {};
			mes.header = 'But I must explain to you how';
			mes.id = '';
			mes.body = 'To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?';
			mes.date = '08 June';
			vm.red.list.push(mes);

			mes = {};
			mes.header = 'But I must explain to you how';
			mes.id = '';
			mes.body = 'To take a trivial example, which of us ever';
			mes.date = '10 June';
			vm.red.list.push(mes);

			mes = {};
			mes.header = 'But I must explain to you how';
			mes.id = '';
			mes.body = 'To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?';
			mes.date = '12 June';
			vm.red.list.push(mes);

			mes = {};
			mes.header = 'But I must explain to you how';
			mes.id = '';
			mes.body = 'To take a trivial example, which of us ever';
			mes.date = '12 June';
			vm.red.list.push(mes);


			mes = {};
			mes.header = 'At vero eos et accusamus et iusto';
			mes.id = '654190';
			mes.body = 'Et harum quidem rerum facilis est expedita';
			mes.date = '15 June';
			vm.green.list.push(mes);

			mes = {};
			mes.header = 'At vero eos et accusamus et iusto';
			mes.id = '654191';
			mes.body = 'Et harum quidem rerum facilis est expedita';
			mes.date = '16 June';
			vm.green.list.push(mes);
		}

		function deleteAndShape(ind, position, obj){   //position 0 - left, 1 - right
			if(arguments.length === 1){
				shape(arguments[0]);
			}
			else {
				obj.list.splice(ind*2 + position, 1);
				shape(obj);
			}
		}

		function shape(obj){
			var mas = [];
			var elem;
			for(var i = 0; i < obj.list.length; i++){
				elem = {};
				elem.left = obj.list[i];
				i++;
				if(obj.list[i]) elem.right = obj.list[i];
				mas.push(elem);
			}
			obj.doubleList = mas;
		}
	}

})();