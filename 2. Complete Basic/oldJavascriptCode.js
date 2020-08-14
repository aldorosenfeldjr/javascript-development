// Rextester e JSBin são duas formas de rodar o código online
// no Rextester usa print
// no JSBin usa console.log

/* Variables
a way to keep track of values and data in our code
assign a value to a name
can change the value unless using constants
we will cover 2 types: 
Numbers (whole or decimal)
Booleans (true/false)
*/

// NUMBERS
var currentHealth = 100; // pode incluir decimais (100.5 por exemplo)
currentHealth = 50; // variáveis podem mudar, essa linha mostra que agora a Health é 50

var maxHealth = 100;
currentHealth = maxHealth; // essas duas linhas estipulam um máximo e que a vida atual é igual a máxima

// BOOLEANS
var isGameOver = false;
isGameOver = true; // reassigning that the game is now over

/* ao usar a variável, assign one time and then only change it, don't assign multiple times like below
var Health = 50;
var Health = 100; (ERRADO)
*/

// const, let, var
// var são variáveis
// let é similar a variável, "scope based"
// const é um valor que não pode mudar once assigned
const maxHealth = 100;
var currentHealth = 50;
// simple game, maxHealth won't change, so it should be const
// se é algo que não vai mudar, usar CONST, se vai mudar, usar VAR ou LET
// maxHealth = 150 (Isso não funciona pq já definimos que é uma constante)

{
    //this is a code block, often see this with IF, WHILE, FOR, FUNCTION
    // var pode usar dentro e fora do bloco. Let não pode usar fora do bloco
}

if (true) {
    var isGameOver = false; // variável da pra acessar fora do bloco, mesmo ela sendo declarada aqui dentro do bloco
    // let isGameOver = false; (se tentar printar isso vai gerar um erro pq o LET foi declarado dentro do bloco, logo não pode ser acessado fora)
}
console.log(isGameOver)

/* What are STRINGS
Another kind of variable
Represent text, messages, names, etc
Anything between quotes (single or double quotes)
*/1
let maxHealth = 100;
var currentHealth = 50.5;
currentHealth = 40.5;

var numberOfLives = 3;

var isGameOver = false;
isGameOver = true;
var isAtEnd = false;
//esses acima são exemplos

var characterName = "Aldo"; // coloquei como variável pra poder mudar se quiser
var age = 30;

let message = 
`Hi, my name is ${characterName} and my age is ${age}`; // pra colocar o characterName no meio, não se usa aspas, usa o ``
console.log(message)

let length = characterName.length
console.log(length)

let upperName = characterName.toUpperCase(); // pra deixar tudo em caps
let lowerName = characterName.toLowerCase(); // pra deixar tudo em minúsculo
// esses dois acima não mudam o original
// se quiser mudar o original, teria que ser:
// characterName = characterName.toUpperCase();

// se quiser pegar apenas algumas letras
let tresPrimeirasLetras = characterName.slice(0, 3); // coloca de qual a qual index vc quer
console.log(tresPrimeirasLetras)

// CHALLENGE
// var to keep track of lvls and print title with which lvl we're on
// string to print out just lvl and whatever lvl we're on
// hint: string ; two variables to keep current, string to say lvl whatever

var level = 1
var currentLevel = `Level ${level}`;
console.log(level, currentLevel)

// OPERATORS
/* Allow us to perform tests or modify variable values
5 types:
Assignment
Arithmetic
Comparison
Logical
Ternary
*/

// arithmetical + - * / % **
// % = remainder of a division
// ** = raise something to the power of something else

var health = 50;
health = health + 10; // 60
health = health % 50 // 10 (50 pra 60 em inteiros é 1, o restante é 10)
console.log(health)
// health % 2 == 0 (Essa linha retorna true/false se o Health for dividido por 2 ou não, ótimo pra checagem de números inteiros)

health = health ** 2; // 100 (** é o exponente, no caso, ao quadrado)

// += -= *= /=
health -= 20; // health = health - 20 (mesma coisa)

// ++ -- (increase or decrease by one)
health++; // 81
console.log(health)

// health = (health * 2) + (health / 5); (os parênteses são desnecessários matematicamente, mas é uma boa prática pra ficar mais readable)

var hello = "Hello";
var world = "world";

var phrase = hello + world;
console.log(phrase)

// === (is equal to and the same type)
// > >= < <= == !=

var number1 = 5;
var number2 = 10;

var result = number1 > number2; // false
result = number1 != number2; // true

var string1 = "Hello"
var string2 = "world"
result = string1 == string2; // false

// || (or), && (and), ! (not)
result = !result; // true (se for false, vira true e vice-versa)
result = number1 > number2 && string1 == string2; // false
number2 = number1;
result = number1 == number2 || string1 == string2; // true
console.log(result)

