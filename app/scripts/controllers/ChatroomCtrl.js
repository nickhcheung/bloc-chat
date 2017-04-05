(function(){
  function ChatroomCtrl(Room, Message){
    this.currentRoom = Room.getCurrentRoom();
    this.messages = Message.getByRoomId(Room.currentRoom);
    this.currentRoomName = Room.currentRoomName;
  }

  angular
    .module("blocChat")
    .controller("ChatroomCtrl", ["Room", "Message", ChatroomCtrl]);
})();
