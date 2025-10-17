document.addEventListener('DOMContentLoaded', () => {

    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');
    const cards = document.querySelectorAll('.card');

    const cardContentMap = {
        historia: {
            title: "PERSONAL CAREER",
            html: `<p>From a young age, I was passionate about the intersection of design and functionality. My path in technology began with web development, quickly focusing on user experience (UX) for. </p>
                   <p>My passions include minimalist design, photography, and music. I believe simplicity is the ultimate sophistication..</p>`
        },
        habilidades: {
            title: "Skills and Technology Stack",
            html: `<h3>Fron-end:</h3>
                   <p>HTML5, CSS3 (Flexbox, Grid), JavaScript ES6+, React.js (basic)</p>
                   <h3>Design and Management:</h3>
                   <p>Figma, Adobe XD, Agile Methodologies (Scrum)</p>
                   <h3>Backend/Databases:</h3>
                   <p>Node.js (limited experience), MySQL</p>`
        },
        proyectos: {
            title: "Featured Projects",
            html: `<ul>
                <li>x</li>
                <li>x</li>
                <li>x</li>
               </ul>
               <p style="text-align:center;">You can see more details and demos on my GitHub.</p>`
        },
        contacts: {
            title: "Connect With Me",
            html: `<p>If you have any questions, project proposals, or just want to say hello, please don't hesitate to contact me.:</p>
                   <p>📧 Email: <a href="mailto:chroot.dan@proton.me" style="color: #4ECDC4;">chroot.dan@proton.me</a></p>
                   <p>💾 GitHub: <a href="https://github.com/heaventreez" style="color: #4ECDC4;">heaventreez</a></p>`
        }
    };

    const openModal = (target) => {
        const content = cardContentMap[target];
        
        if (content) {
            modalTitle.textContent = content.title;
            modalContent.innerHTML = content.html;
            modalOverlay.classList.add('active');
            document.body.classList.add('modal-open-lock');
        }
    };

    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.classList.remove('modal-open-lock');
    };

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const target = card.getAttribute('data-modal-target');
            if (target) {
                openModal(target);
            }
        });
    });

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
});
