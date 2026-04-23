const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

function showMessage() {
  alert('Cooking lets me be creative and share happiness through food!');
}

function changeBackground() {
  document.body.style.background = 
    document.body.style.background === 'rgb(240, 248, 255)' 
    ? '#fff8f0' 
    : '#f0f8ff';
}
