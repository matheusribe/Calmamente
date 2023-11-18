document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu-bar');
    const navMenu = document.querySelector('.nav-menu');
    const navigation = document.querySelector('.navigation')

    menu.addEventListener('click', () => {
        menu.classList.toggle('ativo');
        navMenu.classList.toggle('ativo');
        navigation.classList.toggle('ativo');
    });
});


const circleProgress = document.querySelector('.circle-progress');
const numberOfBreaths = document.querySelector('.breath-input');
const start = document.querySelector('.start');
const instructions = document.querySelector('.instructions');
const breathsText = document.querySelector('.breaths-text');
let breathsLeft = 3;

// Aguardando a seleção da respiração do usuário
numberOfBreaths.addEventListener('change', () =>
{
    breathsLeft = numberOfBreaths.value;
    breathsText.innerText = breathsLeft;
});

// Expandindo/comprimindo o circulo central
const growCircle = () => {
    circleProgress.classList.add('circle-grow');
    setTimeout(() => {
    circleProgress.classList.remove('circle-grow');
    }, 8000)
};

// Instruções de respiração
const breathTextUpdate = () => {
    breathsLeft--;
    breathsText.innerText = breathsLeft;
    instructions.innerText = "Inspire 😤";

    setTimeout(() => {
        instructions.innerText = "Mantenha por mais alguns segundos 😌";
        setTimeout(() => {
            instructions.innerText = "Expire devagar 😮‍💨";
        }, 4000)
    }, 4000);
};

// Função de repetição da respiração
const breathingApp = () => {
    const breathingAnimations = setInterval(() => {
        if (breathsLeft === 0){
            clearInterval(breathingAnimations);
            instructions.innerHTML = "Sessão finalizada 🤗 Click em 'Iniciar' para começar uma nova sessão!";
            start.classList.remove('button-inactive');
            breathsLeft = numberOfBreaths.value;
            breathsText.innerText = breathsLeft;
            return;
            
        }
        growCircle();
        breathTextUpdate();
    }, 12000)
};


// Começando a sessão
start.addEventListener('click', () => {
    start.classList.add('button-inactive');
    instructions.innerHTML = "Relaxe e prepare-se para a sessão";
    setTimeout(() => {
        instructions.innerHTML = "A sessão está prestes a começar...";
        setTimeout(() => {
            breathingApp();
            growCircle();
            breathTextUpdate();
        }, 2000);
    }, 2000);
});