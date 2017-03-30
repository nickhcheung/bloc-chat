(function(){
  function SidebarCtrl(Room, $uibModal){
    this.rooms = Room.all;

    this.addRoom = function(){
      $uibModal.open({
        templateUrl: "/templates/modal.html",
        size: "lg",
        keyboard: true,
        controller: "ModalCtrl as modal"
      });
    };
  }

  angular
    .module("blocChat")
    .controller("SidebarCtrl", ["Room", "$uibModal", SidebarCtrl]);
})();
