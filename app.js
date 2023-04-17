let nombre = prompt("¡Bienvenido al juego! ¿Cómo te llamas?");
let jugadorSalud = 100;
let enemigoSalud = 100;
let ronda = 1;


alert("¡Comienza la batalla!");

while(jugadorSalud > 0 && enemigoSalud > 0){

   alert("Ronda " +ronda)

   let accion = prompt("deseas atacar o defender? (Ingresa 'atacar' o 'defender' )")

   if(accion === 'atacar'){
        let dañoAlJugador = Math.floor(Math.random()*20) +10;
        enemigoSalud -= dañoAlJugador;
        alert("nooooooooooooooooo!!! sos el el mejor!! le causaste el siguiente daño " +dañoAlJugador)
   } else if (accion === 'defender'){
        let defenderSalud = Math.floor(Math.random() * 10) + 5;
        jugadorSalud  += defenderSalud;
        alert("Te defendiste y recuperaste vida" + defenderSalud);
   }
   else  {
    alert("Acción inválida, perdes tu turno.");
   }

   if(enemigoSalud > 0){
    let enemigoAtaco = Math.floor(Math.random() * 15) + 5;
    jugadorSalud -= enemigoAtaco;
    alert("El enemigo te ha causado " + enemigoAtaco + " de daño.");
   }


   alert("Jugador: " + jugadorSalud + " de salud || Enemigo: " + enemigoSalud + " de salud.");
  
   ronda ++;
}

if (jugadorSalud > 0){
    alert(nombre + ", GANASTE!!!!!!!!!!!!")
} else {
    alert("DONDE ESTOY? \u{1F47C}")
}