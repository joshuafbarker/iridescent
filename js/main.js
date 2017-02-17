const inputs = document.querySelectorAll('.controls input');
const rgbLabel = document.querySelector('.rgbLabel');
const hexLabel = document.querySelector('.hexLabel');

var clipboard = new Clipboard('.copy-btn');
clipboard.on('success', function(e){
  const label = e.trigger.childNodes[1];
  label.style.opacity = 1;
  setTimeout(function(){
    label.style.opacity = 0;
  }, 1500);

  e.clearSelection();
});

Object.prototype.setRandomColor = function(){
  const randNum = Math.floor(Math.random() * 255);
  this.value = randNum;
  document.documentElement.style.setProperty(`--${this.name}`, randNum);
}

function changeColor(){
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
  updateLabels();
}

function RGBToHex(r,g,b){
    var bin = r << 16 | g << 8 | b;
    return (function(h){
        return new Array(7-h.length).join('0')+h
    })(bin.toString(16).toUpperCase())
}

function updateLabels(){
  const redNum = document.querySelector('input[name=red]').value;
  const greenNum = document.querySelector('input[name=green]').value;
  const blueNum = document.querySelector('input[name=blue]').value;
  const hexCode = RGBToHex(redNum, greenNum, blueNum);

  rgbLabel.innerText = `rgb(${redNum}, ${greenNum}, ${blueNum})`;
  hexLabel.innerText = `#${hexCode}`;
}

window.onload = function(){
  inputs.forEach(input => input.setRandomColor());
  updateLabels();
}

inputs.forEach(input => input.addEventListener('change', changeColor));
inputs.forEach(input => input.addEventListener('mousemove', changeColor));
