(function() {
     function NewRoomCtrl($uibModal) {
        this.open = function(){
            $uibModal.open({
                templateUrl: 'newRoomModal.html',
                controller: function($uibModalInstance, Room){
                    this.create = function () {
                        $uibModalInstance.close();
                    };
                    this.cancel = function () {
                        $uibModalInstance.dismiss();
                    };
                    this.addRoom = Room.addRoom;
                },
                controllerAs: 'roomChild'
            });
        };
     }

     angular
         .module('blocChat')
         .controller('NewRoomCtrl', ['$uibModal', 'Room', NewRoomCtrl]);
})();