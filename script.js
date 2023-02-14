const nomeLoja = document.getElementById('nome');
const enderecoLoja = document.getElementById('endereco');
const funcionamentoLoja = document.getElementById('funcionamento');

nomeLoja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple';
});

nomeLoja.addEventListener('blur', (event) => {
    event.target.style.borderColor = '';
});

enderecoLoja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple';
});

enderecoLoja.addEventListener('blur', (event) => {
    event.target.style.borderColor = '';
});

funcionamentoLoja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple';
});

funcionamentoLoja.addEventListener('blur', (event) => {
    event.target.style.borderColor = '';
});