(function() {
     function HomeCtrl(Room, Message) {
         this.rooms = Room.all;
         this.setCurrentRoomId = Message.setCurrentRoomId;
         this.messages = Message.messages;
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();