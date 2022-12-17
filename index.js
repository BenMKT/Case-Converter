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