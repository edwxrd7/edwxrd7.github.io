function resetForm(){
    document.getElementById('byo-form').reset();
}

function addClass() {
     var input = document.createElement("input");
    input.setAttribute('type', 'text');

    var parent = document.getElementById("classResponse");
    parent.appendChild(input);
  }
  function loadImage(){
    var image = document.getElementById('introImage');
    const imageUrl = URL.createObjectURL(image);
    document.getElementById('loadImage').innerHTML = text;
  }
  function removeF(){
    var body = document.getElementById('bodyy');
    var resArea = document.querySelectorAll('[id^="resArea"]')

    body.classList.remove('bodyFormat');
    body.classList.add('darkMode');

    resArea.forEach(function(resArea) {
        resArea.classList.add('darkModeAdd');
    });
    var img = document.getElementById('byoLoadImg');
    img.classList.add('darkModeAdd');
  }