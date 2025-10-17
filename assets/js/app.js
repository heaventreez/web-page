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
            title: "Habilidades y Stack Tecnológico",
            html: `<h3>Fron-end:</h3>
                   <p>HTML5, CSS3 (Flexbox, Grid), JavaScript ES6+, React.js (básico)</p>
                   <h3>Diseño y Gestión:</h3>
                   <p>Figma, Adobe XD, Metodologías Ágiles (Scrum)</p>
                   <h3>Backend/Bases de Datos:</h3>
                   <p>Node.js (experiencia limitada), MySQL</p>`
        },
        proyectos: {
            title: "Proyectos Destacados",
            html: `<ul>
                <li>**Proyecto Alpha (Web App):** Una plataforma de gestión de tareas construida con React y Node.js. Enfoque en accesibilidad y rendimiento.</li>
                <li>**Portafolio Personal (UX/UI):** Rediseño completo para mejorar la navegación y el tiempo de carga.</li>
                <li>**E-commerce Mockup:** Diseño de experiencia de compra optimizada para móvil.</li>
               </ul>
               <p style="text-align:center;">*Puedes ver más detalles y demos en mi GitHub.*</p>`
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
