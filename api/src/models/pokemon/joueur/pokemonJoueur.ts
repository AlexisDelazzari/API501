import PokemonUtilisable from "../utilisable/pokemonUtilisable";

export default interface PokemonJoueur extends PokemonUtilisable{
    xpActuelle : number,
    xpProchainNiveau : number,
    pvActuel : number,
    status : string
}


