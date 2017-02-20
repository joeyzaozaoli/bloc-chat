(function() {
  function Message($firebaseArray) {
    var Message = {};
      
    var ref = firebase.database().ref().child("messages");
    
    var getByRoomId = function(id){
        var filteredRef = ref.orderByChild("roomId").equalTo(id);
        return $firebaseArray(filteredRef);
    };
    
    Message.currentRoomId = null;
    
    //Problem: The following doesn't seem to work up ng-click. 
    Message.setCurrentRoomId = function(id){
        Message.currentRoomId = id;
    };
    
    Message.messages = getByRoomId(Message.currentRoomId);
    
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();