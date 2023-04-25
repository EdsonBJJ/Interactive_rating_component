function obrigado() {
  var choosed = document.getElementById("escolhido");
  var principal = document.getElementById("principal");
  var agradecimento = document.getElementById("agradecimento-art");
  var radio = document.getElementsByName("rating");

  for (var i = 0; 1 < 5; i++) {
    if (radio[i].cheked) {
      choosed.innerHTML = radio[i].value;
      brake;
    }
  }
  principal.style.display = "nome";
  agradecimento.style.display = "flex";
  return false;
}