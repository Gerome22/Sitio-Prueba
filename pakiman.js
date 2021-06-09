//Clase Pokemon, para poder crear las estadísticas diferentes a cada objeto de esta clase.
class Pakiman {
  constructor(name, life, attack, defense, speed, range) {
    this.imagen = new Image();
    this.Nombre = name;
    this.Vida = life;
    this.Ataque = attack;
    this.Defensa = defense;
    this.Velocidad = speed;
    this.Rango = range;
    this.imagen.src = pictures[this.Nombre];
  }
  Hablar(){
    alert(this.Nombre);
  }

  Mostrar(){

    var newDiv = document.createElement("div");
    var divHeader = document.createElement("h2");
    divHeader.innerHTML = this.Nombre;
    var nextLine = document.createElement("br");
    newDiv.appendChild(this.imagen);
    newDiv.appendChild(divHeader);
    document.body.appendChild(newDiv);
  //Crear JSON para guardar los atributos del Pokemon
  var array = {
    "Vida": this.Vida,
    "Ataque": this.Ataque,
    "Parolismo": this.Defensa,
    "Habilidades": this.Velocidad,
    "Rango": this.Rango
    }

    //Tabla de características de cada Pokemon
  var table = document.createElement("table");
  var tbody = document.createElement("tbody");
    for (var element in array){
      var rowText = "<td>" + element + ": </td>" + "<td>" + array[element] + "</td>";
      var row = document.createElement("tr");
      row.innerHTML = rowText;
      tbody.appendChild(row);
      }
    table.appendChild(tbody);
    newDiv.appendChild(table);

    //Botón para seleccionar Pokemon

  var buttoncito = document.createElement("input");
  buttoncito.setAttribute("type", "buttoncito");
  buttoncito.setAttribute("value", "Elige");
  buttoncito.setAttribute("id", this.Nombre);
  buttoncito.setAttribute("class", "buttonSelect");
  newDiv.appendChild(nextLine);
  newDiv.appendChild(buttoncito);

  }
}
