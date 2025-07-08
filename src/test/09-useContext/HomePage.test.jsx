import { render, screen } from "@testing-library/react";
import { HomePage }  from "../../../src/09-useContext/HomePage";
import { UserContext } from "../../09-useContext/context/UserContext";


describe('Pruebas en <Homepage/>', () => {

    const user = {
        id: 1,
        name: 'luis'
    }

    test('debe de mostrar le componente sin el usuario', () => {
      
        render( 
            <UserContext.Provider value={{user: null}}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag =  screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe( 'null' )
        // screen.debug();
    });

     test('debe de mostrar le componente Con el usuario', () => {
      
        render( 
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag =  screen.getByLabelText('pre');
        console.log(preTag.innerHTML)
        
        expect( preTag.innerHTML ).toContain( user.name )

        // mismo resultado diferente forma
        expect( preTag.innerHTML ).toContain( user.id.toString() )
        expect( preTag.innerHTML ).toContain( `${user.id}` )
        // screen.debug();
    });
    
});
