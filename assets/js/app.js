document.addEventListener('DOMContentLoaded', () => {

    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');
    const cards = document.querySelectorAll('.card');

    const cardContentMap = {
        historia: {
            title: "Mi Trayectoria Personal",
            html: `<p>Desde muy joven, me apasionó la intersección entre el diseño y la funcionalidad. Mi camino en la tecnología comenzó con el desarrollo web, centrándose rápidamente en la experiencia del usuario (UX) para crear productos que no solo funcionen, sino que también deleiten. </p>
                   <img src="https://via.placeholder.com/600x300?text=Imagen+Historia" alt="Imagen de mi historia" style="max-width: 100%; border-radius: 10px; margin-top: 20px;">
                   <p>Mis pasiones incluyen el diseño minimalista, la fotografía y la música. Creo que la simplicidad es la máxima sofisticación.</p>`
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
        contacto: {
            title: "Conecta Conmigo",
            html: `<p>Si tienes alguna consulta, propuesta de proyecto o simplemente quieres saludar, no dudes en contactarme:</p>
                   <p>📧 Email: <a href="mailto:tuemail@example.com" style="color: #4ECDC4;">x</a></p>
                   <p>🔗 LinkedIn: [Tu Enlace]</p>
                   <p>💾 GitHub: [Tu Enlace]</p>`
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
