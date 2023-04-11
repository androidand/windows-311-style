document.addEventListener('DOMContentLoaded', () => {
  const windowHeader = document.querySelector('.window-header');
  const windowContent = document.querySelector('.window-content');
  const closeButton = document.querySelector('.close');
  const minimizeButton = document.querySelector('.minimize');
  const maximizeButton = document.querySelector('.maximize');

  let isDragging = false;
  let startX, startY, initialX, initialY;

  windowHeader.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    initialX = windowHeader.parentElement.offsetLeft;
    initialY = windowHeader.parentElement.offsetTop;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    windowHeader.parentElement.style.left = initialX + (e.clientX - startX) + 'px';
    windowHeader.parentElement.style.top = initialY + (e.clientY - startY) + 'px';
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // closeButton.addEventListener('click', () => {
  //   windowHeader.parentElement.style.display = 'none';
  // });

  minimizeButton.addEventListener('click', () => {
    windowContent.style.display = windowContent.style.display === 'none' ? 'block' : 'none';
  });

  maximizeButton.addEventListener('click', () => {
    const windowElement = windowHeader.parentElement;
    if (windowElement.classList.contains('maximized')) {
      windowElement.classList.remove('maximized');
    } else {
      windowElement.classList.add('maximized');
    }
  });
});
