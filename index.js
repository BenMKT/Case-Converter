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
    let sentence= document.getElementById("converter").value.split(" ");
    /*let sentence = text.split(" ");*/
    for(let i=0; i<sentence.length; i++){
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    document.write(sentence.join(' '));// look for document.write alternative
    //return sentence.join(' ');
  } 