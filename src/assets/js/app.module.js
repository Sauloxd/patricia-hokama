var myapp = angular.module('myapp', ['ui.router', 'ngAnimate']);

    myapp.config(
        function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/home");
    
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        reload: true,
        url: "/home",
        templateUrl: "html/home.html"
      })
      .state('contact', {
        reload: true,
        url: "/contact",
        templateUrl: "html/contact.html"
      })
      .state('about', {
        reload: true,
        url: "/about",
        templateUrl: "html/about.html"
      })
      .state('projects', {
        reload: true,
        url: "/projects",
        templateUrl: "html/project/projects.html"
      })

      .state('mooca-nostra', {
        reload: true,
        url: "/projects/mooca-nostra",
        controller: "MoocaNostraController",
        templateUrl: "html/templates/projects-index.html"
      })
      .state('mn-info', {
        reload: true,
        url: "/projects/mooca-nostra/info",
        controller: "MoocaNostraController",
        templateUrl: "html/templates/projects-info.html"
      })
      .state('mn-gallery', {
        reload: true,
        url: "/projects/mooca-nostra/gallery",
        controller: "MoocaNostraController",
        templateUrl: "html/templates/projects-gallery.html"
      })
      .state('mn-extras', {
        reload: true,
        url: "/projects/mooca-nostra/extras",
        controller: "MoocaNostraController",
        templateUrl: "html/templates/projects-extras.html"
      })



      .state('minha-casa', {
        reload: true,
        url: "/projects/minha-casa",
        controller: "MinhaCasaController",
        templateUrl: "html/templates/projects-index.html"
      })
      .state('mc-info', {
        reload: true,
        url: "/projects/minha-casa/info",
        controller: "MinhaCasaController",
        templateUrl: "html/templates/projects-info.html"
      })
      .state('mc-gallery', {
        reload: true,
        url: "/projects/minha-casa/gallery",
        controller: "MinhaCasaController",
        templateUrl: "html/templates/projects-gallery.html"
      })
      .state('mc-extras', {
        reload: true,
        url: "/projects/minha-casa/extras",
        controller: "MinhaCasaController",
        templateUrl: "html/templates/projects-extras.html"
      })



      .state('redesign-dvd', {
        reload: true,
        url: "/projects/redesign-dvd",
        controller: "RedesignController",
        templateUrl: "html/templates/projects-index.html"
      })
      .state('rd-info', {
        reload: true,
        url: "/projects/redesign-dvd/info",
        controller: "RedesignController",
        templateUrl: "html/templates/projects-info.html"
      })
      .state('rd-gallery', {
        reload: true,
        url: "/projects/redesign-dvd/gallery",
        controller: "RedesignController",
        templateUrl: "html/templates/projects-gallery.html"
      })
      .state('rd-extras', {
        reload: true,
        url: "/projects/redesign-dvd/extras",
        controller: "RedesignController",
        templateUrl: "html/templates/projects-extras.html"
      })



    .state('hot-glasses', {
      reload: true,
        url: "/projects/hot-glasses",
        controller: "HotGlassesController",
        templateUrl: "html/templates/projects-index.html"
      })
      .state('hg-info', {
        reload: true,
        url: "/projects/hot-glasses/info",
        controller: "HotGlassesController",
        templateUrl: "html/templates/projects-info.html"
      })
      .state('hg-gallery', {
        reload: true,
        url: "/projects/hot-glasses/gallery",
        controller: "HotGlassesController",
        templateUrl: "html/templates/projects-gallery.html"
      })
      .state('hg-extras', {
        reload: true,
        url: "/projects/hot-glasses/extras",
        controller: "HotGlassesController",
        templateUrl: "html/templates/projects-extras.html"
      })



      .state('bleu', {
        reload: true,
        url: "/projects/bleu-de-channel",
        controller: "BleuDeChannelController",
        templateUrl: "html/templates/projects-index.html"
      })
      .state('bdc-info', {
        reload: true,
        url: "/projects/blue-de-channel/info",
        controller: "BleuDeChannelController",
        templateUrl: "html/templates/projects-info.html"
      })
      .state('bdc-gallery', {
        reload: true,
        url: "/projects/blue-de-channel/gallery",
        controller: "BleuDeChannelController",
        templateUrl: "html/templates/projects-gallery.html"
      })
      .state('bdc-extras', {
        reload: true,
        url: "/projects/blue-de-channel/extras",
        controller: "BleuDeChannelController",
        templateUrl: "html/templates/projects-extras.html"
      })



      .state('lets-play', {
        reload: true,
        url: "/projects/lets-play",
        controller: "LetsPlayController",
        templateUrl: "html/templates/projects-index.html"
      })
      .state('lp-info', {
        reload: true,
        url: "/projects/lets-play/info",
        controller: "LetsPlayController",
        templateUrl: "html/templates/projects-info.html"
      })
      .state('lp-gallery', {
        reload: true,
        url: "/projects/lets-play/gallery",
        controller: "LetsPlayController",
        templateUrl: "html/templates/projects-gallery.html"
      })
      .state('lp-extras', {
        reload: true,
        url: "/projects/lets-play/extras",
        controller: "LetsPlayController",
        templateUrl: "html/templates/projects-extras.html"
      })



      .state('render-mouse', {
        reload: true,
        url: "/projects/render-mouse",
        controller: "MouseController",
        templateUrl: "html/templates/projects-index.html"
      })
      .state('rm-info', {
        reload: true,
        url: "/projects/render/info",
        controller: "MouseController",
        templateUrl: "html/templates/projects-info.html"
      })
      .state('rm-gallery', {
        reload: true,
        url: "/projects/render/gallery",
        controller: "MouseController",
        templateUrl: "html/templates/projects-gallery.html"
      })
      .state('rm-extras', {
        reload: true,
        url: "/projects/render/extras",
        controller: "MouseController",
        templateUrl: "html/templates/projects-extras.html"
      })

;

});