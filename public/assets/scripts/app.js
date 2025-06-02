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



document.addEventListener('DOMContentLoaded', () => {
          const params = new URLSearchParams(window.location.search);
          const nome = params.get('nome');

          if (!nome) {
              document.getElementById('detalhes').innerHTML = `<p>Parâmetro 'nome' não encontrado na URL.</p>`;
              return;
          }

          fetch('/db/db.json')
            .then(response => response.json())
            .then(data => {
              const todosItens = [
                ...data.destaques,
                ...data.receitas.entradas,
                ...data.receitas.principais,
                ...data.receitas.sobremesas
              ];

              const item = todosItens.find(i => i.nome === nome);

              if (item) {
                document.getElementById('nome-prato').textContent = item.nome;
                document.getElementById('detalhes').innerHTML = `
                  <div class="col-12">
                      <p class="mt-4">${item.descricao}</p>
                      <img src="${item.imagem}" alt="${item.nome}" class="img-fluid my-3" />
                      <div class="receita">${item.receita}</div>
                  </div>
                `;
              } else {
                document.getElementById('detalhes').innerHTML = `<p>Item não encontrado.</p>`;
              }
            })
            .catch(err => {
              console.error('Erro ao carregar o JSON:', err);
              document.getElementById('detalhes').innerHTML = `<p>Erro ao carregar os dados.</p>`;
            });
      });
