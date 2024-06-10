const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = canvas.width / 15; 
let characters = Array.from({ length: columns }).fill(1).map(() => Math.floor(Math.random() * canvas.height));

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#FF00FF';
    ctx.font = '15pt monospace';

    characters.forEach((y_pos, index) => {
        const text = String.fromCharCode(1e2 + Math.random() * 33);
        const x_pos = index * 15;
        ctx.fillText(text, x_pos, y_pos);
        characters[index] = y_pos > canvas.height ? 0 : y_pos + 15;
    });
}

setInterval(draw, 35);

document.addEventListener('mousemove', function(e) {
    const star = document.createElement('div');
    star.innerHTML = '&#9733;';
    star.style.position = 'absolute';
    star.style.left = `${e.pageX}px`;
    star.style.top = `${e.pageY}px`;
    star.style.color = 'white';
    star.style.pointerEvents = 'none';
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 150);
});

document.getElementById('enterButton').addEventListener('click', function() {
    document.getElementById('content').style.display = 'block';
    document.getElementById('bgMusic').play();
    this.style.display = 'none';
});