document.getElementById('open-btn').addEventListener('click', function() {
    const card = document.getElementById('card');
    card.style.transform = 'rotateY(180deg)';
});

const numberOfSnowflakes = 100;  // Número de flocos de neve
        const body = document.querySelector('body');

        // Função para gerar os flocos de neve
        function createSnowflake() {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.style.left = Math.random() * window.innerWidth + '1000px';  // Posição horizontal aleatória
            snowflake.style.animationDuration = (Math.random() * 3 + 3) + 's'; // Duração aleatória da animação
            snowflake.style.animationDelay = Math.random() * 7 + 's';  // Atraso aleatório na animação
            body.appendChild(snowflake);

            // Remover floco de neve após o final da animação
            snowflake.addEventListener('animationend', () => {
                snowflake.remove();
            });
        }

        // Criar os flocos de neve
        for (let i = 0; i < numberOfSnowflakes; i++) {
            createSnowflake();
        }

        // Gerar novos flocos de neve em intervalos regulares
        setInterval(createSnowflake, 300);