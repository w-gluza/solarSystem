function getData(){
  fetch("http://www.astro-phys.com/api/de406/records")
  .then(res => res.json())
  .then(showbodies);
}
function showbodies(data){
console.log(data)
}
getData();


var canvas = document.querySelector('canvas');

canvas.width = innerWidth;
canvas.height = innerHeight;

var c = canvas.getContext('2d');

// multiple circle "stars"
function stars(){
for (var i = 0; i< 400; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  var r = Math.floor(Math.random() * 0.01 ) + 1.5;
  c.beginPath();
  c.arc(x, y, r, 0, Math.PI * 2, false);
  c.fillStyle = 'red';
  c.fill();
}
}

// Planets coordinates
var x = 200;
var y = 200

// dx = velocity
var dx = 5;
var dy = 5;

var radius = 40;

function animate() {
  requestAnimationFrame(animate);
   c.clearRect(0,0, innerWidth, innerHeight);
   console.log(stars());


  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.fillStyle = 'green';
  c.fill();

  if  (x > innerWidth || x < 0){
    dx = -dx;
  }
  if  (y > innerHeight || y < 0){
    dy = -dy;
  }
  x += dx;
  y += dy;

}

animate();
