type Pokemon = { nome: string, url: string }

export const PokemonFunctions = {
    
    getKantoPokemons: async ():Promise<Pokemon[]> => {
        let urlFetch = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151");
        let response = await urlFetch.json();
    
        return await Promise.all(response.results.map( async (item: { name: string, url:string }) => {

            let urlFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${item.name}`);
            let response = await urlFetch.json();
            
            return { 
                name: item.name[0].toUpperCase() + item.name.substring(1),
                url: response.sprites.front_default
            }
        })) 
    },


    getJohtoPokemons: async ():Promise<Pokemon[]>  => {
        let urlFetch = await fetch("https://pokeapi.co/api/v2/pokemon?offset=151&limit=100");
        let response = await urlFetch.json();
    
        return await Promise.all(response.results.map( async (item: { name: string, url:string }) => {

            let urlFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${item.name}`);
            let response = await urlFetch.json();
            
            return { 
                name: item.name[0].toUpperCase() + item.name.substring(1),
                url: response.sprites.front_default
            }
        })) 
    },

    getHoennPokemons : async ():Promise<Pokemon[]> => {
        let urlFetch = await fetch("https://pokeapi.co/api/v2/pokemon?offset=251&limit=135");
        let response = await urlFetch.json();
    
        return await Promise.all( response.results.map( async (item: { name: string, url:string }) => {

            let urlFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${item.name}`);
            let response = await urlFetch.json();
            
            return { 
                name: item.name[0].toUpperCase() + item.name.substring(1),
                url: response.sprites.front_default
            }
        })) 
    },

    getSinnohPokemons: async ():Promise<Pokemon[]> => {
        let urlFetch = await fetch("https://pokeapi.co/api/v2/pokemon?offset=386&limit=107");
        let response = await urlFetch.json();

        return await Promise.all( response.results.map( async (item: {name:string, url:string}) => {

            let urlFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
            let response = await urlFetch.json()
            return {
                name: item.name[0].toUpperCase() + item.name.substring(1),
                url: response.sprites.front_default
            }
        }))

    }

}