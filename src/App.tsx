import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import Favorites from './pages/Favorites';


function App() {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" >
                            <Route index element={<Home />} />
                            <Route path="favorites" element={<Favorites />} />
                            <Route path="pokemon/:name" element={<Pokemon />} />
                        </Route>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
}


export default App;