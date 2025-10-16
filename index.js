// Script para melhorar a experiência do usuário na landing page da Escola DNC

document.addEventListener('DOMContentLoaded', function() {
    // Adiciona efeito de scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Validação simples do formulário
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const nome = this.querySelector('input[name="nome"]').value;
            const email = this.querySelector('input[name="email"]').value;
            
            if (nome && email) {
                // Aqui você pode adicionar código para enviar os dados para um servidor
                alert('Obrigado por se inscrever, ' + nome + '! Em breve entraremos em contato.');
                this.reset();
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }

    // Animação simples para os cards de depoimentos
    const cards = document.querySelectorAll('.card-depoimento');
    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.03)';
        });
        
        card.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Controles do carrossel
    const prevButton = document.querySelector('.controle-prev');
    const nextButton = document.querySelector('.controle-next');
    const cardsContainer = document.getElementById('div-cards');
    
    if (prevButton && nextButton && cardsContainer) {
        let scrollAmount = 0;
        const cardWidth = 370; // Largura do card + gap
        
        nextButton.addEventListener('click', function() {
            scrollAmount += cardWidth;
            if (scrollAmount > cardsContainer.scrollWidth - cardsContainer.clientWidth) {
                scrollAmount = cardsContainer.scrollWidth - cardsContainer.clientWidth;
            }
            cardsContainer.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        
        prevButton.addEventListener('click', function() {
            scrollAmount -= cardWidth;
            if (scrollAmount < 0) {
                scrollAmount = 0;
            }
            cardsContainer.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }
});