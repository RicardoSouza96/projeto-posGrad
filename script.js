const perguntas = ['imagens/1.jpg','imagens/2.jpg','imagens/3.jpg','imagens/4.jpg','imagens/5.jpg','imagens/6.jpg',
    'imagens/7.jpg','imagens/8.jpg','imagens/9.jpg','imagens/10.jpg','imagens/11.jpg','imagens/12.jpg','imagens/13.jpg',
    'imagens/14.jpg','imagens/15.jpg','imagens/16.jpg','imagens/17.jpg','imagens/18.jpg','imagens/19.jpg'
];

const respostas = {
    resposta1: ['Angola', 'Guatemala', 'Argélia'],
    resposta2: ['Benin', 'Brunei', 'Botsuana'],
    resposta3: ['Burkina Faso', 'Quirguistão', 'Burundi'],
    resposta4: ['Camarões', 'Chade', 'Omã'],
    resposta5: ['Egito', 'Costa do Marfim', 'Djibouti'],
    resposta6: ['Etiópia', 'Eritreia', 'Myanmar'],
    resposta7: ['Gâmbia', 'Gabão', 'Belarus'],
    resposta8: ['Gana', 'Guiné', 'Albânia'],
    resposta9: ['Lesoto', 'Guiné-Bissau', 'Chipre'],
    resposta10: ['Líbia', 'Libéria', 'Jamaica'],
    resposta11: ['Mali', 'Malawi', 'Kiribati'],
    resposta12: ['Marrocos', 'Mauritânia', 'Nauru'],
    resposta13: ['Moçambique', 'Namíbia', 'Samoa'],
    resposta14: ['Níger', 'Nigéria', 'Tuvalu'],
    resposta15: ['Ruanda', 'Quênia', 'Papua Nova Guiné'],
    resposta16: ['Senegal', 'Serra Leoa', 'Andorra'],
    resposta17: ['Tanzânia', 'Sudão', 'Somália'],
    resposta18: ['Togo', 'Tunísia', 'Tonga'],
    resposta19: ['Zimbábue', 'Zambia', 'Barein'],
}

const respostasCorretas = ['Angola', 'Benin', 'Burkina Faso', 'Camarões', 'Egito', 'Etiópia', 'Gâmbia', 'Gana', 'Lesoto', 'Líbia',
    'Mali', 'Marrocos', 'Moçambique', 'Níger', 'Ruanda', 'Senegal', 'Tanzânia', 'Togo', 'Zimbábue'];

const imagens = [];
perguntas.forEach(pergunta => {
    let imagem = new Image();
    imagem.src = pergunta;
    imagens.push(imagem);
});


const btnStart = document.querySelector('.start');
const telas = document.querySelectorAll('.tela');

btnStart.addEventListener('click', () => telas[0].classList.add('subir'));