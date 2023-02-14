const botaoEnviar = document.getElementById('submit')

botaoEnviar.addEventListener('click', (event) => {
    console.log("preparando envio...")
})

const nomeLoja = document.getElementById('nome');
const enderecoLoja = document.getElementById('endereco');
const funcionamentoLoja = document.getElementById('funcionamento');

nomeLoja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple';
    nomeLoja.value = window.localStorage.getItem('Nome da loja')
});

nomeLoja.addEventListener('blur', (event) => {
    event.target.style.borderColor = '';
    window.localStorage.setItem("Nome da loja" , event.target.value)
});

enderecoLoja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple';
    enderecoLoja.value = window.localStorage.getItem('Endereco da loja')
});

enderecoLoja.addEventListener('blur', (event) => {
    event.target.style.borderColor = '';
    window.localStorage.setItem("Endereco da loja" , event.target.value)
});

funcionamentoLoja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple';
    funcionamentoLoja.value = window.localStorage.getItem('Funcionamento da loja')
});

funcionamentoLoja.addEventListener('blur', (event) => {
    event.target.style.borderColor = '';
    window.localStorage.setItem("Funcionamento da loja" , event.target.value)
});

function FillInputs(event){
    
} 


campos = [nomeLoja, enderecoLoja, funcionamentoLoja]
for (let i = 0; i < campos.length; i++) {
    campos[i].addEventListener('change', event.target.value)
}

function recuperarDados() {
    for (let i = 0; i < campos.length; i++) {
        campos[i].value = window.localStorage.getItem(campos[i])
    }
}