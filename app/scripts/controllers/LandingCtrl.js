(function(){
  function LandingCtrl(){
    this.heroTitle = "Welcome to Bloc Chat!";
  }

  angular
    .module("blocChat")
    .controller("LandingCtrl", LandingCtrl);
})();
