function myFunction() {
    let text = document.getElementById("converter").innerHTML;
    document.getElementById("converter").innerHTML = text.toUpperCase();
    return text;
  }