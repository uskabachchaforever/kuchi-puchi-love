// Floating mini photos
const srcImg = 'background.jpg';
const photoField = document.getElementById('photoField');
for(let i=0;i<12;i++){
  const img = document.createElement('img');
  img.src = srcImg;
  img.className = 'mini';
  img.style.left = Math.random()*90 + 'vw';
  img.style.top = Math.random()*90 + 'vh';
  img.style.transform = 'translate(-50%,-50%) rotate(' + (Math.random()*30-15) + 'deg)';
  img.style.opacity = 0.6 + Math.random()*0.4;
  img.style.width = 50 + Math.random()*50 + 'px';
  img.style.height = img.style.width;
  photoField.appendChild(img);
  img.animate([{transform: 'translateY(0px)'},{transform:'translateY(' + (-40-Math.random()*60) + 'px)'}],{duration:4000+Math.random()*4000,iterations:Infinity,direction:'alternate',easing:'ease-in-out'});
}

// rotating hearts
const hearts = document.getElementById('hearts');
for(let i=0;i<8;i++){
  const s = document.createElement('div');
  s.className = 'heartItem';
  s.style.fontSize = 16 + Math.random()*28 + 'px';
  s.style.opacity = 0.8;
  s.innerHTML = '❤️';
  s.style.transform = 'rotate('+ (Math.random()*360) +'deg)';
  hearts.appendChild(s);
}

// confetti/firecracker effect using canvas
const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
function resize(){ canvas.width = innerWidth; canvas.height = innerHeight; }
resize(); window.addEventListener('resize', resize);
function random(min,max){ return Math.random()*(max-min)+min; }
function burst(x,y){
  const colors = ['#ff7aa2','#ffd08a','#7ee7c3','#6ea8fe','#fff'];
  const particles = [];
  for(let i=0;i<80;i++){
    particles.push({x,y,vx: random(-8,8), vy: random(-12,-2), size: random(2,6), color: colors[Math.floor(Math.random()*colors.length)], life: 60 + Math.random()*40});
  }
  let frame = function(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let p of particles){
      p.x += p.vx; p.y += p.vy; p.vy += 0.25; p.life--;
      ctx.fillStyle = p.color;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2); ctx.fill();
    }
    if(particles.some(p=>p.life>0)) requestAnimationFrame(frame);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  };
  frame();
}
// periodic bursts
setInterval(()=>{ burst(random(100,innerWidth-100), random(100, innerHeight-200)); }, 3000);
// click to burst
document.addEventListener('click', (e)=> burst(e.clientX, e.clientY));
// ensure audio plays on first touch
document.addEventListener('touchstart', function playAudio(){ 
  const a = document.getElementById('bgm'); 
  if(a && a.paused){ a.play(); }
  document.removeEventListener('touchstart', playAudio);
});