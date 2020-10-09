// Animation
function animateIcon() {
    let icon = document.querySelector('#animated-icon');
    icon.innerHTML = '&#xf255';
    setTimeout(() => {
        icon.innerHTML = '&#xf256';
    }, 1000);
    setTimeout(() => {
        icon.innerHTML = '&#xf257';
    }, 2000)
}

// Run Animation
animateIcon();

// Animate Every 3 seconds
setInterval(animateIcon, 3000);
