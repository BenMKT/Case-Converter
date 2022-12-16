function upcase() {
    let text = document.getElementById("converter").value;
    document.getElementById("converter").value = text.toUpperCase();
    return text;
  }
  function lowcase() {
    let text = document.getElementById("converter").value;
    document.getElementById("converter").value = text.toLowerCase();
    return text;
  } 
  function propcase() {
    let text = document.getElementById("converter").innerHTML;
    document.getElementById("converter").innerHTML = text.toProperCase();
    return text;
  } 