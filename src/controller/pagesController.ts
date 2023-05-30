import { Request, Response } from "express";
import { PokemonFunctions } from "../model/Pokemon";

export const home = async (req: Request, res: Response) => {
    res.render('pages/index')
}

export const kanto = async (req: Request, res: Response) => {
    let list = await PokemonFunctions.getKantoPokemons();
    res.render('pages/index', {
        title: "Kanto Dex",
        list
    });
}

export const johto = async (req: Request, res: Response) => {
    let list = await PokemonFunctions.getJohtoPokemons();
    res.render('pages/index', {
        title: "Johto Dex",
        list
    })
}


export const hoenn = async (req:Request, res:Response) => {
    let list = await PokemonFunctions.getHoennPokemons();
    res.render('pages/index', {
        title: "Hoenn Dex",
        list
    })
}

export const sinnoh = async (req:Request, res:Response) => {
    let list = await PokemonFunctions.getSinnohPokemons();
    res.render('pages/index', {
        title: "Sinnoh Dex!",
        list
    })
}


