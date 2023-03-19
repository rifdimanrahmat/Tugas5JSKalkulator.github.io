function hitung(operator) {
  var angka1 = parseFloat(document.getElementById("angka1").value);
  var angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    alert("Maaf yang Anda Input bukan Angka");
  } else {
    switch (operator) {
      case "+":
        document.getElementById("hasil").value = angka1 + angka2;
        break;
      case "-":
        document.getElementById("hasil").value = angka1 - angka2;
        break;
      case "*":
        document.getElementById("hasil").value = angka1 * angka2;
        break;
      case "/":
        document.getElementById("hasil").value = angka1 / angka2;
        break;
      case "**":
        document.getElementById("hasil").value = Math.pow(angka1, angka2);
    }
  }
}
