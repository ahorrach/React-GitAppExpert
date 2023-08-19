import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas GifGrid', () => { 

    const category = 'One Punch';

    test('debe de mostrar el louding', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        
        render(<GifGrid category= {category}/>)
        //screen.debug();
        expect(screen.getByText( 'Cargando...'));
        expect(screen.getByText( category))
        
         });

    test('deve de mostrar items', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'urlSaitama'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'urlGoku'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category= {category}/>)

        screen.debug();
        expect ( screen.getAllByRole('img').length).toBe(2);
     })     

 })