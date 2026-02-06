// Efeito de scroll no header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Menu mobile
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-links a');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
    });
}
if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });
}
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });
});

// Formulário para WhatsApp
const whatsappButton = document.getElementById('whatsappButton');
if (whatsappButton) {
    whatsappButton.addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const eventType = document.getElementById('eventType').value;
        const eventDate = document.getElementById('eventDate').value;
        const message = document.getElementById('message').value;

        // Validação básica
        if (!name || !email || !phone || !eventType || !eventDate || !message) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Formatar a mensagem para WhatsApp
        const formattedDate = new Date(eventDate).toLocaleDateString('pt-BR');
        const whatsappMessage = `Olá Matheus, gostaria de solicitar um orçamento para um evento. Seguem os detalhes:%0A%0A` +
                               `*Nome:* ${name}%0A` +
                               `*E-mail:* ${email}%0A` +
                               `*Telefone:* ${phone}%0A` +
                               `*Tipo de Evento:* ${eventType}%0A` +
                               `*Data do Evento:* ${formattedDate}%0A` +
                               `*Mensagem:* ${message}%0A%0A` +
                               `Aguardo seu retorno!`;

        // Número de WhatsApp (substitua pelo número real)
        const whatsappNumber = "5553999814571";
        
        // Abrir WhatsApp
        window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
        
        // Limpar formulário após envio
        const contactForm = document.getElementById('contactForm');
        if (contactForm) contactForm.reset();
    });
}

// Atualizar a data mínima no campo de data para hoje
const evtDateInput = document.getElementById('eventDate');
if (evtDateInput) {
    const today = new Date().toISOString().split('T')[0];
    evtDateInput.min = today;
}

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
