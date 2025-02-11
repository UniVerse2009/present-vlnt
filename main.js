console.log('Hello World!');
// Mendapatkan lebar dan tinggi layar saat ini
const width = window.innerWidth;
const height = window.innerHeight;

// Menampilkan hasil di konsol
function logDisplay(){
  console.log(`Lebar layar: ${width}px`);
  console.log(`Tinggi layar: ${height}px`);
}

logDisplay();

document.getElementById("text2").addEventListener("click", function () {
    animateText("text0");
    animateText("text1");
});

function animateText(elementId) {
    let textElement = document.getElementById(elementId);
    let text = textElement.innerText;
    textElement.innerHTML = ""; // Kosongkan teks lama
    
    // Bungkus setiap huruf dalam <span>
    text.split("").forEach((char, index) => {
        let span = document.createElement("span");
        span.innerText = char;
        span.classList.add("bounce");
        
        // Tambahkan delay animasi per huruf
        span.style.animationDelay = `${index * 0.1}s`;
        
        textElement.appendChild(span);
    });
}

function handleResize(){
  let width = window.innerWidth;
  let height = window.innerHeight;
  if (width > height) {
    // Landscape 
    document.getElementById('container').style.width = '50vw';
    
    document.getElementById('text0').style.fontSize = '5vh';
    document.getElementById('text1').style.fontSize = '5vh';
    document.getElementById('text2').style.fontSize = '7.5vh';
    
    
  } else {
    // Portrait
    document.getElementById('container').style.width = '50vh';
    
    document.getElementById('text0').style.fontSize = '5vw';
    document.getElementById('text1').style.fontSize = '5vw';
    document.getElementById('text2').style.fontSize = '5vw';
  }
}

handleResize();
window.addEventListener("resize", handleResize);

window.addEventListener("resize", logDisplay);