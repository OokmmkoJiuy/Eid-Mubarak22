function createBalloons(num) {
    for (let i = 0; i < num; i++) {
        let balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        balloon.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.querySelector('.balloons').appendChild(balloon);
        setTimeout(() => { balloon.remove(); }, 5000);
    }
}
setInterval(() => createBalloons(5), 1000);
