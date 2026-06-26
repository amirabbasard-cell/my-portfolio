let isEn = false;

const fa = {
  name: "امیرعباس اردکانی",
  role: "هوش مصنوعی | نویسنده | پژوهشگر",
  s1: "کار با هوش مصنوعی",
  s2: "پژوهش و مقاله‌نویسی",
  s3: "تاریخ و تحلیل"
};

const en = {
  name: "Amirabbas Ardakani",
  role: "AI Specialist | Writer | Researcher",
  s1: "AI Usage",
  s2: "Academic Writing",
  s3: "History & Analysis"
};

function typeText(text){
  let i = 0;
  document.getElementById("name").innerHTML = "";

  let interval = setInterval(() => {
    document.getElementById("name").innerHTML += text[i];
    i++;
    if(i >= text.length) clearInterval(interval);
  }, 80);
}

function setLang(lang){
  document.getElementById("role").innerText = lang.role;
  document.getElementById("s1").innerText = lang.s1;
  document.getElementById("s2").innerText = lang.s2;
  document.getElementById("s3").innerText = lang.s3;

  typeText(lang.name);
}

function toggleLang(){
  isEn = !isEn;
  setLang(isEn ? en : fa);
}

setLang(fa);
