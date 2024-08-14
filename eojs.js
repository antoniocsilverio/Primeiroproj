const btn = document.getElementById('ndaverBtn');

btn.addEventListener('click', function() {
    const bodyWidth = document.body.clientWidth;
    const bodyHeight = document.body.clientHeight;
    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;
    const imgHeight = document.querySelector('.image').offsetHeight;
    const bufferHeight = 100;
    // Calculate new position ensuring it's within bounds and not above the image
    const maxX = bodyWidth - btnWidth;
    const maxY = bodyHeight - btnHeight;
    const minY = imgHeight; // Ensure it doesn't go above the image

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * (maxY - minY) + minY);

    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
});
