function changeColor() {
    var symbols = '0123456789ABCDEF'
    var color = '#'
    for(var i = 0; i<6; i++){
        color = color + symbols[Math.floor(Math.random()*16)];
    }
    var paragraph = document.querySelector('p');
    paragraph.style.color = color;
  }