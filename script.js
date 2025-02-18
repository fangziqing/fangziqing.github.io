// 动态生成星星
const starsContainer = document.querySelector('.stars');

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    starsContainer.appendChild(star);
}

for (let i = 0; i < 100; i++) {
    createStar();
}
