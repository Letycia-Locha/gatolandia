const racasDeGatos = [
    {
        titulo: "Abissínio",
        descricao: "O Abissínio é uma das raças de gatos mais antigas, conhecido por sua natureza curiosa e ativa. Eles são brincalhões e altamente inteligentes.",
        link: "https://www.royalcanin.com/br/cats/breeds/abyssinian"
    },
    {
        titulo: "American Curl",
        descricao: "O American Curl é conhecido por suas orelhas únicas que se curvam para trás. São gatos afetuosos e se adaptam bem a diferentes ambientes.",
        link: "https://www.royalcanin.com/br/cats/breeds/american-curl"
    },
    {
        titulo: "Exotic Shorthair",
        descricao: "O Exotic Shorthair tem um caráter doce e carinhoso e é um animal sossegado e de fácil convívio.",
        link: "https://www.royalcanin.com/br/cats/breeds/exotic-shorthair"
    },
    {
        titulo: "Angorá Turco",
        descricao: "O Angorá Turco é uma raça elegante com uma pelagem longa e sedosa. Eles são inteligentes e gostam de estar no centro das atenções.",
        link: "https://www.royalcanin.com/br/cats/breeds/turkish-angora"
    },
    {
        titulo: "Balinês",
        descricao: "O Balinês é uma versão de pelo longo do Siamês, com o qual compartilha a natureza vocal e afetuosa. São gatos brincalhões e leais.",
        link: "https://www.royalcanin.com/br/cats/breeds/balinese"
    },
    {
        titulo: "Bengal",
        descricao: "O Bengal tem uma aparência selvagem com manchas e listras. É um gato energético, curioso e que adora brincar e explorar.",
        link: "https://www.royalcanin.com/br/cats/breeds/bengal"
    },
    {
        titulo: "Burmês",
        descricao: "São brincalhões e marotos, mas também profundamente afetuosos, criando laços fortes com os tutores, de quem se tornam muito dependentes.",
        link: "https://www.royalcanin.com/br/cats/breeds/burmese"
    },
    {
        titulo: "Bombay",
        descricao: "O Bombay tem uma pelagem preta brilhante e é conhecido por seu temperamento afetuoso e sociável. É uma raça que se adapta bem a diferentes ambientes.",
        link: "https://www.royalcanin.com/br/cats/breeds/bombay"
    },
    {
        titulo: "British Longhair",
        descricao: "O British Longhair é uma raça de aparência robusta e tranquila, com uma personalidade calma e independente. Eles são excelentes animais de estimação para lares tranquilos.",
        link: "https://www.royalcanin.com/br/cats/breeds/british-longhair"
    },
    {
        titulo: "Chartreux",
        descricao: "O Chartreux é um gato robusto e silencioso com uma pelagem azul-acinzentada. Eles são conhecidos por sua natureza calma e afetuosa.",
        link: "https://www.royalcanin.com/br/cats/breeds/chartreux"
    },
    {
        titulo: "Cornish Rex",
        descricao: "O Cornish Rex é uma raça de pelo curto e encaracolado. São gatos brincalhões e enérgicos, conhecidos por sua aparência única.",
        link: "https://www.royalcanin.com/br/cats/breeds/savannah"
    },
    {
        titulo: "Devon Rex",
        descricao: "O Devon Rex é uma raça ativa e curiosa, com um pelo curto e ondulado. Eles adoram interagir com pessoas e são conhecidos por seu comportamento brincalhão.",
        link: "https://www.royalcanin.com/br/cats/breeds/devon-rex"
    },
    {
        titulo: "Maine Coon",
        descricao: "O Maine Coon é uma das maiores raças de gatos, conhecido por sua pelagem densa e temperamento amigável. São gatos sociáveis e se dão bem com crianças e outros animais.",
        link: "https://www.royalcanin.com/br"
    }
];
// Certifique-se de que 'racasDeGatos' está acessível (importado de dados.js)
const select = document.getElementById('raca-select');

// Preencher o select com as raças de gatos do array
racasDeGatos.forEach(raca => {
    const option = document.createElement('option');
    option.value = raca.link; // O valor será o link da raça
    option.textContent = raca.titulo; // O texto será o título da raça
    select.appendChild(option); // Adiciona a opção ao select
});

// Adiciona evento de clique ao botão para redirecionar
document.getElementById('buscar-btn').addEventListener('click', () => {
    const selectedValue = select.value;
    if (selectedValue) {
        window.open(selectedValue, '_blank'); // Abre a URL em uma nova aba
    } else {
        alert('Por favor, selecione uma raça.'); // Alerta se nenhuma raça for selecionada
    }
});
