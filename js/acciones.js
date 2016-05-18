// JavaScript Document
$(document).ready(function(e) {
    //watchID se refiere a actual
	
	var watchID=null;
	document.addEventListener("deviceready",Dispositivo_Listo,false);
	
	//cuando esta listo el dispositivo
	function Dispositivo_Listo(){
		Comienza();
	}
	
	//empieza la observacion de la aceleracion
	function Comienza(){
		
	//Actualiza ña aceleracion en 2 segundos 
	//
	var opciones={frequenci:2000};
	
	watchID=navigator.accelerometer.watchAcceleration(Correcto, Error,opciones);
	navigator.geolocation.getCurrentPosition(Localiza, ErrorLocalization);
	}
	//Detiene la observacion de la aceleracion
	
	function Detener(){
		if (watchID){
			navigator .accelerometer.clearWatch (watchID);
			watchID=null;
		}
	}
	//correcto:toma captura de la aceleracion
	function Correcto(acceleration) {
	var element=document.getElementById('acelerometro');
	
	element.innerHTML='Aceleracion en X:'+'<br/>'+
	'Aceleracion  en Y:'+acceleration.y+'<br/>'+
	'Intervalo: '+acceleration.timetamp+'<br/>';
	}
	
	//eRROR: falla al obtener la aceleracion 
	function Error(){
		alert('Error!');
	}
	//Exito al localizar
	function Localiza(posicion){
		var element=document.getElementById('geolocalizacion');
		element.innerHTML='Latitud:'+posicion.coords.latitude+'<br/>'+
		'Longitud:' +posicion.coords.longitude +'<br/>'+
		'Precision:' +posicion.coords.accuracy +'<br/>'+
		'Intervalo:'+posicion.timetamp+'<br/>';
	}
	//Error en la geolocalizacion
	function ErrorLocalizacion(error){
		alert('codigo:'+error.code+'\n'+
		'mensaje:'+error.message+'\n');
	}
});
