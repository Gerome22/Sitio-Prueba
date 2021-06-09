//Ruta para poner las imagenes
var pictures = [];
pictures["Jero King"] = "Elpako.png";
pictures["Nico Depre"] = "Nico.png";
pictures["Diegay"] = "Diegosad.png";
pictures["Torito"] = "Pordios.png"
pictures["Peter"] = "Pedro.png"
pictures["Pero Sebastián"] = "Zebgay.png"
pictures["Miguelin"] = "Bien.png"
pictures["Kevin Farc"] = "bien2.png"

// Crear objetos pokemones, para guardarlos en un arreglo :)
var colection = [];
colection.push(new Pakiman("Jero King",950,302*10,"Le sobra","Cola.",110));
colection.push(new Pakiman("Nico Depre",210,63*7,"Deficiente","Convencer a todos de que es buena gente.",130));
colection.push(new Pakiman("Diegay",50,24*3,"Exquisito.","Comprar las verduritas.",187));
colection.push(new Pakiman("Torito",450,620/2,"Grande.","Robar crushes que son amigas del grupo.",107));
colection.push(new Pakiman("Peter",650,340,"Infinito.","Comprar chocorramo a 1 dolar.",27));
colection.push(new Pakiman("Pero Sebastián",750,410,"Estrafalario.","Estudiar para epm.",297));
colection.push(new Pakiman("Miguelin",200,200,"Deficiente.","Escribir bien y guarachar.",300));
colection.push(new Pakiman("Kevin Farc",270,"Su tía.","Excelente.","Pedir la tarea y ser lento.",50));

var buttoncitoSelectAnimal;
  for (var picha of colection) {
  picha.Mostrar();
  buttoncitoSelectAnimal = document.getElementById(picha.Nombre);
  buttoncitoSelectAnimal.addEventListener("click", seleccionaAnimal);
  }

function seleccionaAnimal(evento) {
  alert(" Elegiste: " + evento.target.id);
}
