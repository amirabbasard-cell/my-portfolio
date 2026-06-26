body{
  margin:0;
  font-family:Arial;
  background:#050816;
  color:white;
}

.bg{
  position:fixed;
  width:100%;
  height:100%;
  background: radial-gradient(circle at 30% 30%, #7c3aed, transparent 40%),
              radial-gradient(circle at 70% 70%, #06b6d4, transparent 40%);
  z-index:-1;
}

.container{
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:40px;
  gap:25px;
  animation: fadeIn 1.2s ease;
}

@keyframes fadeIn{
  from{opacity:0; transform:translateY(20px);}
  to{opacity:1; transform:translateY(0);}
}

.card{
  background:rgba(255,255,255,0.06);
  backdrop-filter:blur(20px);
  padding:30px;
  border-radius:20px;
  text-align:center;
  width:320px;
  box-shadow:0 10px 30px rgba(0,0,0,0.4);
}

.img{
  width:130px;
  height:130px;
  margin:auto;
  border-radius:50%;
  padding:4px;
  background:linear-gradient(45deg,#22c55e,#3b82f6,#a855f7);
}

.img img{
  width:100%;
  height:100%;
  border-radius:50%;
  object-fit:cover;
}

button{
  margin-top:12px;
  padding:10px 14px;
  border:none;
  border-radius:10px;
  background:#6366f1;
  color:white;
  cursor:pointer;
  transition:0.3s;
}

button:hover{
  transform:scale(1.05);
}

.skills{
  width:90%;
  max-width:500px;
}

.skill{
  margin:15px 0;
}

.bar{
  height:10px;
  background:#1f2937;
  border-radius:10px;
  overflow:hidden;
}

.bar div{
  height:100%;
  background:linear-gradient(90deg,#6366f1,#22d3ee);
}
