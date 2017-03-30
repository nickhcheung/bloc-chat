(function(){
  function Room($firebaseArray){
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    var addRoom = function(room){
      rooms.$add(room);
    };

    return {
      add: addRoom,
      all: rooms
    };
  }

  angular
    .module("blocChat")
    .factory("Room", ["$firebaseArray", Room]);
})();
