// src/client/main.ts
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('pokemonForm') as HTMLFormElement;
    form.onsubmit = async function(event) {
        event.preventDefault();
        const formData = new FormData(form);
       
        // Sending data to our own server
        const serverResponse = await fetch('/build-pokemon', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(formData as any)
        });

        const pokemon = await serverResponse.json();
        document.getElementById('pokemonInfo')!.innerHTML = `
            <p>Nome: ${pokemon.name}</p>
            <p>Tipo: ${pokemon.type}</p>
            <p>Habilidade: ${pokemon.ability}</p>
            <p>Nível: ${pokemon.level}</p>
        `;

        const name = formData.get('name')?.toString().toLowerCase() || '';

        // Fetching data from an external Pokémon API
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json();
            const imageUrl = data.sprites.front_default;
            document.getElementById('pokemonImage')!.innerHTML = `<img src="${imageUrl}" alt="${name}">`;
        } catch (error) {
            document.getElementById('pokemonImage')!.innerHTML = `<p>Pokémon não encontrado.</p>`;
            console.error('Error fetching Pokémon:', error);
        }

    };
});