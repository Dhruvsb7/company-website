gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h2",{y:-120,opacity:0,duration:1});
gsap.from(".hero p",{opacity:0,delay:0.5});

gsap.utils.toArray(".reveal").forEach(sec=>{
gsap.from(sec,{
scrollTrigger:sec,
opacity:0,
y:150,
duration:1
});
});

document.addEventListener("mousemove",e=>{
document.querySelector(".cursor").style.left=e.clientX+"px";
document.querySelector(".cursor").style.top=e.clientY+"px";
});

const canvas=document.getElementById("moltenCanvas");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<60;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3+1,
v:Math.random()*1+0.5
});
}

function animate(){
ctx.fillStyle="rgba(0,0,0,0.2)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#ff6a00";
particles.forEach(p=>{
p.y-=p.v;
if(p.y<0)p.y=canvas.height;
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fill();
});
requestAnimationFrame(animate);
}

animate();

