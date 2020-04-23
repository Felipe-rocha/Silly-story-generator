var historia = document.querySelector(".randomize");
var story = document.querySelector(".story");

historia.addEventListener("click", function(){
    console.log("Fui clicado");
    History();

});

function History(){
    storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.".replace("insertx", "KAROLINNY");
    console.log(storyText);
    story.innerHTML = storyText;
    story.style.visibility = 'visible';
}
