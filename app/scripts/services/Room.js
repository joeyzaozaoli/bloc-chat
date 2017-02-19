(function() {
  function Room($firebaseArray) {
    var Room = {};
      
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
      
    Room.addRoom = function(){
        rooms.$add({$value:"Room " + (rooms.length+1)});
    }
    Room.all = rooms;
      
    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();