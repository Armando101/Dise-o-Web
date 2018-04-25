var eleccion;
var computadora;

eleccion=prompt('Escoje "Piedra" "Papel" "Tijera"');
computadora=Math.round(Math.random()*3);

//1=piedra 2=papel 3=tijera

if (computadora == 0) {
	alert("Ganaste");
}else if (computadora == 1) {
	switch(eleccion) {
		case "Papel":
			alert("La computadora elijio Piedra y tu Papel Felicidades has Ganado");
		break;
		case "Tijera":
			alert("La computadora elijio Piedra y tu Tijera Lo sentimos has perdido");
		break;
		case "Piedra":
			alert("Los dos han elejido piedra, Empate!");
		break;
		default:
			alert("Seleccionaste una opcion invalida");
	}
}else if (computadora==2) {
	switch(eleccion) {
		case "Papel":
			alert("La computadora elijio Papel y tu Papel Empate!");
		break;
		case "Tijera":
			alert("La computadora elijio Papel y tu Tijera Felicidades has Ganado");
		break;
		case "Piedra":
			alert("La computadora elijio Papel y tu Piedra, Has perdido!");
		break;
		default:
			alert("Seleccionaste una opcion invalida");
	}
}else {
	switch(eleccion) {
		case "Papel":
			alert("La computadora elijio Tijera y tu Papel Has perdido");
		break;
		case "Tijera":
			alert("La computadora elijio Tijera y tu Tijera Empate!");
		break;
		case "Piedra":
			alert("La computadora elijio Tijera y tu Piedra, Felicidades Has Ganado!");
		break;
		default:
			alert("Seleccionaste una opcion invalida");
	}
}