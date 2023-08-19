import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components";


describe('first', () => { 
    const title = 'Saitama';
    const url = 'http://one.com/saitama.jpg';

    test('deve de hacer match con el snapshot', () => { 
       const{ container } = render( <GifItem title= {title} url={url} />)
       expect(container).toMatchSnapshot();
     })

     test('url y Alt indicado', () => { 
        render( <GifItem title= {title} url={url} />)    
        screen.debug();
      //  expect( screen.getByRole('img').src).toBe(url);
       // expect( screen.getByRole('img').alt).toBe(title);
       const { src, alt } = screen.getByRole('img');
       expect(src).toBe(url);
       expect(alt).toBe(title);
      })

      test('deve mostrar el titulo', () => { 
        render( <GifItem title= {title} url={url} />)   
        expect( screen.getByText(title)).toBeTruthy();

       })
 })