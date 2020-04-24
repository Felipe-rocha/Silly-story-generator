var geraHistoria = document.querySelector(".randomize");
var story = document.querySelector(".story");

geraHistoria.addEventListener("click", function(){
    History();
    name(storyText);
});

function History(nomeInput){
    storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
    story.innerHTML = storyText;
    story.style.visibility = 'visible';
}

function name(storyText){
    var nomeInput = document.getElementById("customname").value;
    var trocaNome = storyText;
    trocaNome.replace("Bob", nomeInput.value);

    console.log(trocaNome);
    console.log(nomeInput);
}
