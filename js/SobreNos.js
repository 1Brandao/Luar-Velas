async function fetchSobreNos() {
    const queryURL = "https://829cdhmq.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22sobrenos%22%5D%7B+_id%2C+titulo%2C+descricao+%7D%0A";

    try {
        const response = await fetch(queryURL);

        if (!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }
        const data = await response.json();
        renderSobreNos(data.result);
    } catch (error) {
        console.error("Erro ao buscar Sobre Nos:", error);
    }
}

function renderSobreNos(sobrenos) {
    const colElements = document.getElementById('SobreNos');
    
    colElements.innerHTML = '';

    sobrenos.forEach(item => {
        const sobrenosHTML = `
            <div class="col-2">
                <p>Sobre nós</p>
                <h1 class="sc-420:!text-[27px]">${item.titulo}</h1>
                <small>
                    ${item.descricao}
                </small><br>
            </div>`;
        colElements.innerHTML += sobrenosHTML;
    });
}

fetchSobreNos();
