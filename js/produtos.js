async function fetchProdutos() {
    const queryURL = "https://829cdhmq.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27produtos%27%5D+%7B%0A++nome%2C%0A++preco%2C%0A++nota%2C%0A++%22foto%22%3A+foto.asset-%3Eurl%0A%7D"

    try {
        const response = await fetch(queryURL);

        if (!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }

        const data = await response.json();

        renderProdutos(data.result);

    } catch (error) {
        console.error("Erro ao buscar os produtos:", error);
    }
}



function renderProdutos(produtos) {
    const container = document.getElementById('product');
    container.innerHTML = '';

    produtos.forEach(produtos => {
        const produtoHTML = `
            <div class="col-4">
                <a href="produto.html">
                    <img src="${produtos.fotoprincipal || './images/default-user.png'}" alt="Foto de ${produtos.nome || 'Usuário'}">
                </a>
                <h4>${produtos.nome || 'Produto não disponível'}</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>${produtos.preco || 'Produto não disponível'}</p>
            </div>   
    `;

         container.innerHTML += produtoHTML;
     });
}

fetchProdutos();