const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
const printButton = document.querySelector("#print-cv");
const currentYear = document.querySelector("#current-year");
const bubbleLayer = document.querySelector(".bubble-layer");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.querySelector(".menu-toggle-label").textContent = isExpanded ? "Mở menu" : "Đóng menu";
    primaryNav.classList.toggle("is-open", !isExpanded);
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.querySelector(".menu-toggle-label").textContent = "Mở menu";
      primaryNav.classList.remove("is-open");
    }
  });
}

if (printButton) {
  printButton.addEventListener("click", () => window.print());
}

if (bubbleLayer && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const createBubble = () => {
    const bubble = document.createElement("div");
    const size = Math.round(18 + Math.random() * 38);
    const width = window.innerWidth;
    const height = window.innerHeight;
    const radius = size / 2;
    const edge = Math.floor(Math.random() * 4);
    let startX;
    let startY;

    if (edge === 0) {
      startX = Math.random() * width;
      startY = -radius;
    } else if (edge === 1) {
      startX = width + radius;
      startY = Math.random() * height;
    } else if (edge === 2) {
      startX = Math.random() * width;
      startY = height + radius;
    } else {
      startX = -radius;
      startY = Math.random() * height;
    }

    const endX = width * (0.25 + Math.random() * 0.5);
    const endY = height * (0.25 + Math.random() * 0.5);

    bubble.className = "bubble";
    bubble.style.setProperty("--bubble-size", `${size}px`);
    bubble.style.setProperty("--bubble-start-x", `${startX}px`);
    bubble.style.setProperty("--bubble-start-y", `${startY}px`);
    bubble.style.setProperty("--bubble-end-x", `${endX - startX}px`);
    bubble.style.setProperty("--bubble-end-y", `${endY - startY}px`);
    bubbleLayer.append(bubble);
    window.setTimeout(() => bubble.remove(), 8000);
  };

  window.setInterval(createBubble, 300);
}
// Hàm tạo bong bóng
function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    const size = Math.random() * 25 + 10 + 'px';
    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.animationDuration = Math.random() * 4 + 5 + 's';
    
    document.body.appendChild(bubble);
    setTimeout(() => bubble.remove(), 9000);
}

// Hàm tạo ngôi sao lấp lánh (Bling Bling)
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    
    const size = Math.random() * 15 + 8 + 'px';
    star.style.width = size;
    star.style.height = size;
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.animationDuration = Math.random() * 1.5 + 1 + 's';
    
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 3000);
}

// Chạy liên tục hiệu ứng
setInterval(createBubble, 400);
setInterval(createStar, 300);

// Xử lý bật/tắt nhạc nền
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');

musicBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.textContent = '⏸️ Tắt nhạc';
    } else {
        bgMusic.pause();
        musicBtn.textContent = '🎵 Phát nhạc';
    }
});