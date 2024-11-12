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
    const colElements = document.getElementById('marketingOlfativo');
    
    colElements.innerHTML = '';

    olfativo.forEach(item => {
        const olfativoHTML = `
                    <div class="col-2" id="marketingOlfativo">
                        <p>O que fazemos?</p>
                        <h1 class="sc-420:!text-[27px]">${item.titulo}</h1>
                        <small>
                            ${item.descricao}
                        </small><br>
                        <a onclick="link('https://api.whatsapp.com/send/?phone=5545920013524&text=Olá, gostaria de saber mais sobre as velas da Luar.&type=phone_number&app_absent=0')"
                            class="btn cursor-pointer hover:!text-[white]">Entre em contato! &#8594;</a>
                    </div>
        `;
        colElements.innerHTML += olfativoHTML;
    });
}

fetchOlfativo();
