// ============================================
// ENTRE FASES - INTERACTIVE GAMING GUIDE
// ============================================

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking a link
if (navMenu) {
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scroll for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.game-card, .dica-card, .comunidade-card, .top-fase-item').forEach(el => {
    observer.observe(el);
});

// Button Click Effects
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
        
        // Show feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

// Newsletter subscription
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    const input = newsletterForm.querySelector('input');
    const btn = newsletterForm.querySelector('.btn-primary');
    
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (input.value) {
            alert(`🎮 Eba! ${input.value} foi inscrito com sucesso! Você vai receber as melhores dicas em breve! 🎮`);
            input.value = '';
        } else {
            alert('Por favor, insira seu email!');
        }
    });
}

// Game Card Interactions
document.querySelectorAll('.game-card').forEach(card => {
    const viewGuideBtn = card.querySelector('.btn-small');
    if (viewGuideBtn) {
        viewGuideBtn.addEventListener('click', function() {
            const gameName = card.querySelector('h3').textContent;
            alert(`📚 Você está acessando o guia completo de ${gameName}!\n\nEm breve: Tutorial com todas as dicas!`);
        });
    }
});

// Strategy Button Interactions
document.querySelectorAll('.btn-estrategia').forEach(btn => {
    btn.addEventListener('click', function() {
        const faseTitle = this.closest('.top-fase-item').querySelector('h3').textContent;
        alert(`⚔️ ESTRATÉGIA: ${faseTitle}\n\nDicas especiais para derrotar esse chefe:\n\n1️⃣ Estude o padrão de ataque\n2️⃣ Mantenha distância\n3️⃣ Desvie e contra-ataque\n4️⃣ Leve poções de vida!\n\nVocê consegue! 💪`);
    });
});

// Console Easter Egg
console.log(`
   ██████╗ ▄▄▄       ███╗   ███╗███████╗███████╗
   ██╔════╝████╗      ████╗ ████║██╔════╝██╔════╝
   ██║  ███╚██╔╝      ██╔████╔██║█████╗  █████╗  
   ██║   ██║ ██║      ██║╚██╔╝██║██╔══╝  ██╔══╝  
   ╚██████╔╝ ██║      ██║ ╚═╝ ██║███████╗███████╗
    ╚═════╝  ╚═╝      ╚═╝     ╚═╝╚══════╝╚══════╝
`);
console.log('%c🎮 BEM-VINDO À ENTRE FASES! 🎮', 'color: #FF006E; font-size: 20px; font-weight: bold;');
console.log('%cO melhor site de dicas e guias de jogos para gamers jovens!', 'color: #00D9FF; font-size: 14px;');

// Add ripple style dynamically
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .nav-menu.active {
        display: flex !important;
    }
`;
document.head.appendChild(style);

// Responsive menu handling
const handleResize = () => {
    if (window.innerWidth > 768) {
        navMenu?.classList.remove('active');
    }
};

window.addEventListener('resize', handleResize);

console.log('✓ Tudo carregado! Divirta-se jogando! 🎮');