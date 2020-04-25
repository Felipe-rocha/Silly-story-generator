var geraHistoria = document.querySelector(".randomize");
var story = document.querySelector(".story");

geraHistoria.addEventListener("click", function(){
    History();
    name(storyText);
    alteraTexto();
});

function History(){
    // Essa função, até o storyText, só funciona quando é executada dentro da função History. Sempre que tento abrir uma função para ela, as variáveis mudaTextoX, mudaTextoY e mudaTextoZ não são reconhecidas no texto.
    var randomInsertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
    var randomInsertY = ["the soup kitchen", "Disneyland", "the White House"];
    var randomInsertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

    var insertx = Math.floor(Math.random() * (randomInsertX.length));
    var inserty = Math.floor(Math.random() * (randomInsertY.length));
    var insertz = Math.floor(Math.random() * (randomInsertZ.length));

    var mudaTextoX = randomInsertX[insertx];
    var mudaTextoY = randomInsertY[inserty];
    var mudaTextoZ = randomInsertZ[insertz];

    storyText = "It was 94 fahrenheit outside, so " + mudaTextoX + " went for a walk. When they got to " + mudaTextoY + " , they stared in horror for a few moments, then " + mudaTextoZ + ". Bob saw the whole thing, but was not surprised — " + mudaTextoX + " weighs 300 pounds, and it was a hot day.";
    story.innerHTML = storyText;
    story.style.visibility = 'visible';
}

function name(storyText){
    var nomeInput = document.getElementById("customname").value;
    var trocaNome = storyText;
    trocaNome.replace("Bob", "felipe");

    console.log(trocaNome);
    console.log(nomeInput);
}

