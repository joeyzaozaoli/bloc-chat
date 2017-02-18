(function() {
     function HomeCtrl(Room) {
         this.rooms = Room.all;
         this.addRoom = Room.addRoom;
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', HomeCtrl]);
})();