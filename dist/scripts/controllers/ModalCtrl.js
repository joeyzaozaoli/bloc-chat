(function() {
     function ModalCtrl($uibModal) {
         this.open = function(){
            $uibModal.open({
                templateUrl: 'myModalContent.html'
            });
         };
     }
 
     angular
         .module('blocChat')
         .controller('ModalCtrl', ['$uibModal', ModalCtrl]);
})();