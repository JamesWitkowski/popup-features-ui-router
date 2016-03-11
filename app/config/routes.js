app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
      .state('home', {
         url: '/home',
         templateUrl: 'app/home/home.html',
         
      })
      .state('view2', {
         url: '/banana',
         template: '<h1>HELLO FROM CHIM CHIM</h1> <a ui-sref="home">GO BACK</a> <a ui-sref="albums">GO to albums</a>' 
      })
})