(function(){
  function LandingCtrl(Room){
    this.heroTitle = "Welcome to Bloc Chat!";
    this.rooms = Room.all;
  }

  angular
    .module("blocChat")
    .controller("LandingCtrl", ["Room", LandingCtrl]);
})();
