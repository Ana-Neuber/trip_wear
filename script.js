// USADA NA BARRA DE NAVEGAÇAÕ PRINCIPAL
// Função para exibir apenas página selecionada
function show(pageToShow) {
    // Obter todas as páginas
    const pages = document.querySelectorAll('.page');

    // Esconder todas as páginas
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Mostrar a nova página
    document.getElementById(pageToShow).classList.add('active');
    
    // Impede o comportamento padrão do link
    return false;
}

// USADA NA BARRA DE NAVEGAÇÃO DA PÁGINA DE PRODUTOS
// Função para exibir somente produtos dentro de uma categoria
function filterProducts(category) {
    // Obter todos os produtos
    const products = document.querySelectorAll('.produto');

    // Mostrar ou esconder produtos com base na categoria
    products.forEach(product => {
        if (category === 'all' || product.classList.contains(category)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
    
    // Impede o comportamento padrão do link
    return false;
}

// USADA NA PÁGINA DE VIZUALIZAÇÃO DO PRODUTO
// Mudar cor do tamanho escolhido
function chosenSize(size){
    // Obter todos os tamanhos
    const sizes = document.querySelectorAll('.size-btn');

    // Voltar todos os tamanhos para o estilo padrão
    sizes.forEach(size_option => {
        size_option.classList.remove('chosen');
    });

    // Colocar o tamanho escolhido em cores de destaque
    document.getElementById(size).classList.add('chosen');
    
    // Impede o comportamento padrão do link
    return false;
}

// USADA NA PÁGINA DE VIZUALIZAÇÃO DO PRODUTO
// Mudar a cor da cor escolhida
function chosenColor(color){
    // Obter todas as cores
    const colors = document.querySelectorAll('.color-btn');

    // Voltar todas as cores para o estilo padrão
    colors.forEach(color_option => {
        color_option.classList.remove('chosen');
    });

    // Colocar a cor selecionada em cores de destaque
    document.getElementById(color).classList.add('chosen');
    
    // Impede o comportamento padrão do link
    return false;
}