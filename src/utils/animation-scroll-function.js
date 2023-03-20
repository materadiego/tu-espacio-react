const scrollFunction = window.addEventListener("scroll", function () {
  var animate = document.querySelectorAll(".animate");

  for (let i = 0; i < animate.length; i++) {
    let altura = window.innerHeight / 1.5;

    let distancia = animate[i].getBoundingClientRect().top;

    if (distancia <= altura) {
      animate[i].classList.remove(
        "AnimatedOpacity",
        "AnimatedImageContainer1",
        "AnimatedSquare1",
        "AnimatedContent1",
        "AnimatedText",
        "ProjectsOpacity",
        "PacksBox",
        "RecomendedPack"
      );
    }
  }
});

export default scrollFunction;
