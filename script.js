
function animacao() {
    const animacao = document.querySelectorAll('.js_animacao')

    if (animacao.length) {
        const windowMetade = window.innerHeight * 0.8


        function anima_scroll() {
            animacao.forEach((anima) => {
                const sectionTop = anima.getBoundingClientRect().top;
                const esta_visivel = (sectionTop - windowMetade) < 0
                if (esta_visivel) {
                    anima.classList.add('ativo')
                }
            })
        }

        anima_scroll()
        window.addEventListener('scroll', anima_scroll)
    }
}

animacao()
