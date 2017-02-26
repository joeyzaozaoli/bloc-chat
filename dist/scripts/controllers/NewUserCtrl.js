(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
            templateUrl: 'newUserModal.html',
            backdrop: 'static',
            controller: function($uibModalInstance){
                this.create = function(userName) {
                    if (userName) {
                        $cookies.put('blocChatCurrentUser', userName);
                        $uibModalInstance.close();
                    }
                };
            },
            controllerAs: 'userChild'
        });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();