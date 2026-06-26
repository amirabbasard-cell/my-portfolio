// تایپ افکت اسم
const text = "امیرعباس اردکانی";
let i = 0;

function type(){
  if(i < text.length){
    document.getElementById("name").innerHTML += text.charAt(i);
    i++;
    setTimeout(type,100);
  }
}

type();

// تغییر زبان ساده
let en = false;

function toggleLang(){
  en = !en;

  if(en){
    document.getElementById("name").innerHTML = "Amirabbas Ardakani";
  }else{
    document.getElementById("name").innerHTML = "";
    i = 0;
    type();
  }
}

// دانلود رزومه نمونه
function downloadCV(){
  const a = document.createElement("a");
  a.href = "https://example.com/cv.pdf";
  a.download = "CV.pdf";
  a.click();
}