number2 = 10;
// ? :
result = number1 > number2 ? number1 : number2; // isso é pra testar, se sim, store first option, se não, store the second. Como se fosse IF ELSE
console.log(result)

// ARRAYS

var inventory = ["shirt", "axe", "bread"];

let shirt = inventory[0]; // always make sure that the index exists (no caso, tem 0, 1 e 2)
inventory[2] = "cheese"; // trocou o item 2 que era bread por cheese

var length = inventory.length // resultado 3
length = inventory[0].length; // resultado 5 (caracteres do shirt)

//pra inserir
inventory.push("water"); // ["shirt", "axe", "cheese", "water"];
//pra remover
inventory.pop(); // remove the final item and return it
water = inventory.pop(); // uma maneira de já fazer duas coisas, retira da lista e registra

// MULTIDIMENSIONAL ARRAYS

var levels = [1, 2, 3, 4] // assim são só levels
var levels = [ // assim são sublevels, arrays dentro de arrays (rows and colums)
    [1.1, 1.2, 1.3],
    [2.1, 2.2, 2.3, 2.4],
    [3.1, 3.2],
]

// pra acessar esses levels

var firstWorld = levels[0]; // acessou o primeiro mundo ([1.1, 1.2, 1.3])
var firstLevel = levels[0][1]; // acessou o 1.2 (0 da primeira linha, 1 é o 2º index do 1o array)

console.log(levels)

levels[1].pop() // esse tirou o 2.4
levels[2].push(3.3) // esse adiciona o 3.3 na 3a linha

// FUNCTIONS

function name(inputs) {
    function body
    return
}

var currentHealth = 50;
var healAmount = 10;

// currentHealth += healAmount (já funcionaria, mas função é pra poder acessar quando quiser)

function heal() {
    currentHealth += healAmount;
    function nested() {
        // essa função é só exemplo pra mostrar que vc não pode chamar uma função dentro de uma função
    }
}

nested(); // isso não vai funcionar pq nested é uma função dentro de outra função
heal(); // currentHealth = 60

var func = function heal() { // stores the function within the variable, easier to call it
    currentHealth += healAmount;
}

// FUNCTION INPUTS

var currentHealth = 50;
// var healAmount = 10; (tiramos pq colocamos como parâmetro)

// deixar os parâmetros do heal vazios faz com que precisa definir algo antes, é melhor definir os parâmetros
function heal(healAmount) {
    currentHealth += healAmount;
}

heal(10); // healou 10 como antes, currentHealth = 60

// colocar um parâmetro default

function heal(healAmount = 10) {
    currentHealth += healAmount;
}

heal(); // healou 10 como antes, currentHealth = 70

heal(30); // healou 30, override the default value, currentHealth = 100

// FUNCTION PART 3

var maxHealth = 80;
var currentHealth = 50;

//Essa função abaixo ta com Return sem parâmetros
// function heal(healAmount = 10) {
//     var newHealth = currentHealth + healAmount
//     currentHealth = newHealth > 100 ? maxHealth : newHealth; // top
//     return; // forces the function to break out
//     // return 5; (returns the input, no caso, 5)
// }

// Essa função abaixo ta com Return pra saber porcentagem da vida
function heal(healAmount = 10) {
    var newHealth = currentHealth + healAmount
    currentHealth = newHealth > 100 ? maxHealth : newHealth; // top
    return (currentHealth / maxHealth) * 100;
}

var result = heal(); // currentHealth = 60, result = 75
console.log(currentHealth, result);

// IF STATEMENTS

var keyPressed = "l";
var xPos = 0; // keep track if we're moving to the left or right
let endPos = 5;

if (keyPressed == "l") { // it's going to compare if it's equal
    if (xPos < endPos) {
        xPos -= 1; // xPos = -1
    }
} else if (keyPressed == "r" && xPos < endPos) { // aqui é outra maneira de fazer o acima
    xPos += 1;
} else {
    // just a fail safe, se os acima não derem match, não faz nada
}

// Usar vários IFs é quando vc quer que todos sejam executados
// Usar IF Else é pra quando quer que ele só vá pro próximo código, se não der o 1o

// WHILE

let endPos = 5;
var pos = 0;

while(pos < endPos) {
    pos++; // will incrise by 1 until condition met
}

// avoid nesting loops because it makes it slower
// mais complexo abaixo

var enemyPos = 4;
var isGameOver = false;

while(!isGameOver) {
    pos++;
    if(pos >= endPos || pos == enemyPos) {
        isGameOver = true;
    }
}

// CONTROL STATEMENTS

let endPos = 10;
var pos = 0;
var enemyPos = 4;
var isGameOver = false;

