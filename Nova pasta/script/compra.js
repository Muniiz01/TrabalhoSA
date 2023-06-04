var btn2 = document.querySelector("#inputButton2");

window.onload = ("click", function () {
    var paragrafo = document.querySelector("#nomeProduto");
    var paragrafo2 = document.querySelector("#precoProduto");
    paragrafo.textContent =  localStorage.getItem('valueText1');
    paragrafo2.textContent =  localStorage.getItem('valueText2');
})