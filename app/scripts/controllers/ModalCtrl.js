(function(){
  function ModalCtrl(Room, $uibModalInstance){

    this.cancel = function(){
      $uibModalInstance.dismiss();
    };

    this.submit = function(name){
      Room.add(name);
      $uibModalInstance.close();
    };
  }

  angular
    .module("blocChat")
    .controller("ModalCtrl", ["Room", "$uibModalInstance", ModalCtrl]);
})();
