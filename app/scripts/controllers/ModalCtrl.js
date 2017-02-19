(function() {
     function ModalCtrl($uibModal, Room) {
        this.open = function(){
            $uibModal.open({
                templateUrl: 'theModal.html',
                controller: function($uibModalInstance, Room){
                    this.ok = function () {
                        $uibModalInstance.close();
                    };
                    this.cancel = function () {
                        $uibModalInstance.dismiss();
                    };
                    this.addRoom = Room.addRoom;
                },
                controllerAs: 'modalChild'
            });
        };
     }

     angular
         .module('blocChat')
         .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
})();