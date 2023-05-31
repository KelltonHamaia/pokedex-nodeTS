import { Request, Response } from "express";
import { PokemonFunctions } from "../model/Pokemon";
import { createTabObject } from '../helper/createTabObject'

export const home = async (req: Request, res: Response) => {
    res.render('pages/index', {
        menu: createTabObject('all'),
        active: 'bg-red-400'
    })
}

export const kanto = async (req: Request, res: Response) => {
    let list = await PokemonFunctions.getKantoPokemons();
    res.render('pages/index', {
        menu: createTabObject('kanto'),
        active: 'bg-red-400', 
        title: "Kanto Dex",
        list
    });
}

export const johto = async (req: Request, res: Response) => {
    let list = await PokemonFunctions.getJohtoPokemons();
    res.render('pages/index', {
        menu: createTabObject('johto'),
        active: 'bg-red-400',
        title: "Johto Dex",
        list
    })
}


export const hoenn = async (req:Request, res:Response) => {
    let list = await PokemonFunctions.getHoennPokemons();
    res.render('pages/index', {
        menu: createTabObject('hoenn'),
        active: 'bg-red-400',
        title: "Hoenn Dex",
        list
    })
}

export const sinnoh = async (req:Request, res:Response) => {
    let list = await PokemonFunctions.getSinnohPokemons();
    res.render('pages/index', {
        menu: createTabObject('sinnoh'),
        active: 'bg-red-400',
        title: "Sinnoh Dex",
        list
    })
}


