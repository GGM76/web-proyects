/*let elNumero = Number(prompt("Elige un numero"));
if (!Number.isNaN(elNumero)) {
  console.log("Tu número es la raiz cuadrada de " +
              elNumero * elNumero);
} else{
    console.log("No has elegido un número");
}

let numero = 0;
while (numero < 1001) {
  console.log(numero);
  numero = numero + 2;
}

let resultado = 1;
let contador = 0;
while (contador < 10) {
  resultado *= 2;
  contador = contador + 1;
  console.log(resultado);
}
for (let numero = 0; numero <= 12; numero = numero + 2) {
  console.log(numero);
}
switch (prompt("Como esta el clima?")) {
  case "lluvioso":
    console.log("Recuerda salir con un paraguas.");
    break;
  case "soleado":
    console.log("Vistete con poca ropa.");
  case "nublado":
    console.log("Ve afuera.");
    break;
  default:
    console.log("Tipo de clima desconocido!");
    break;
}

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

for (let numero = 0; numero <10; numero++){
    switch(numero){
        case 0:console.log("Empezamos");break;
        case 1:console.log("#");break;
        case 2:console.log("##");break;
        case 3:console.log("###");break;
        case 4:console.log("####");break;
        case 5:console.log("#####");break;
        case 6:console.log("######");break;
        case 7:console.log("#######");break;
    }
    
}

for(let numero = 1;numero<16;numero++){
    if(numero%3==0 && numero%5==0){
        console.log("FizzBuzz");
        continue;
    }else if(numero%3==0){
        console.log("Fizz");
        continue;
    }else if(numero%5==0){
        console.log("Buzz");
        continue;
    }
    console.log(numero);
}

for (let n = 1; n <= 15; n++) {
    let output = "";
    if (n % 3 == 0 && n % 5 == 0) output += "FizzBuzz";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }
let tab;
  for(let num = 0; num < 8; num++){
    for(tab="";tab.length<8;){
        if((tab.length + num) %2==0){
            tab+=" ";
        }else{
            tab+="#";
        }
    }
    console.log(tab);
  }

let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

const cuadrado = function(x) {
  return x * x;
};

console.log(cuadrado(12));

const hacerSonido = function() {
  console.log("Pling!");
};

hacerSonido();
// → Pling!

const potencia = function(base, exponente) {
  let resultado = 1;
  for (let cuenta = 0; cuenta < exponente; cuenta++) {
    resultado *= base;
  }
  return resultado;
};

console.log(potencia(2, 10));

const dividirEnDos = function(numero) {
  return numero / 2;
};

let numero = 10;
console.log(dividirEnDos(100));
// → 50
console.log(numero);
// → 10

const humus = function(factor) {
  const ingrediente = function(cantidad, unidad, nombre) {
    let cantidadIngrediente = cantidad * factor;
    if (cantidadIngrediente > 1) {
      unidad += "s";
    }
    console.log(`${cantidadIngrediente} ${unidad} ${nombre}`);
  };
  ingrediente(1, "lata", "garbanzos");
  ingrediente(0.25, "taza", "tahini");
  ingrediente(0.25, "taza", "jugo de limón");
  ingrediente(1, "clavo", "ajo");
  ingrediente(2, "cucharada", "aceite de oliva");
  ingrediente(0.5, "cucharadita", "comino");
};

function encontrarSolucion(objetivo) {
  function encontrar(actual, historia) {
    if (actual == objetivo) {console.log("encontrado");
      return historia;
    } else if (actual > objetivo) {
      console.log(historia + "fallido");
      return null;
    } else {console.log(historia + "buscando");
      return encontrar(actual + 5, `(${historia} + 5)`) ||
             encontrar(actual * 3, `(${historia} * 3)`);
    }
  }
  return encontrar(1, "1");
}

console.log(encontrarSolucion(27));
// → (((1 * 3) + 5) * 3)
function alcocharConCeros(numero, amplitud) {
  let string = String(numero);
  while (string.length < amplitud) {
    string = "0" + string;
  }
  return string;
}

function imprimirInventarioGranja(vacas, pollos, cerdos) {
  console.log(`${alcocharConCeros(vacas, 3)} Vacas`);
  console.log(`${alcocharConCeros(pollos, 3)} Pollos`);
  console.log(`${alcocharConCeros(cerdos, 3)} Cerdos`);
}

imprimirInventarioGranja(15, 24, 333);

function min(num1, num2){
  if(num1<num2){
    return num1;
  }else{
    return num2;}
}

console.log(min(0,-10))
function esPar(num){
  console.log(num);
  if(num<0){return null}/*
  else if(num == 1){return false;}
  else if(num == 2){return true;}
  else{esPar(num-=2);}
  switch(num){
    case 1: return false;break;
    case 0: return true;break;
    default: return esPar(num-2);
  }
  
}

console.log(esPar(50));
// → true
console.log(esPar(75));
// → false
console.log(esPar(-1));
// → ??

function contarFs (contar){
 return contarCaracteres(contar,"B");
}


function contarCaracteres(pal,lta){
  let aux=0;
  for(let num=pal.length;num>=0;num--){
    if(pal[num] == lta)
    aux ++;
  }
  return aux;
} 
console.log(contarFs("BBC"));
console.log(contarCaracteres("kakkerlak", "k"));

console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]

console.log("  okey \n ");
console.log("  okey \n ".trim());
// → okey
console.log(String(6).padStart(3, "0"));
// → 006
let oracion = "Los pajaros secretarios se especializan en pisotear";
let palabras = oracion.split(" ");
console.log(palabras);
// → ["Los", "pajaros", "secretarios", "se", "especializan", "en", "pisotear"]
console.log(palabras.join(". "));
// → Los. pajaros. secretarios. se. especializan. en. pisotear
console.log("LA".repeat(3));
// → LALALA

function maximo(...numeros) {
  let resultado = -Infinity;
  for (let numero of numeros) {
    if (numero > resultado) resultado = numero;
  }
  return resultado;
}
console.log(maximo(4, 1, 9, -2));
// → 9

et numeros = [5, 1, 7];
console.log(max(...numeros));
// → 7

let palabras = ["nunca", "entenderas"];
console.log(["tu", ...palabras, "completamente"]);
// → ["tu", "nunca", "entenderas", "completamente"]

function puntoAleatorioEnCirculo(radio) {
  let angulo = Math.random() * 2 * Math.PI;
  return {x: radio * Math.cos(angulo),
          y: radio * Math.sin(angulo)};
}
console.log(puntoAleatorioEnCirculo(2));
// → {x: 0.3667, y: 1.966}

function phi(tabla) {
  return (tabla[3] * tabla[0] - tabla[2] * tabla[1]) /
    Math.sqrt((tabla[2] + tabla[3]) *
              (tabla[0] + tabla[1]) *
              (tabla[1] + tabla[3]) *
              (tabla[0] + tabla[2]));
}

//La funcion de arriba puede ser cambiada a algo asi 
function phi([n00, n01, n10, n11]) {
  return (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) *
              (n01 + n11) * (n00 + n10));
}

let {nombre} = {nombre: "Faraji", edad: 23};
console.log(nombre);
// → Faraji

let string = JSON.stringify({ardilla: false,
  eventos: ["fin de semana"]});
console.log(string);
// → {"ardilla":false,"eventos":["fin de semana"]}
console.log(JSON.parse(string).eventos);
// → ["fin de semana"]
*****************************
function suma(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

function rango(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

//let e = rango(1,20);
//let sum;
//sum = suma(e);
//console.log(sum);
//console.log(suma(rango(1, 10)));
console.log(rango(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(rango(5, 2, -1));
// → [5, 4, 3, 2]
console.log(suma(rango(1, 10)));
// → 55
************************************************
function revertirArray(arr){
  let rev = [];
  for(let cont = arr.length - 1 ;cont>=0;cont--){
    rev.push(arr[cont]);
  }
  return rev;
}

function revertirArrayEnSuLugar (array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}



console.log(revertirArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let valorArray = [1, 2, 3, 4, 5,6,7,8,9];
revertirArrayEnSuLugar(valorArray);
console.log(valorArray);
// → [5, 4, 3, 2, 1]


console.log(arrayALista([10, 20]));
// → {valor: 10, resto: {valor: 20, resto: null}}
console.log(listaAArray(arrayALista([10, 20, 30])));
// → [10, 20, 30]
console.log(preceder(10, preceder(20, null)));
// → {valor: 10, resto: {valor: 20, resto: null}}
console.log(posicion(arrayALista([10, 20, 30]), 1));
// → 20


function igualdadProfunda(obj1, obj2){
  if (obj1 === obj2) return true;
  if (obj1 == null || typeof obj1 != "object" ||
  obj2 == null || typeof obj2 != "object") return false;

  const keys1 = Object.keys(obj1); const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  for (let key of keys1) {
    if (!keys2.includes(key) || !igualdadProfunda(obj1[key], obj2[key])) return false;
  }
  
  return true;
}

//console.log(igualdadProfunda(object1, object2));
let objeto = {aqui: {hay: "un"}, objeto: 2};
console.log(igualdadProfunda(objeto, objeto));
// → true
console.log(igualdadProfunda(objeto, {aqui: 1, object: 2}));
// → false
console.log(igualdadProfunda(objeto, {aqui: {hay: "un"}, objeto: 2}));
// → true

Funcion llamda a funciones con parametros como funcion
function ruidosa(funcion) {
  return (...argumentos) => {
    console.log("llamando con", argumentos);
    let resultado = funcion(...argumentos);
    console.log("llamada con", argumentos, ", retorno", resultado);
    return resultado;
  };
}
ruidosa(Math.min)(1 , 2, 1);
// → llamando con [3, 2, 1]
// → llamada con [3, 2, 1] , retorno 1

function filtrar(array, prueba) {
  let pasaron = [];
  for (let elemento of array) {
    if (prueba(elemento)) {
      pasaron.push(elemento);
    }
  }
  return pasaron;
}

console.log(filtrar(SCRIPTS, codigo => codigo.living));
// → [{name: "Adlam", …}, …]

function ruidosa(funcion) {
  return (...argumentos) => {
    console.log("llamando con", argumentos);
    let resultado = funcion(...argumentos);
    console.log("llamada con", argumentos, ", retorno", resultado);
    return resultado;
  };
}
ruidosa(Math.min)(3, 2, 1);
// → llamando con [3, 2, 1]
// → llamada con [3, 2, 1] , retorno 1
{
  name: "Coptic",
  ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
  direction: "ltr",
  year: -200,
  living: false,
  link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
}
function aMenosQue(prueba, entonces) {
  if (!prueba) entonces();
}

repetir(3, n => {
  aMenosQue(n % 2 == 1, () => {
    console.log(n, "es par");
  });
});
// → 0 es par
// → 2 es par

function filtrar(array, prueba) {
  let pasaron = [];
  for (let elemento of array) {
    if (prueba(elemento)) {
      pasaron.push(elemento);
    }
  }
  return pasaron;
}

console.log(filtrar(SCRIPTS, codigo => codigo.living));
// → [{name: "Adlam", …}, …]

console.log(SCRIPTS.filter(codigo => codigo.direction == "ttb"));
// → [{name: "Mongolian", …}, …]

function map(array, transformar) {
  let mapeados = [];
  for (let elemento of array) {
    mapeados.push(transformar(elemento));
  }
  return mapeados;
}

let codigosDerechaAIzquierda = SCRIPTS.filter(codigo => codigo.direction == "rtl");
console.log(map(codigosDerechaAIzquierda, codigo => codigo.name));
// → ["Adlam", "Arabic", "Imperial Aramaic", …]
function cuentaDeCaracteres(codigo) {
  return codigo.ranges.reduce((cuenta, [desde, hasta]) => {
    return cuenta + (hasta - desde);
  }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
  return cuentaDeCaracteres(a) < cuentaDeCaracteres(b) ? b : a;
}));
// → {name: "Han", …}
function promedio(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(promedio(
  SCRIPTS.filter(codigo => codigo.living).map(codigo => codigo.year))));
// → 1185
console.log(Math.round(promedio(
  SCRIPTS.filter(codigo => !codigo.living).map(codigo => codigo.year))));
// → 209

function codigoCaracter(codigo_caracter) {
  for (let codigo of SCRIPTS) {
    if (codigo.ranges.some(([desde, hasta]) => {
      return codigo_caracter >= desde && codigo_caracter < hasta;
    })) {
      return codigo;
    }
  }
  return null;
}

console.log(codigoCaracter(121));
// → {name: "Latin", …}


function reduce(array, combinar, inicio) {
  let actual = inicio;
  for (let elemento of array) {
    actual = combinar(actual, elemento);
  }
  return actual;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// → 10
// Dos caracteres emoji, caballo y zapato
let caballoZapato = "🐴👟";
console.log(caballoZapato.length);
// → 4
console.log(caballoZapato[0]);
// → ((Medio-carácter inválido))
console.log(caballoZapato.charCodeAt(0));
// → 55357 (Código del medio-carácter)
console.log(caballoZapato.codePointAt(0));
// → 128052 (Código real para emoji de caballo)


let dragonRosa = "🐉🌹";
for (let caracter of dragonRosa) {
  console.log(caracter);
}
// → 🐉
// → 🌹

function contarPor(elementos, nombreGrupo) {
  let cuentas = [];
  for (let elemento of elementos) {
    let nombre = nombreGrupo(elemento);
    let conocido = cuentas.findIndex(c => c.nombre == nombre);
    if (conocido == -1) {
      cuentas.push({nombre, cuenta: 1});
    } else {
      cuentas[conocido].cuenta++;
    }
  }
  return cuentas;
}

console.log(contarPor([1, 2, 3, 4, 5], n => n > 2));
// → [{nombre: false, cuenta: 2}, {nombre: true, cuenta: 3}]

function codigosTexto(texto) {
  let codigos = contarPor(texto, caracter => {
    let codigo = codigoCaracter(caracter.codePointAt(0));
    return codigo ? codigo.name : "ninguno";
  }).filter(({name}) => name != "ninguno");

  let total = codigos.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No se encontraron codigos";

  return codigos.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}

console.log(codigosTexto('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic




let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));
// Tu código aquí.
// → [1, 2, 3, 4, 5, 6]

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

console.log('Ejercicio3');

function cada(array, test) {
  return array.every(test)
}

console.log(cada([1, 3, 5], n => n < 10));
// → true
console.log(cada([2, 4, 16], n => n < 10));
// → false
console.log(cada([], n => n < 10));
// → true

console.log('Ejercicio4');

function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl


function normalizar() {
  console.log(this.coordinadas.map(n => n / this.length)); // Si escribes con function en lugar de flecha no hace valido el programa
}
normalizar.call({coordinadas: [0, 2, 3], length: 5});
// → [0, 0.4, 0.6]


let vacio = {};
console.log(vacio.toString);// Pasa a string el obejto
// → function toString(){…}
console.log(vacio.toString());// Cambia lo del objeto a string pero sigue siendo un objeto 
// → [object Object]

console.log(Object.getPrototypeOf({}) ==
            Object.prototype);
// → true
console.log(Object.getProtfotypeOf(Object.prototype));
// → null

console.log(Object.getPrototypeOf(Math.max) ==
            Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) ==
            Array.prototype);
// → true

let conejoPrototipo = {
  hablar(linea) {
    console.log(`El conejo ${this.tipo} dice '${linea}'`);
  }
};
//let conejoAsesino = Object.create(conejoPrototipo);
let conejoAsesino=crearConejo();
conejoAsesino.tipo = "asesino";
conejoAsesino.hablar("SKREEEE!");
// → El conejo asesino dice 'SKREEEE!'


function crearConejo(tipo) {
  let conejo = Object.create(conejoPrototipo);
  conejo.tipo = tipo;
  return conejo;
}

function Conejo(tipo) {
  this.tipo = tipo;
}
Conejo.prototype.hablar = function(linea) {
  console.log(`El conejo ${this.tipo} dice '${linea}'`);
};

let conejoRaro = new Conejo("raro");

console.log(Object.getPrototypeOf(Conejo) ==
            Function.prototype);
// → true
console.log(Object.getPrototypeOf(conejoRaro) ==
            Conejo.prototype);
// → true


class Conejo {
  constructor(tipo) {
    this.tipo = tipo;
  }
  hablar(linea) {
    console.log(`El conejo ${this.tipo} dice '${linea}'`);
  }
}

let conejoAsesino = new Conejo("asesino");
let conejoNegro = new Conejo("negro");
let objeto = new class { obtenerPalabra() { return "hola"; } };
console.log(objeto.obtenerPalabra());
// → hola

Conejo.prototype.dientes = "pequeños";
console.log(conejoAsesino.dientes);
// → pequeños
conejoAsesino.dientes = "largos, filosos, y sangrientos";
console.log(conejoAsesino.dientes);
// → largos, filosos, y sangrientos
console.log(conejoNegro.dientes);
// → pequeños
console.log(Conejo.prototype.dientes);
// → pequeños
*/

let edades = {
  Boris: 39,
  Liang: 22,
  Júlia: 62
};

console.log(`Júlia tiene ${edades["Júlia"]}`);
// → Júlia tiene 62
console.log("Se conoce la edad de Jack?", "Jack" in edades);
// → Se conoce la edad de Jack? false
console.log("Se conoce la edad de toString?", "toString" in edades);
// → Se conoce la edad de toString? true
