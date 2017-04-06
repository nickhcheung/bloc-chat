(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: "/templates/newUser.html",
        size: "lg",
        controller: "ModalCtrl as modal",
        //these 2 options lock the modal
        backdrop: "static",
        keyboard: false
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', "$uibModal", BlocChatCookies]);
})();
