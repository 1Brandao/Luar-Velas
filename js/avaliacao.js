async function fetchAvaliacao() {
    const queryURL = "https://829cdhmq.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27avaliacao%27%5D+%7B%0A++avaliacao%2C%0A++nome%2C%0A++%22foto%22%3A+foto.asset-%3Eurl%0A%7D";

    try {
        const response = await fetch(queryURL);

        if (!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }

        const data = await response.json();

        renderDepoimentos(data.result);

    } catch (error) {
        console.error("Erro ao buscar as avaliações:", error);
    }
}

function renderDepoimentos(avaliacoes) {
    const container = document.getElementById('testimonial-container');
    container.innerHTML = '';

    avaliacoes.forEach(avaliacao => {
        const depoimentoHTML = `
        <div class="col-3">
            <i class="fa !text-[#ffb9b9] fa-quote-left"></i>
            <p>${avaliacao.avaliacao || 'Depoimento não disponível'}</p>
            <div class="rating">
                <i class="fa !text-[#89A992] fa-star"></i>
                <i class="fa !text-[#89A992] fa-star"></i>
                <i class="fa !text-[#89A992] fa-star"></i>
                <i class="fa !text-[#89A992] fa-star"></i>
                <i class="fa !text-[#89A992] fa-star"></i>
            </div>
            <img class="sc-380:!hidden" src="${avaliacao.foto || './images/default-user.png'}" alt="Foto de ${avaliacao.nome || 'Usuário'}">
            <h3>${avaliacao.nome || 'Nome não disponível'}</h3>
        </div>
      `;

        container.innerHTML += depoimentoHTML;
    });
}

fetchAvaliacao();