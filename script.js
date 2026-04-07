// Boot sequence
const text = [
  "Initializing system...",
  "Loading profile: Isaiah Ball",
  "Cybersecurity Module: ACTIVE",
  "Access Granted ✔"
];

let i = 0;
const bootText = document.getElementById("bootText");

function typeLine() {
  if (i < text.length) {
    bootText.innerHTML += text[i] + "\n";
    i++;
    setTimeout(typeLine, 800);
  } else {
    setTimeout(() => {
      document.getElementById("boot").style.display = "none";
      document.getElementById("app").classList.remove("hidden");
    }, 1000);
  }
}
typeLine();

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// AI panel toggle
document.getElementById("aiBtn").onclick = () => {
  document.getElementById("aiPanel").classList.toggle("open");
};

// Particle background
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: Math.random() - 0.5,
    vy: Math.random() - 0.5
  });
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    ctx.fillRect(p.x, p.y, 2, 2);
  });
  requestAnimationFrame(animate);
}
animate();
