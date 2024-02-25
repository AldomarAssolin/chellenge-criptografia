let btn = document.querySelector('.cripto');
let btnDescripto = document.querySelector('.descripto');
let text = document.querySelector('#main_text')
let cripto__text = document.querySelector('.main__rigth__content')

btn.addEventListener('click', () => {
    console.log(text.value)
    cripto__text.innerHTML = text.value
})

btnDescripto.addEventListener('click', () => {
    console.log(text.value)
    cripto__text.innerHTML = `
    <>
    <img src="./assets//text1x.svg" alt="" />
    <h2 className="title_box">Nenhuma mensagem encontrada</h2>
    <p className="para_box">Digite um texto que você deseja criptografar ou descriptografar.</p>
    </>`
})
