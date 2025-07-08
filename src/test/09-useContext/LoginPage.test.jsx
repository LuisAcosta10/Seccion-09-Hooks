import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage }  from "../../../src/09-useContext/LoginPage";
import { UserContext } from "../../09-useContext/context/UserContext";


describe('Pruebas en <LoginPage />', () => {

    const user = {
        id: 1,
        name: 'luis'
    }

    test('debe de mostrar le componente sin el usuario', () => {
      
        render( 
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag =  screen.getByLabelText('preLogin');
        console.log(preTag.innerHTML)
        expect( preTag.innerHTML ).toBe( 'null' )
    });

    // test('debe de llamar el setUser cuando se hace click en el boton', () => {
    //     render( 
    //         <UserContext.Provider value={{ user }}>
    //             <LoginPage />
    //         </UserContext.Provider>
    //     );

    //     const deleteButton = screen.getByRole('button');
    //     const spanlabel = screen.getByLabelText('spanButton');
        
    //     fireEvent.click( deleteButton);
    //     fireEvent.click( spanlabel);
        
    //     expect( deleteButton ).toHaveBeenCalledWith( user );
    //    // expect( onDeleteTodoMock ).toHaveBeenCalled();

    //     // expect( preTag.innerHTML ).toContain( user.name )
    //     // // mismo resultado diferente forma
    //     // expect( preTag.innerHTML ).toContain( user.id.toString() )
    //     // expect( preTag.innerHTML ).toContain( `${user.id}` )
    //     // screen.debug();
    // });
    
    test('button debe de llamar el deleteTodo', () => {
        const setUsertMock = jest.fn();
        render( 
             <UserContext.Provider value={{user: null, setUser: setUsertMock}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const spanlabel = screen.getByLabelText('spanButton');
        fireEvent.click( spanlabel);
        expect( setUsertMock ).toHaveBeenCalledWith({id: 123, name: 'Juan', email: 'juan@google.com'});


        const button = screen.getByRole('button');
        fireEvent.click( button );
        expect( setUsertMock ).toHaveBeenCalledWith({id: 123, name: 'Juan', email: 'juan@google.com'});
    });

});
