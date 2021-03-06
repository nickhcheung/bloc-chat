(function(){

  function config($stateProvider, $locationProvider){
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

      $stateProvider
        .state("landing", {
          url: "/",
          controller: "LandingCtrl as landing",
          templateUrl: "/templates/landing.html"
        })
        .state("chatroom", {
          url: "/chatroom",
          controller: "ChatroomCtrl as chatroom",
          templateUrl: "/templates/chatroom.html"
        });
  };

  angular
    .module("blocChat", ["ui.router", "firebase", "ui.bootstrap", "ngCookies", 'luegg.directives'])
    .config(config);
})();
