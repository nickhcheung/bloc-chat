(function(){
  function ModalCtrl(Room, $uibModalInstance, $cookies){

    this.cancel = function(){
      $uibModalInstance.dismiss();
    };

    this.submit = function(name){
      Room.add(name);
      $uibModalInstance.close();
    };

    this.createUsername = function(name){
      if(name !== undefined || name !== null){
        $cookies.put("blocChatCurrentUser", name);
        $uibModalInstance.close();
      } else {
        return;
      };
    };

  }

  angular
    .module("blocChat")
    .controller("ModalCtrl", ["Room", "$uibModalInstance", "$cookies", ModalCtrl]);
})();
