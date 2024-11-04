async function fetchOlfativo() {
    const queryURL = "https://829cdhmq.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22olfativo%22%5D%7B+_id%2C+titulo%2C+descricao+%7D%0A";

    try {
        const response = await fetch(queryURL);

        if (!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }
        const data = await response.json();
        renderOlfativo(data.result);
    } catch (error) {
        console.error("Erro ao buscar Olfativo:", error);
    }
}

function renderOlfativo(olfativo) {
    const colElements = document.querySelectorAll('.col-2'); 
    const descricaoElement = colElements[4].querySelector('small'); 
    const tituloElement = colElements[4].querySelector('h1'); 

    descricaoElement.innerHTML = '';
    tituloElement.innerHTML = '';

    olfativo.forEach(item => {
        descricaoElement.innerHTML += `<p>${item.descricao}</p>`;
        tituloElement.innerHTML += `${item.titulo} - `;
    });

    tituloElement.innerHTML = tituloElement.innerHTML.slice(0, -3); 
}

fetchOlfativo();

