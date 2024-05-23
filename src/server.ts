import express from 'express';
import { PokemonBuilder } from './builders/PokemonBuilder';

const app = express();
const port = 3000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve the HTML file on root
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/views/' });
});

// Handle form submission
app.post('/build-pokemon', (req, res) => {
    const { name, type, ability, level } = req.body;
    const pokemon = new PokemonBuilder()
        .setName(name)
        .setType(type)
        .setAbility(ability)
        .setLevel(parseInt(level))
        .build();

    res.json(pokemon);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});