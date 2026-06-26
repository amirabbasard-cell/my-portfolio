const langs = {
fa:{
name:"امیرعباس اردکانی",
role:"طراح وب | پژوهشگر AI"
},
en:{
name:"Amirabbas Ardakani",
role:"Web Designer | AI Researcher (Medium English)"
},
ar:{
name:"أميرعباس الأردكاني",
role:"مطور ويب | باحث ذكاء اصطناعي (محترف)"
}
};

let lang="fa";

function setLang(l){
lang=l;
document.getElementById("name").innerText=langs[l].name;
document.getElementById("role").innerText=langs[l].role;
}

// SKILLS (طبق خواسته تو)
window.onload=()=>{
document.getElementById("fa").style.width="90%";
document.getElementById("en").style.width="55%";
document.getElementById("ar").style.width="95%";
document.getElementById("web").style.width="85%";
};

// CHAT AI (fake GPT core)
function send(){
let input=document.getElementById("input").value;
let box=document.getElementById("chatBox");

box.innerHTML += `<div>You: ${input}</div>`;

let response = "AI: تحلیل انجام شد ✔";

if(input.includes("who")){
response="AI: You are an AI researcher & web designer 🚀";
}

setTimeout(()=>{
box.innerHTML += `<div>${response}</div>`;
},500);
}

/* ---------------------------
   🧠 NEURAL NETWORK ANIMATION
----------------------------*/

const canvas=document.getElementById("neural");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let nodes=[];

for(let i=0;i<80;i++){
nodes.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*1,
vy:(Math.random()-0.5)*1
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

for(let n of nodes){

n.x+=n.vx;
n.y+=n.vy;

if(n.x<0||n.x>canvas.width) n.vx*=-1;
if(n.y<0||n.y>canvas.height) n.vy*=-1;

ctx.fillStyle="#00ffcc";
ctx.fillRect(n.x,n.y,2,2);

for(let m of nodes){
let dx=n.x-m.x;
let dy=n.y-m.y;
let dist=Math.sqrt(dx*dx+dy*dy);

if(dist<100){
ctx.strokeStyle="rgba(0,255,204,0.1)";
ctx.beginPath();
ctx.moveTo(n.x,n.y);
ctx.lineTo(m.x,m.y);
ctx.stroke();
}
}
}

requestAnimationFrame(draw);
}

draw();

/* ---------------------------
   🌌 WEBGL SPACE (Three.js)
----------------------------*/

const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

const renderer=new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry=new THREE.SphereGeometry(5,32,32);
const material=new THREE.MeshBasicMaterial({wireframe:true,color:0x00ffcc});
const sphere=new THREE.Mesh(geometry,material);

scene.add(sphere);

camera.position.z=10;

function animate(){
requestAnimationFrame(animate);
sphere.rotation.x+=0.002;
sphere.rotation.y+=0.003;
renderer.render(scene,camera);
}

animate();