requirejs.config({
  paths: {
	  'jquery'			:	'vendor/jquery/dist/jquery.min',
	  'snap'			:	'vendor/snap.svg/dist/snap.svg-min'
  },
  shim: {}
});

requirejs([
  'app',
  'snap',
], function(App){

  App.initialize();
});