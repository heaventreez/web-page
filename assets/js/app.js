document.addEventListener('DOMContentLoaded', () => {

    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');
    const cards = document.querySelectorAll('.card');

    const cardContentMap = {
        history: {
            title: "PERSONAL CAREER",
            html: `<p>From a young age, I was passionate about the intersection of design and functionality. My path in technology began with web development, quickly focusing on user experience (UX) for. </p>
                   <p>My passions include minimalist design, photography, and music. I believe simplicity is the ultimate sophistication..</p>`
        },
        skills: {
            title: "Skills and Technology Stack",
            html: `<h3>Fron-end:</h3>
                   <p>HTML5, CSS3, JavaScript ES6+, React.js</p>
                   <h3>Design and Management:</h3>
                   <p>Figma, Adobe XD, Agile Methodologies</p>
                   <h3>Backend/Databases:</h3>
                   <p>Node.js, MySQL</p>`
        },
        projects: {
            title: "Featured Projects",
            html: `<ul>
                <li>x</li>
                <li>x</li>
                <li>x</li>
               </ul>
               <p style="text-align:center;">You can see more details and demos on my GitHub.</p>`
        },
        contacts: {
            title: "Contact Me",
            html: `<p>If you have any questions, project proposals, or just want to say hello, please don't hesitate to contact me.:</p>
                   
                   <p>
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#4ECDC4" style="vertical-align: middle; margin-right: 8px;">
                           <path d="M2.003 5.884l7.892 5.09-7.892 5.106c.004-.378.012-.76.033-1.144L2.003 5.884zm19.994-.002c0-1.042-.843-1.884-1.885-1.884H3.894c-1.041 0-1.885.842-1.885 1.884v12.232c0 1.043.844 1.884 1.885 1.884h16.218c1.042 0 1.885-.841 1.885-1.884V5.882zm-2.01 1.952V5.882c0-.056-.046-.102-.102-.102L12 11.233l-7.892-5.45c-.056 0-.101.046-.101.102v1.952l7.743 5.006 7.892-5.006zm-7.984 8.232l-7.902-5.115v5.11c0 .057.045.103.102.103l7.7-5.098zM20.106 17.898l-7.9-5.115-7.9 5.115c.002.004.008.007.012.012H20.093c.004-.005.008-.009.013-.012z" />
                       </svg>
                       Email: <a href="mailto:chroot.dan@proton.me" style="color: #4ECDC4;">chroot.dan@proton.me</a>
                   </p>

                   <p>
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#4ECDC4" style="vertical-align: middle; margin-right: 8px;">
                           <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.385 3.468 9.947 8.205 11.393.6.111.828-.275.828-.614 0-.301-.01-1.085-.015-1.996-3.359.728-4.051-1.637-4.051-1.637-.549-1.383-1.338-1.755-1.338-1.755-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.49.996.107-.775.419-1.303.762-1.604-2.665-.305-5.467-1.333-5.467-5.931 0-1.31.467-2.383 1.236-3.22-.124-.302-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.233.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.292-1.555 3.3-1.233 3.3-1.233.653 1.653.241 2.874.118 3.176.77.837 1.233 1.91 1.233 3.22 0 4.591-2.805 5.624-5.479 5.92-.43.372-.823 1.102-.823 2.227 0 1.605.014 2.898.014 3.283 0 .335.228.73.836.613C20.537 21.944 24 17.382 24 12 24 5.373 18.627 0 12 0z"/>
                       </svg>
                       GitHub: <a href="https://github.com/heaventreez" style="color: #4ECDC4;">heaventreez</a>
                   </p>`
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
