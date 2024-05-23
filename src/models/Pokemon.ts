// Define a estrutura de um Pokémon.
export class Pokemon {
    constructor(
        public name: string,
        public type: string,
        public ability: string,
        public level: number
    ) {}
}