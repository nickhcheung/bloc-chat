(function(){
  function Room($firebaseArray){

    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    var currentRoom = null;
    var currentRoomName = null;

    var addRoom = function(room){
      rooms.$add(room);
    };

    var setCurrentRoom = function(room){
      this.currentRoom = room;
    };

    var setCurrentRoomName = function(room){
      this.currentRoomName = room;
    };

    return {
      add: addRoom,
      all: rooms,
      setCurrentRoom: setCurrentRoom,
      setCurrentRoomName: setCurrentRoomName,
      getCurrentRoom: function(){
        return this.currentRoom;
      }
    };
  }

  angular
    .module("blocChat")
    .factory("Room", ["$firebaseArray", Room]);
})();
