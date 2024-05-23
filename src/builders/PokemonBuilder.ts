import { Pokemon } from "../models/Pokemon";

// Builder para a classe Pokemon.
export class PokemonBuilder {
    private name: string = 'Pikachu'; // Valor padrão
    private type: string = 'Electric'; // Valor padrão
    private ability: string = 'Static'; // Valor padrão
    private level: number = 5; // Valor padrão

    setName(name: string): PokemonBuilder {
        this.name = name;
        return this;
    }

    setType(type: string): PokemonBuilder {
        this.type = type;
        return this;
    }

    setAbility(ability: string): PokemonBuilder {
        this.ability = ability;
        return this;
    }

    setLevel(level: number): PokemonBuilder {
        this.level = level;
        return this;
    }

    build(): Pokemon {
        return new Pokemon(this.name, this.type, this.ability, this.level);
    }
}