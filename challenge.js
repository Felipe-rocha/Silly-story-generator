var geraHistoria = document.querySelector(".randomize");
var story = document.querySelector(".story");
var nomeInput = document.getElementById("customname").value;

geraHistoria.addEventListener("click", function(){
    History();
    console.log(nomeInput);
});


function History(){
    
    storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.".replace(":insertx:", nomeInput);
    story.innerHTML = storyText;
    story.style.visibility = 'visible';
    
}
