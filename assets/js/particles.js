document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.getElementById('particles-background');
    if (!particlesContainer) return;

    const numberOfParticles = 70;
    const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FED766", "#F0E68C", "#8A2BE2"];

    for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        particlesContainer.appendChild(particle);

        const size = Math.random() * 8 + 4;
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        particle.style.position = 'absolute';
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = randomColor;
        particle.style.borderRadius = '50%';
        particle.style.opacity = Math.random() * 0.5 + 0.3;

        const animationDuration = Math.random() * 20 + 15;
        const animationDelay = Math.random() * -animationDuration;

        particle.style.animation = `moveParticles ${animationDuration}s linear infinite`;
        particle.style.animationDelay = `${animationDelay}s`;
    }

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes moveParticles {
            0%, 100% {
                transform: translate(0, 0);
            }
            25% {
                transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
            }
            50% {
                transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
            }
            75% {
                transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
            }
        }
    `;
    document.head.appendChild(style);
});
