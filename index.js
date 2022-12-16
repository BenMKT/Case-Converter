function upcase() {
    let text = document.getElementById("converter").innerHTML;
    document.getElementById("converter").innerHTML = text.toUpperCase();
    return text;
  }
  function lowcase() {
    let text = document.getElementById("converter").innerHTML;
    document.getElementById("converter").innerHTML = text.toLowerCase();
    return text;
  } 