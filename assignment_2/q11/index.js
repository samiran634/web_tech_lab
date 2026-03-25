const slider = document.querySelector('.modifire');
const button = document.querySelector('.sclidingButton');
  const font = document.querySelector(".font");

let isDragging = false;

// 1. Start dragging
button.addEventListener('mousedown', () => {
    isDragging = true;
});

// 2. Move logic
document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    // Get the bounding box of the parent container
    const rect = slider.getBoundingClientRect();
    
    // Calculate position relative to the container
    let x = e.clientX - rect.left;

    // Boundaries: Don't let it go outside the line
    if (x < 0) x = 0;
    if (x > rect.width - button.offsetWidth) x = rect.width - button.offsetWidth;
    button.style.left = x + 'px';
        
let currentSize = parseFloat(window.getComputedStyle(font).fontSize);
let newSize =  (0.1 * x);
font.style.fontSize = newSize + "px";

});

// 3. Stop dragging
document.addEventListener('mouseup', () => {
    isDragging = false;
});
