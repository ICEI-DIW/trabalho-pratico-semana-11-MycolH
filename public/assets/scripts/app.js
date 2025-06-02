function gerarCards(secaoId, itens) {
    const secao = document.getElementById(secaoId);
    secao.innerHTML = '';

    itens.forEach(item => {
        const card = `
            <div class="col">
                <div class="card">
                    <img src="${item.imagem}" class="card-img-top" alt="${item.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${item.nome}</h5>
                        <p class="card-text">${item.descricao}</p>
                        <a href="detalhes.html?nome=${encodeURIComponent(item.nome)}" class="btn btn-primary">Ver Detalhes</a>
                    </div>
                </div>
            </div>
        `;
        secao.innerHTML += card;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    fetch("/db/db.json")
        .then(response => response.json())
        .then(data => {
            gerarCards('Destaques', data.destaques);
            gerarCards('Entradas', data.receitas.entradas);
            gerarCards('Pratos', data.receitas.principais);
            gerarCards('Sobremesas', data.receitas.sobremesas);
        })
        .catch(error => {
            console.error("Erro ao carregar o JSON:", error);
        });
});
