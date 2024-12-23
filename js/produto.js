async function fetchProduto() {
    const queryURL = "https://829cdhmq.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27produtos%27+%26%26+defined%28fotoprincipal.asset%29%5D+%7B%0A++nome%2C%0A++preco%2C%0A++descricao%2C%0A++%22foto%22%3A+fotoprincipal.asset-%3Eurl%2C%0A++%22foto1%22%3A+foto1.asset-%3Eurl%2C%0A++%22foto2%22%3A+foto2.asset-%3Eurl%2C%0A++%22foto3%22%3A+foto3.asset-%3Eurl%2C%0A++%22foto4%22%3A+foto4.asset-%3Eurl%0A%7D"

    try {
        const response = await fetch(queryURL);

        if (!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }

        const data = await response.json();

        renderProduto(data.result);

    } catch (error) {
        console.error("Erro ao buscar os produto:", error);
    }
}



function renderProduto(produto) {
    const container = document.getElementById('single-product');
    container.innerHTML = '';

    produto.forEach(produto => {
        const produtoHTML = `<div class="row flex justify-center items-center sc-1120:flex-col">
                    <div class="col-2">
                        <img src="${produto.foto}" width="100%" id="productImg">

                        <div class="small-img-row mt-[10px]">
                            <div class="small-img-col">
                                <img src="${produto.foto1}" width="100%" class="small-img !h-[114px]">
                            </div>
                            <div class="small-img-col">
                                <img src="${produto.foto2}" width="100%" class="small-img !h-[114px]">
                            </div>
                            <div class="small-img-col">
                                <img src="${produto.foto3}" width="100%" class="small-img !h-[114px]">
                            </div>
                            <div class="small-img-col">
                                <img src="${produto.foto4}" width="100%" class="small-img !h-[114px]">
                            </div>
                        </div>

                    </div>
                    <div class="col-2">
                        <p>Início / Velas</p>
                        <h1>${produto.nome}</h1>
                        <h4>${produto.preco}</h4>
                        <select>
                            <option>Cor (recipiente)</option>
                            <option>Branca</option>
                            <option>Preta</option>
                            <option>Rosa</option>
                            <option>Azul</option>
                            <option>Cinza</option>
                        </select>
                        <input id="quantidade_produtos" type="number" value="1">
                        <button
                            onclick="getBuy('https://api.whatsapp.com/send/?phone=5545920013524&text=Olá, gostaria de comprar $quantidade quantidade da vela Aroma Desjardins.&type=phone_number&app_absent=0', 'quantidade_produtos')"
                            class="btn !text-white">Comprar agora</button>
                        <h3>Detalhes do Produto <i class="fa !text-[#89A992] fa-indent"></i></h3>
                        <br>
                        <p class="text-[gray]">${produto.descricao}</p>
                    </div>
                </div>
            </div>  
    `;

         container.innerHTML += produtoHTML;
     });
}

fetchProduto();