while(pos <endPos) {
    if (pos % 2 == 1) {
        pos += 2; // validation, otherwise will be infinite loop
        continue;
    }
    pos++;
    if(pos == enemyPos) {
        break;
    }
}

function doSomething(someNum) {
    var a = 5;
    var result = a + someNum;
    return result; // é necessário a função sair
}

// essa é a melhor maneira de fazer os acima
function movePlayer() {
    while(pos <endPos) {
        pos++;
        if(pos == enemyPos) {
            return;
        }
    }
}

// FOR LOOPS
// similar to while, but with predefined start and end points and iterator
// pair well with arrays

// for(start;end;iterator) {

// }

var items = ["Axe", "Shirt", "Knife"];
var finalString = "In my inventory, I have ";

// for(var i = 0; i < items.length; i++) {
//     var itemName = items[i];
//     finalString += itemName + " ";
// }

// console.log(finalString) (imprime a frase e os itens)

// below is shorter and easier
items.forEach(function(element) { // reads as: for each element of this array (items), we're going to do finalString
    finalString += element + " ";
});

console.log(finalString)

// OBJECTS
// GETTERS AND SETTERS (computer properties, get é pra return com algumas infos, set é pra definir)

// game character

var gameCharacter = {
    name: "Aldo",
    class: "Human",
    health: 100,
    get title() {
        return this.name + " the " + this.class;
    },
    set maxHealth(h) { // isso é bom pra poder facilmente mudar o maxHealth
        this.health = h;
    },
    xPos: 0,
    items: ["Knife", "Food"],
    move: function (x) {
        this.xPos += x;
    }
};

// acessando infos dos objetos
gameCharacter.title; // "Aldo the Human"
var name = gameCharacter.name;
gameCharacter.items = ["Axe", "Bread"]; // troquei os itens
gameCharacter.move(5);
var x = gameCharacter.xPos; // isso vai dar 5 pq acabamos de mover 5 acima

// adicionando e modificando infos dos objetos
gameCharacter.yPos = 0; // mesmo não tendo essa propriedade, podemos assign aqui
gameCharacter.maxHealth = 150, // mudou a health pra 150
var health = gameCharacter.maxHealth; // isso vai dar undefined por conta do 'set'
gameCharacter.move = function (x,y) { // modificando a função de movimentação
    this.xPos += x;
    this.yPos += y;
}

var i = 5;
var j = i;
i = 10; // 'j' continua com 5, 'i' é 10

var gc = gameCharacter // esse já cria uma referência
gc.name = "Aldo Rosenfeld" // da pra alterar agora dessa forma, pela referência

// OBJECT FUNCTIONS

// desse jeito abaixo é melhor do que o anterior pq com VAR vc já tem que especificar as infos, como função pode especificar toda vez que cria, muito melhor pra criar vários chars por exemplo
function gameCharacter(name, xPos, health) {
    this.name = name;
    this.xPos = xPos;
    this.health = health;
    this.move = function (x) { // dessa maneira todos os chars tem o mesmo move
        this.xPos += x;
    }
    // this.class = "Human"; tiramos isso pra poder adicionar class a cada char
}

var gc1 = new gameCharacter("Aldo", 0, 100); // o new é sintaxe, usado pra criar um novo
var name = gc1.name;
gc1.health = 150;
gc1.move(10);
var gc2 = new gameCharacter("Layla", 5, 150);

// OBJECT PROTOTYPES (adiciona info ao objeto e todos os objetos seguintes)

gameCharacter.prototype.class = "Human"; // adiciona ao constructor, então todos os próximos vão ter essa classe
gc1.class; // retorna a classe, se quiser mudar tbm pode

// função de heal

var heal = function(amount) {
    this.health += amount;
}

gameCharacter.prototype.heal = heal; // assign the heal function as a property
gc1.heal(5); // por exemplo

// CLASSES (funciona igual a função, meio que tanto faz, são as mesmas funções apresentadas de maneira diferente)

class gameCharacter {
    constructor(name, xPos, health) {
        this.name = name;
        this.xPos = xPos;
        this.health = health;
    }
    move(x) {
        this.xPos += x;
    }
}

class humanCharacter extends gameCharacter { // extends é tipo o prototype, modifica
    constructor(name, xPos, health) {
        super(name, xPos, health);
        this.classification = "Human";
    }
}

var gc1 = new gameCharacter("Aldo", 0, 100);
gc1.move(5); // moveu 5
gc1.name; // retorna o nome

var hc1 = new humanCharacter("Maurício", 5, 150);

//////////////////////////////////////////////////////////////
// ACABOU A PARTE 1, AGORA É GAME DEVELOPMENT PROJECT OVERVIEW NO crossingGale.html
//////////////////////////////////////////////////////////////