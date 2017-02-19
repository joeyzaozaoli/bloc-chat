(function() {
     function ModalCtrl($uibModal) {
        this.open = function(){
            $uibModal.open({
                templateUrl: 'theModal.html',
                controller: function($uibModalInstance, Room){
                    this.create = function () {
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