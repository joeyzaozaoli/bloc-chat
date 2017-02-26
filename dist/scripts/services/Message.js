(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
      
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    
    Message.getByRoomId = function(id){
        var filteredRef = ref.orderByChild("roomId").equalTo(id);
        return $firebaseArray(filteredRef);
    };
      
    Message.send = function(msg, id){
        messages.$add({
            content: msg, 
            roomId: id,
            sentAt: Date(),
            username: $cookies.get('blocChatCurrentUser')
        });
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();