(function() {
  function Message($firebaseArray) {
    var Message = {};
      
    var ref = firebase.database().ref().child("messages");
    
    Message.getByRoomId = function(id){
        var filteredRef = ref.orderByChild("roomId").equalTo(id);
        return $firebaseArray(filteredRef);
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();