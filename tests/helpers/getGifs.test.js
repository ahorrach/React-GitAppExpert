import { number } from "prop-types";
import { getGifs } from "../../src/helpers/getGifs"

describe('provamos la llamada getGifs', () => { 


        test('devede de retorna un arreglo', async() => { 

            const gifs = await getGifs('One Punch');
            expect( gifs.length).toBeGreaterThan(0);
            expect( gifs[0]).toEqual ({
                id: expect.any( String),
                title: expect.any( String),
                url: expect.any(String)
                 })

         })

 })