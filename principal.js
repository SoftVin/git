var banners = ["Os melhores do Brasil", "Qualidade e preco baixo"]
var bannerAtual = 0

function trocaBanner() {
    bannerAtual = (bannerAtual +  1) % 2
    document.querySelector('#mensagem')
        .textContent = banners[bannerAtual]
}

setInterval(trocaBanner, 2000)