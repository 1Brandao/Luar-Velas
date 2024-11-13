// URL da API para buscar os produtos iniciais
const apiUrlProdutoInicio = "https://829cdhmq.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27produtoinicio%27%5D+%7B%0A++nome%2C%0A++%22foto%22%3A+foto.asset-%3Eurl%0A%7D";

async function fetchProdutoInicio() {
    try {
        const response = await fetch(apiUrlProdutoInicio);
        const data = await response.json();

        if (data && data.result && data.result.length > 0) {
            const productContainer = document.querySelector(".row.sc-610\\:flex-col");
            productContainer.innerHTML = "";

            data.result.forEach(produto => {
                const productHTML = `
                    <div class="col-4">
                        <a href="produto.html"><img class="shadow-default" src="${produto.foto}" alt="${produto.nome}"></a>
                        <h4 class="mt-[5px]">${produto.nome}</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <section
                            onclick="link('https://api.whatsapp.com/send/?phone=5545920013524&text=Olá, gostaria de saber mais sobre as velas da linha ${produto.nome}.&type=phone_number&app_absent=0')"
                            class="w-[180px] cursor-pointer flex gap-[10px] justify-center items-center h-[35px] bg-[#89A992] rounded-[50px] mt-[10px]">
                            <p class="font-[JostMedium] text-[white]">Entrar em contato</p>
                            <i class='bx bxl-whatsapp text-[25px] text-white'></i>
                        </section>
                    </div>
                `;

                productContainer.innerHTML += productHTML;
            });
        }
    } catch (error) {
        console.error("Erro ao buscar dados dos produtos de início:", error);
    }
}

window.onload = fetchProdutoInicio;