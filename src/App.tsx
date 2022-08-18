import React from 'react';
// import { connect } from 'react-redux';
// import { setPokemons as setPokemonAction } from './actions'
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';



function App() {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/">
                            <Route index element={<Home />} />
                            <Route path="pokemon/:id" element={<Pokemon />} />
                            <Route element={<Pokemon />} />
                        </Route>
                    </Routes>

                </Layout>
            </BrowserRouter>
        </>
    );
}


export default App;
/*
* TRADICIONAL CON CONNNECT
 */
// const mapStateToProps = ((state: any) => {
//     pokemons: state.pokemons
// }); //recive estado y retorna object
// const mapDispatchToProps = (dispatch: any) => ({ //recibe el dispatch y retorna onject 
//     setPokemonAction: (value: any) => dispatch(setPokemonAction(value))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App);