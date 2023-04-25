function thankForm() {
  var escolhido = document.getElementById("escolhido");
  var principal = document.getElementById("principal");
  var agradecimento = document.getElementById("agradecimento");
  var radio = document.getElementsByName("rating");

  for (var i = 0; i < 5; i++) {
      if (radio[i].checked) {
          escolhido.innerHTML = radio[i].value;
          break;
      }
  }
  principal.style.display = "none";
  agradecimento.style.display = "flex";
  return false;
}