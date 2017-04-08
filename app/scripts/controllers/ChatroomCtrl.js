(function(){
  function ChatroomCtrl($state, $cookies, Room, Message){
    this.currentRoom = Room.getCurrentRoom();
    this.messages = Message.getByRoomId(Room.currentRoom);
    this.currentRoomName = Room.currentRoomName;

    this.send = function(messageContent){
      var newMessage = {
        roomId: Room.currentRoom,
        username: $cookies.get('blocChatCurrentUser'),
        sentAt: +new Date(),
        content: messageContent
      };
      Message.send(newMessage);
    };
    this.reload = function(){
       $state.reload();
    };

  }

  angular
    .module("blocChat")
    .controller("ChatroomCtrl", ["$state", "$cookies", "Room", "Message", ChatroomCtrl]);
})();
