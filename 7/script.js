function submitForm() {
  // Validar campos personalizados se necessário
  if (validateForm()) {
    // Se a validação passar, envie o formulário
    document.getElementById("myForm").submit();
  }
}

function validateForm() {
  // Adicione lógica de validação personalizada aqui
  var name = document.getElementById("name").value;
  var estado = document.getElementById("estado").value;
  var naturezadocargo = document.getElementById("naturezadocargo").value;
  var areadeinteresse = document.getElementById("areadeinteresse").value;
  if (
    name.trim() === "" ||
    estado.trim() === "" ||
    naturezadocargo.trim() === "" ||
    areadeinteresse.trim() === ""
  ) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return false;
  }
  // Adicione outras validações conforme necessário

  return true;
}
