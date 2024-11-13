const myApiUrl = "https://829cdhmq.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27novalinha%27+%26%26+defined%28Imagem.asset%29%5D+%7B%0A++nome%2C%0A++++desc%2C%0A++%22foto%22%3A+Imagem.asset-%3Eurl%0A%7D";

async function fetchProductData() {
    console.log("Função fetchProductData chamada.");
    try {
        const response = await fetch(myApiUrl);
        
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        if (data && data.result && data.result.length > 0) {
            const produto = data.result[0];
            
            document.querySelector(".offer h1").innerText = produto.nome || "Nome não disponível";
            document.querySelector(".offer small").innerText = produto.desc || "Descrição não disponível";
            document.querySelector(".offer-img").src = produto.foto || "";
            
            document.querySelector(".btn").setAttribute(
                "onclick",
                `link('https://api.whatsapp.com/send/?phone=5545920013524&text=Olá, gostaria de saber mais sobre o produto ${produto.nome}.&type=phone_number&app_absent=0')`
            );
        } else {
            console.log("Nenhum produto encontrado.");
        }
    } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
    }
}

window.onload = fetchProductData;
