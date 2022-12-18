  let text = document.querySelector('textarea');

  document.getElementById('upper-case').addEventListener('click', function() {
    text.value = text.value.toUpperCase();
  });

    document.getElementById('lower-case').addEventListener('click', function() {
      text.value=text.value.toLowerCase();
    });

    document.getElementById('proper-case').addEventListener('click', function() {
      text.value = text.value.toLowerCase().split(' ').map(value => value[0].toUpperCase() + value.slice(1)).join(' ');
    });

    document.getElementById('sentence-case').addEventListener('click', function() {
      text.value = text.value.toLowerCase().split('. ').map(value => value[0].toUpperCase() + value.slice(1)).join('. ');
    });

    function download(filename, text) {
      let element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(document.querySelector(".textArea").value));
      element.setAttribute('download', "hello.txt");
  
      element.style.display = 'none';
      document.body.appendChild(element);
  
      element.click();
  
      document.body.removeChild(element);
  }
  
  download("hello.txt","This is the content of my file :)");
  
  document.getElementById("save-text-file").addEventListener("click", download);
  