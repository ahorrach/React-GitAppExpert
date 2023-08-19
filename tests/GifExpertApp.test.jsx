import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en <GifExpertApp />', () => {

    test('should ', () => {
        
        const { container } = render( <GifExpertApp /> );
        expect( container ).toMatchSnapshot();



    });

    test('should2 ', () => {
        
        render( <GifExpertApp /> );
        expect( screen.getByText( 'GifExpertApp' ) ).toBeTruthy();



    });


});