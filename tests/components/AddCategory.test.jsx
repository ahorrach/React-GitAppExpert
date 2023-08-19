import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('prova AddCategory', () => { 

    test('deve de cambiar el valor de la caja de textos', () => { 

        render( <AddCategory onNewCategory= { () => {}} />)
        const input =  screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Saitama'}});

        expect(input.value).toBe('Saitama');
        //screen.debug()
     })

     test('debe de llamar a onNewCategory submit Formulario', () => { 
        const inputValues = 'Saitama';

        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory= { onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValues}});
        fireEvent.submit(form); 
         //screen.debug();
        expect( input.value).toBe('');

        expect( onNewCategory).toHaveBeenCalled();
        expect( onNewCategory).toHaveBeenCalledTimes(1);
        expect( onNewCategory).toHaveBeenCalledWith( inputValues);

        

      })

      test('debe de llamar a onNewCategory submit Formulario', () => { 
       
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory= { onNewCategory} />);

        const form = screen.getByRole('form');

        fireEvent.submit(form); 
         //screen.debug();
     
         expect( onNewCategory).not.toHaveBeenCalled();
        expect( onNewCategory).toHaveBeenCalledTimes(0);
    
      })
 })