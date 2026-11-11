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
