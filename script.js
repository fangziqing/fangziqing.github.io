/* 基础样式 */
body {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #1e3c72, #2a5298);
    color: white;
    font-family: 'Arial', sans-serif;
    overflow: hidden;
}

.container {
    text-align: center;
    position: relative;
}

.title {
    font-size: 4rem;
    margin-bottom: 20px;
    animation: fadeIn 2s ease-in-out;
}

.subtitle {
    font-size: 2rem;
    margin-bottom: 40px;
    animation: slideIn 1.5s ease-in-out;
}

.message {
    font-size: 1.5rem;
    animation: float 3s ease-in-out infinite;
}

/* 爱心特效 */
.heart {
    width: 100px;
    height: 100px;
    background-color: #ff4757;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    animation: heartbeat 1.5s infinite;
}

.heart::before,
.heart::after {
    content: '';
    width: 100px;
    height: 100px;
    background-color: #ff4757;
    border-radius: 50%;
    position: absolute;
}

.heart::before {
    top: -50px;
    left: 0;
}

.heart::after {
    top: 0;
    left: 50px;
}

/* 星星背景特效 */
.stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    overflow: hidden;
    z-index: -1;
}

.stars::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    border-radius: 50%;
    box-shadow: 50px 50px white, 100px 200px white, 200px 300px white, 300px 400px white, 400px 500px white;
    animation: twinkle 5s infinite;
}

/* 动画效果 */
@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

@keyframes slideIn {
    0% { transform: translateY(-50px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

@keyframes heartbeat {
    0% { transform: translate(-50%, -50%) rotate(-45deg) scale(1); }
    50% { transform: translate(-50%, -50%) rotate(-45deg) scale(1.2); }
    100% { transform: translate(-50%, -50%) rotate(-45deg) scale(1); }
}

@keyframes twinkle {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
}
