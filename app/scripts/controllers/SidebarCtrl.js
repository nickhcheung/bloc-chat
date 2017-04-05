(function(){
  function SidebarCtrl($state, Room, $uibModal){
    this.rooms = Room.all;

    this.addRoom = function(){
      $uibModal.open({
        templateUrl: "/templates/modal.html",
        size: "lg",
        keyboard: true,
        controller: "ModalCtrl as modal"
      });
    };

    this.setCurrentRoom = function(room){
       Room.setCurrentRoom(room);
    };

    this.setCurrentRoomName = function(room){
       Room.setCurrentRoomName(room);
    };

    //Reloads state in the chatroom view as we click new rooms and change the above attributes :)
    this.reload = function(){
       $state.reload();
    };

  }

  angular
    .module("blocChat")
    .controller("SidebarCtrl", ["$state", "Room", "$uibModal", SidebarCtrl]);
})();
