(function() {
     function HomeCtrl(Room, Message) {
         this.rooms = Room.all;
         this.currentRoom = null;
         this.currentMessages = null;
         this.setCurrentRoom = function(room) {
             this.currentRoom = room;
             this.currentMessages = Message.getByRoomId(room.$id);
         };
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();