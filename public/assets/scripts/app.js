// Dados de culinária japonesa
const dadosCulinariaJaponesa = {
    "destaques": [
        {
            "id": 1,
            "nome": "Sushi",
            "descricao": "Peixe cru sobre arroz.",
            "imagem": "https://cdn.pixabay.com/photo/2023/05/17/14/13/ai-generated-8000298_1280.jpg",
            "receita": ` 
                                <div class="receita">
                                    <h3>Receita de Sushi:</h3>
                                    <h4>Ingredientes:</h4>
                                    <ul>
                                        <li>1 xícara de arroz japonês</li>
                                        <li>1 ¼ xícara de água</li>
                                        <li>2 colheres de sopa de vinagre de arroz</li>
                                        <li>2 colheres de sopa de açúcar</li>
                                        <li>1 colher de chá de sal</li>
                                        <li>200g de peixe fresco (salmão, atum)</li>
                                        <li>Alga nori</li>
                                        <li>1 pepino (opcional)</li>
                                        <li>Abacate (opcional)</li>
                                        <li>Molho de soja, wasabi</li>
                                    </ul>
                                    <h4>Instruções:</h4>
                                    <ol>
                                        <li>Lave o arroz em água fria até que a água saia limpa.</li>
                                        <li>Cozinhe o arroz com a água e deixe esfriar.</li>
                                        <li>Prepare o vinagre temperado (vinagre, açúcar, sal) e misture no arroz cozido.</li>
                                        <li>Enrole o arroz com o peixe e os outros ingredientes em folhas de alga nori.</li>
                                        <li>Corte em rolos e sirva com molho de soja e wasabi.</li>
                                    </ol>
                                </div>`
        },
        {
            "id": 2,
            "nome": "Tempurá",
            "descricao": "Vegetais, frutos do mar e carnes fritas.",
            "imagem": "https://th.bing.com/th/id/OIP.xhqgDmK-bgpGGDeB6IJMSgHaE7?rs=1&pid=ImgDetMain&adlt=strict",
            "receita": `
                    <div class="receita">
                        <h3>Receita de Tempurá:</h3>
                        <h4>Ingredientes:</h4>
                        <ul>
                            <li>1 xícara de farinha de trigo</li>
                            <li>1 ovo</li>
                            <li>1 xícara de água gelada</li>
                            <li>Frutos do mar (camarão, peixe) ou vegetais (batata-doce, cenoura, abóbora)</li>
                            <li>Óleo para fritar</li>
                            <li>Molho para tempurá</li>
                        </ul>
                        <h4>Instruções:</h4>
                        <ol>
                            <li>Prepare a massa: misture a farinha, ovo e água gelada até obter uma mistura ligeiramente grumosa.</li>
                            <li>Mergulhe os ingredientes (peixe, frutos do mar, vegetais) na massa e frite em óleo quente até ficarem crocantes e dourados.</li>
                            <li>Escorra em papel toalha e sirva com molho para tempurá.</li>
                        </ol>
                    </div>`
        },
        {
            "id": 3,
            "nome": "Udon",
            "descricao": "Macarrão fino e longo.",
            "imagem": "assets/scripts/Udon-img.png",
            "receita": `
                        <div class="receita">
                            <h3>Receita de Udon:</h3>
                            <h4>Ingredientes:</h4>
                            <ul>
                                <li>200g de macarrão Udon</li>
                                <li>1 litro de caldo de peixe ou galinha</li>
                                <li>1 cebolinha picada</li>
                                <li>100g de cogumelos shiitake fatiados</li>
                                <li>1 ovo cozido (opcional)</li>
                                <li>Molho de soja, mirin e molho de peixe</li>
                            </ul>
                            <h4>Instruções:</h4>
                            <ol>
                                <li>Cozinhe o macarrão Udon conforme as instruções da embalagem.</li>
                                <li>Aqueça o caldo com molho de soja, mirin e molho de peixe.</li>
                                <li>Adicione os cogumelos e a cebolinha ao caldo.</li>
                                <li>Sirva o macarrão em uma tigela, despeje o caldo quente por cima e adicione o ovo cozido, se desejar.</li>
                            </ol>
                        </div>`
        },
        {
            "id": 4,
            "nome": "Mochi",
            "descricao": "Bolinhos de arroz glutinoso, muitas vezes recheados com pasta de feijão doce (anko) ou com frutas.",
            "imagem": "https://media.istockphoto.com/photos/multicolored-japanese-ice-cream-mochi-in-rice-dough-and-jasmine-on-a-picture-id1158085114?k=6&m=1158085114&s=612x612&w=0&h=HOWUxlAjii6_aXEfNyiHvrHQUeORhqqoZ93KPQ_vqww=",
            "receita": `
                                    <div class="receita">
                                        <h3>Receita de Mochi:</h3>
                                        <h4>Ingredientes:</h4>
                                        <ul>
                                            <li>200g de arroz glutinoso moído (farinha de arroz mochiko)</li>
                                            <li>1/2 xícara de água</li>
                                            <li>1/4 xícara de açúcar</li>
                                            <li>Recheio de sua escolha (pasta de feijão doce ou frutas)</li>
                                        </ul>
                                        <h4>Instruções:</h4>
                                        <ol>
                                            <li>Em uma tigela, misture a farinha de arroz, água e açúcar até obter uma massa homogênea.</li>
                                            <li>Coloque a mistura em uma panela e cozinhe em fogo baixo, mexendo sempre até que a massa fique espessa e pegajosa.</li>
                                            <li>Deixe esfriar um pouco e depois modele em bolinhas.</li>
                                            <li>Recheie com pasta de feijão doce ou frutas e sirva.</li>
                                        </ol>
                                    </div>`
        },
        {
            "id": 5,
            "nome": "Yakitori",
            "descricao": "Espetinhos de carne.",
            "imagem": "https://img.freepik.com/fotos-premium/japones-yakitori_916033-194.jpg",
            "receita": `
                        <div class="receita">
                            <h3>Receita de Yakitori:</h3>
                            <h4>Ingredientes:</h4>
                            <ul>
                                <li>500g de peito de frango cortado em cubos</li>
                                <li>Molho tare (molho de soja, mirin, açúcar e saquê)</li>
                                        <li>Espetos de madeira ou metal</li>
                                <li>Óleo para grelhar</li>
                            </ul>
                            <h4>Instruções:</h4>
                            <ol>
                                <li>Monte os espetos com os cubos de frango.</li>
                                <li>Grelhe os espetos até que o frango fique bem dourado e cozido.</li>
                                <li>Durante o processo de grelhamento, pincele o molho tare sobre o frango para dar sabor.</li>
                                <li>Sirva com arroz branco e legumes.</li>
                            </ol>
                        </div>`
        }
    ],
    "receitas": {
        "entradas": [
            {
                "id": 6,
                "nome": "Gyoza",
                "descricao": "Pastéis recheados — geralmente carne de porco e repolho — selados na frigideira e servidos com molho de soja e vinagre.",
                "imagem": "https://img.freepik.com/fotos-premium/deliciosa-comida-japonesa-gyoza-imagem-de-alta-resolucao_607646-2005.jpg",
                "receita": `
                                    <div class="receita">
                                        <h3>Receita de Gyoza:</h3>
                                        <h4>Ingredientes:</h4>
                                        <ul>
                                            <li>200g de carne de porco moída</li>
                                            <li>1/2 repolho pequeno, picado</li>
                                            <li>2 dentes de alho picados</li>
                                            <li>1 colher de sopa de gengibre ralado</li>
                                            <li>Massas para Gyoza</li>
                                            <li>Óleo para fritar</li>
                                            <li>Molho de soja e vinagre</li>
                                        </ul>
                                        <h4>Instruções:</h4>
                                        <ol>
                                            <li>Prepare o recheio misturando carne, repolho, alho, gengibre e temperos.</li>
                                            <li>Coloque o recheio nas massas de gyoza e dobre-as.</li>
                                            <li>Frite os gyozas em uma frigideira até ficarem crocantes e dourados.</li>
                                            <li>Sirva com molho de soja e vinagre.</li>
                                        </ol>
                                    </div>`
            },
            {
                "id": 7,
                "nome": "Edamame",
                "descricao": "Grãos de soja cozidos com sal, servidos ainda na vagem. Leve, saudável e muito comum em izakayas (bares japoneses).",
                "imagem": "https://th.bing.com/th/id/OIP.2yixkhmMOF9pbqxrqdTxigHaE7?rs=1&pid=ImgDetMain",
                "receita": `
                                    <div class="receita">
                                        <h3>Receita de Edamame:</h3>
                                        <h4>Ingredientes:</h4>
                                        <ul>
                                            <li>500g de edamame congelado</li>
                                            <li>Água para ferver</li>
                                            <li>Sal grosso</li>
                                        </ul>
                                        <h4>Instruções:</h4>
                                        <ol>
                                            <li>Leve uma panela com água e sal para ferver.</li>
                                            <li>Adicione os edamames congelados e cozinhe por cerca de 5-7 minutos.</li>
                                            <li>Escorra e sirva imediatamente, salpicado com sal grosso.</li>
                                        </ol>
                                    </div>`
            },
            {   
                "id": 8,
                "nome": "Sunomono",
                "descricao": "Salada fria de pepino com vinagre de arroz, às vezes com frutos do mar como polvo ou kani. Refrescante e levinha!",
                "imagem": "assets/scripts/Sunomono.png",
                "receita": `
                                    <div class="receita">
                                        <h3>Receita de Sunomono:</h3>
                                        <h4>Ingredientes:</h4>
                                        <ul>
                                            <li>2 pepinos japoneses fatiados finamente</li>
                                            <li>2 colheres de sopa de vinagre de arroz</li>
                                            <li>1 colher de sopa de açúcar</li>
                                            <li>1 colher de chá de molho de soja</li>
                                            <li>Gergelim torrado</li>
                                        </ul>
                                        <h4>Instruções:</h4>
                                        <ol>
                                            <li>Fatie o pepino e coloque-o em uma tigela.</li>
                                            <li>Em uma pequena panela, misture vinagre, açúcar e molho de soja até dissolver o açúcar.</li>
                                            <li>Despeje a mistura de vinagre sobre o pepino e deixe marinar por 15 minutos.</li>
                                            <li>Sirva com gergelim torrado por cima.</li>
                                        </ol>
                                    </div>`
            }
        ],
        "principais": [
            {
                "id": 9,
                "nome": "Sushi",
                "descricao": "Peixe cru sobre arroz.",
                "imagem": "https://cdn.pixabay.com/photo/2023/05/17/14/13/ai-generated-8000298_1280.jpg"
            },
            {   
                "id": 10,
                "nome": "Katsu",
                "descricao": "Prato de carne de porco empanada e frita, geralmente servida com arroz, molho tonkatsu e repolho picado.",
                "imagem": "https://th.bing.com/th/id/OIP.YsNCU5WwkuurZZhqJGWtCwHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7&adlt=strict",
                "receita": `
                                    <div class="receita">
                                        <h3>Receita de Katsu:</h3>
                                        <h4>Ingredientes:</h4>
                                        <ul>
                                            <li>4 filés de carne de porco ou frango</li>
                                            <li>Farinha de trigo</li>
                                            <li>Ovos batidos</li>
                                            <li>Panko (farinha de rosca japonesa)</li>
                                            <li>Óleo para fritar</li>
                                            <li>Molho tonkatsu</li>
                                        </ul>
                                        <h4>Instruções:</h4>
                                        <ol>
                                            <li>Tempere os filés com sal e pimenta.</li>
                                            <li>Passe os filés na farinha, depois no ovo batido e por fim no panko.</li>
                                            <li>Frite os filés em óleo quente até que fiquem dourados e crocantes.</li>
                                            <li>Sirva com arroz e molho tonkatsu por cima.</li>
                                        </ol>
                                    </div>`
            },
            {
                "id": 11,
                "nome": "Ramen",
                "descricao": "Macarrão em caldo com carne e vegetais.",
                "imagem": "https://img.freepik.com/fotos-premium/sapporo-ramen-japones-com-caldo-de-osso-de-porco_740566-4622.jpg",
                "receita": `
                                    <div class="receita">
                                        <h3>Receita de Ramen:</h3>
                                        <h4>Ingredientes:</h4>
                                        <ul>
                                            <li>200g de macarrão para ramen</li>
                                            <li>1 litro de caldo de galinha</li>
                                            <li>100g de carne de porco fatiada</li>
                                            <li>1 ovo cozido</li>
                                            <li>Cebolinha, alho, gengibre, molho de soja</li>
                                        </ul>
                                        <h4>Instruções:</h4>
                                        <ol>
                                            <li>Cozinhe o macarrão para ramen conforme as instruções do pacote.</li>
                                            <li>Aqueça o caldo de galinha e adicione os temperos (alho, gengibre, molho de soja).</li>
                                            <li>Em uma tigela, coloque o macarrão e despeje o caldo por cima.</li>
                                            <li>Adicione a carne de porco fatiada, o ovo cozido e decore com cebolinha.</li>
                                        </ol>
                                    </div>`
            }
        ],
        "sobremesas": [
            {
                "id": 12,
                "nome": "Kibi Dango",
                "descricao": "Bolinhos pequenos e macios, feitos com farinha de arroz, muitas vezes cobertos com açúcar ou uma mistura de amido de milho.",
                "imagem": "assets/scripts/KibiDango.png",
                "receita": `
                                    <div class="receita">
                                        <h3>Receita de Kibi Dango:</h3>
                                        <h4>Ingredientes:</h4>
                                        <ul>
                                            <li>200g de farinha de arroz mochiko</li>
                                            <li>100g de açúcar</li>
                                            <li>Água</li>
                                        </ul>
                                        <h4>Instruções:</h4>
                                        <ol>
                                            <li>Em uma tigela, misture a farinha de arroz e o açúcar.</li>
                                            <li>Adicione água aos poucos até formar uma massa firme.</li>
                                            <li>Modele em pequenas bolinhas e cozinhe em água fervente até subirem à superfície.</li>
                                            <li>Escorra, passe em açúcar e sirva.</li>
                                        </ol>
                                    </div>`
            },
            {
                "id": 13,
                "nome": "Matcha-flavored sweets",
                "descricao": "Matcha, ou chá verde em pó, é usado em várias sobremesas no Japão, como bolos, biscoitos e sorvetes.",
                "imagem": "assets/scripts/Matcha.png",
                "receita": `
                                    <div class="receita">
                                        <h3>Receita de Doces de Matcha:</h3>
                                        <h4>Ingredientes:</h4>
                                        <ul>
                                            <li>200g de farinha de arroz mochiko</li>
                                            <li>2 colheres de sopa de pó de matcha</li>
                                            <li>100g de açúcar</li>
                                            <li>Água</li>
                                        </ul>
                                        <h4>Instruções:</h4>
                                        <ol>
                                            <li>Em uma tigela, misture o mochiko, o matcha e o açúcar.</li>
                                            <li>Adicione água até obter uma massa homogênea.</li>
                                            <li>Modele em bolinhos e cozinhe em água fervente até ficarem firmes.</li>
                                            <li>Deixe esfriar e sirva.</li>
                                        </ol>
                                    </div>`
            },
            {
                "id": 14,
                "nome": "Daifuku",
                "descricao": "Similar ao mochi, mas com um recheio variado.",
                "imagem": "https://th.bing.com/th/id/OIP.IYctqix_MvJG5OPMdvRnOQHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7&adlt=strict",
                "receita": `
                                    <div class="receita">
                                        <h3>Receita de Daifuku:</h3>
                                        <h4>Ingredientes:</h4>
                                        <ul>
                                            <li>200g de farinha de arroz mochiko</li>
                                            <li>100g de pasta de feijão doce (anko)</li>
                                            <li>Água</li>
                                        </ul>
                                        <h4>Instruções:</h4>
                                        <ol>
                                            <li>Prepare a massa de mochiko com água até que fique firme e pegajosa.</li>
                                            <li>Modele a massa em pequenos discos.</li>
                                            <li>Coloque uma pequena quantidade de anko no centro de cada disco e feche bem.</li>
                                            <li>Sirva frio.</li>
                                        </ol>
                                    </div>`
            }
        ]
    }
};

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

document.addEventListener('DOMContentLoaded', () => {
    gerarCards('Destaques', dadosCulinariaJaponesa.destaques);
    gerarCards('Entradas', dadosCulinariaJaponesa.receitas.entradas);
    gerarCards('Pratos', dadosCulinariaJaponesa.receitas.principais);
    gerarCards('Sobremesas', dadosCulinariaJaponesa.receitas.sobremesas);
});
