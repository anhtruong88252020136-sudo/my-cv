// Hàm tạo ngôi sao lấp lánh (Bling Bling)
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'bling-star';
    
    // Chọn ngẫu nhiên biểu tượng ngôi sao lấp lánh
    const stars = ['✦', '✨', '★', '❇', '⚡'];
    sparkle.innerHTML = stars[Math.floor(Math.random() * stars.length)];
    
    // Tọa độ xuất hiện ngẫu nhiên theo vị trí cuộn trang
    sparkle.style.left = Math.random() * 95 + 'vw';
    sparkle.style.top = (window.scrollY + Math.random() * (window.innerHeight - 50)) + 'px';
    
    // Kích thước ngẫu nhiên
    const size = Math.random() * 16 + 12; // 12px - 28px
    sparkle.style.fontSize = size + 'px';
    
    document.body.appendChild(sparkle);
    
    // Tự biến mất sau 2.5 giây
    setTimeout(() => {
        sparkle.remove();
    }, 2500);
}

// Hàm tạo bong bóng bay
function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    const size = Math.random() * 20 + 10;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * 98 + 'vw';
    
    document.body.appendChild(bubble);
    setTimeout(() => bubble.remove(), 7000);
}

// Chạy liên tục sinh hiệu ứng
setInterval(createSparkle, 180); // 0.18 giây ra 1 ngôi sao lấp lánh
setInterval(createBubble, 500);   // 0.5 giây ra 1 bong bóng

// Điều khiển nhạc nền
document.addEventListener('DOMContentLoaded', () => {
    const musicBtn = document.getElementById('music-btn');
    const bgMusic = document.getElementById('bg-music');
    if (musicBtn && bgMusic) {
        musicBtn.addEventListener('click', () => {
            if (bgMusic.paused) {
                bgMusic.play();
                musicBtn.textContent = '⏸️ Tắt nhạc';
            } else {
                bgMusic.pause();
                musicBtn.textContent = '🎵 Phát nhạc';
            }
        });
    }
});