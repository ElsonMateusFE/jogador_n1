document.addEventListener('DOMContentLoaded', function(){
    //const buttons = document.querySelectorAll('[data-tab-button=em_breve]')
    const buttons = document.querySelectorAll('[data-tab-button]')
    //#2
    const questions = document.querySelectorAll('[data-faq-question]')

    const heroSection = document.querySelector('.hero')
    const alturaHero = heroSection.clientHeight
    
    window.addEventListener('scroll', function(){
        //console.log(posicaoAtual)
        const posicaoAtual = window.scrollY

        if(posicaoAtual < alturaHero){
            //console.log("Oculta os elementos")
            ocultaElementosDoHeader()
        }else{
            exibeElementosDoHeader()
        }
    })
    
    //Seção de atrações, programação das abas
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas()
            aba.classList.add('shows__list--is-active')

            removeBotaoAtivo()
            buttons[i].classList.add('shows__tabs__button--is-active')
        })
    }

    // Seção FAQ, accordion
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuDecharResposta)
    }
})

function abreOuDecharResposta(elemento){
    //console.log(elemento.target.parentNode)
    //faq__questions__item--is-open
    const classe = 'faq__questions__item--is-open'
    const elementoPai = elemento.target.parentNode

    elementoPai.classList.toggle(classe)
}

function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]')

    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function ocultaElementosDoHeader(){
    const header = document.querySelector('header')
    header.classList.add('header--is-hidden')
}

function exibeElementosDoHeader(){
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden')
}