const choices = document.querySelector('.choices');
const canvas = document.getElementById('myGraph');
const ctx = canvas.getContext('2d');
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const data = {
    cpp: { type: "cpp", score: 0 },
    java: { type: "java", score: 0 },
    javascript: { type: "javascript", score: 0 },
    python: { type: "python", score: 0 },
    none: { type: "none", score: 0 }
};

const barWidth = 40;
const gap = 20;
const startX = 50;
const startY = canvasHeight - 30;

function getDataArray() {
    return Object.values(data);
}

function drawBar(x, y, height, color, label, value) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, barWidth, height);

    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';

    // label below bar
    ctx.fillText(label, x + barWidth / 2, startY + 20);

    // actual score above bar
    ctx.fillText(value, x + barWidth / 2, y - 5);
}

function drawAxes() {
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(startX, 0);
    ctx.lineTo(startX, startY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(canvasWidth, startY);
    ctx.stroke();
}

function drawGraph() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    const dataArray = getDataArray();
    const dataMax = Math.max(...dataArray.map(item => item.score), 1);
    const scaleY = (canvasHeight - 50) / dataMax;

    drawAxes();
    let currentX = startX + gap;

    dataArray.forEach(item => {
        const barHeight = item.score * scaleY;
        const barY = startY - barHeight;
        drawBar(currentX, barY, barHeight, '#4CAF50', item.type, item.score);
        currentX += barWidth + gap;
    });
}

choices.addEventListener('click', (e) => {
    const type = e.target.innerText.trim();

    if (type === 'CPP') {
        data.cpp.score += 1;
    }
    if (type === 'Java') {
        data.java.score += 1;
    }
    if (type === 'Python') {
        data.python.score += 1;
    }
    if (type === 'Javascript') {
        data.javascript.score += 1;
    }
    if (type === 'Do Not Like coding') {
        data.none.score += 1;
    }

    drawGraph();
    alert("thanks for voting");
});
