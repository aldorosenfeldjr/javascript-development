// Aula - variáveis e imprimir
var i = 5;
// this is a comment

/*
this is comments
*/
console.log(i); // isso é pra imprimir

//Aula - números, booleans, strings e constants
// variáveis Numbers
var age = 27;
var money = 50.05;
age = 28;

// variáveis Booleans (one or the other)
var isUserLoggedIn = true;

//variáveis Strings (com aspas)
var name = "Nimish"; 
// aspas significa que é string

name = 60; // java é dinâmico, pode mudar o tipo

// Constants
const title = "My Webpage";
// title = "asdasd" (isso não funcionaria pq é uma constante)

console.log(title); // pra imprimir

// aula - Operators

// Assignment
//o que foi feito nas aulas anteriores
var age = 27;
var firstName = "Nimish";
var money = 50.05
// Arithmetic Operators: + - * / %
age += 1; // age = age + 1 (mesma coisa)
var newAge = age + 1;
var fullName = firstName + "Narang";
console.log(fullName)
// Comparison Operators: == != > >= < <= // always return true or false
var canAfford = money >= 20;
console.log(canAfford)
// Logical Operators: || && !
var cannotAfford = !canAfford; // (! é 'not')
var canBuy = canAfford && age >= 18; // (&& é 'and')
var canBuy = canAfford || age >= 18; // (|| é 'or')
console.log(canBuy)

 // aula - Arrays (Create, Get/set array elements, Some common operators)
// arrays podem conter todos os tipos, números, booleans, etc
// arrays = []
var shoppingList = ["Butter", "Milk", "Eggs"];
console.log(shoppingList);

shoppingList = ["Eggs", "Butter", "Apples"]; // isso é válido
var eggs = shoppingList[0]; // isso é um Index, precisa existir na variável, não pode ser um número maior do que o que tem
shoppingList[1] = "Cheese"; // mudou o valor do Index 1
console.log(shoppingList)
var listLength = shoppingList.length
shoppingList.push("Butter"); //pra adicionar um valor
console.log(shoppingList)
shoppingList.pop(); // vai remover o valor do final da lista ou o que falar
// função pop retorna o que foi removido, então da pra fazer o abaixo:
// var butter = shoppingList.pop(); // isso pq butter foi o removido
console.log(shoppingList);
console.log(listLength);

// aula - If Statements (If, Else If, Else)

// traffic light systems
var lightState = "yellow";
if (lightState == "green") {
    // aqui vai o código se o farol esiver verde
    console.log("Go!");
} else if (lightState == "red") {
    console.log("Stop!");
} else /* esse é tipo um fail safe */ {
    console.log("Slow down!");
}

// aula - while loops (what are, write and run)
/*
 while ()teste {

 }
 */

var pos = 0;
const endPos = 5;

while (pos< endPos) {
    //game logic
    pos += 1;
    console.log(pos);
}

// aula For loops (what are, write and run, compare to while)

// for (condição) {}

//esse abaixo imprime uma lista de compras
//for é bom pra rodar considerando um máximo de vezes, enquanto while pode rodar muitas vezes (indefinidamente)


var shoppingList = ["Butter", "Milk", "Eggs"];

for (var i = 0; i < shoppingList.length; i += 1) {
    var item = shoppingList[i];
    console.log(item);
}

// aula Functions (write and run, add parameters, add return)

// funções precisam ser executadas, é pra rodar quando quer, no exemplo abaixo não roda, retorna zero


var pos = 0;
/*
function move() {
    pos += 1;
}

console.log(pos);

// nessa abaixo roda

function move() {
    pos += 1;
}

move()

console.log(pos);

// esse abaixo já coloca uma variável na função

function move(byAmount) {
    pos += byAmount;
}
move(5); // vai sair resultado 5 (0 + 5)

console.log(pos);
*/

//  esse ta melhor formulado

function move(pos, byAmount) {
    const newPos = pos + byAmount;
    return newPos;
}
var finalPos = move(0,2);

console.log(pos);
console.log(finalPos);

// aula - Objects (Create, Get/set, Run object, bem básico)
// objetos não precisamos saber a posição dos itens, mas a key que eles foram salvos. Fica mais fácil encontrar pq não precisa saber aonde está, apenas o nome

var GameCharacter =  {
    name: "Nimish",
    pos: 2,
    health: 100,
    move: function(byAmount) {
        this.pos += byAmount; // tem que colocar o 'this' pra entender que a posição que estamos falando é deste
    }
};

// o "ponto" acessa o item
var name = GameCharacter.name // pode procurar direto por GameCharacter.item ou cria a variável pra facilitar
GameCharacter.health = 50; // aqui mudamos a vida pra 50

GameCharacter.move(10);
console.log(GameCharacter.pos)

// aula - Event Handling (access HTML elements, Set properties, Add events)

/* cria um HTML com (exemplo de input, botão e output):
<!DOCTYPE html>
<html>
    <body>
        <input type="text" id="input">
        <br>
        <button id="button">Display output</button>
        <br>
        <p id="output">Output text here</p>
        <!-- se quiser adicionar o java aqui, é colocar <script></script> abaixo, mas é melhor fazer separado -->
        <script src="javascriptCode.js"></script>
    </body>
</html>
*/

// acessando a informação do html, pode ser por id, type ou class

var input = document.getElementById("input");
var button = document.getElementById("button");
var output = document.getElementById("output");

// desenvolvendo a função que, ao clicar, gera o output

function displayOutput() {
    const text = input.value; // pega o valor do input e transforma em 'text'
    output.innerHTML = text; // imprime em HTML
}

// colocando a função no botão, event

button.addEventListener("click", displayOutput);

// no HTML precisa adicionar: <script src="arquivo.js"></script>