import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    // const categorias = ['One Punch','Samurai X', 'Dragon Ball Z']

    const [categorias, setCategorias] = useState(['One Punch'])

    return ( 
        <> 
            <h2>GifExpertApp</h2>
            <AddCategory 
                categorias={categorias}
                setCategorias={setCategorias}
            />
            <hr />

            <ol>
                {categorias.map(categoria => (
                    <GifGrid
                        key={categoria} 
                        categoria={categoria}
                    />
                ))}
            </ol>
        </>
    );
}
 
export default GifExpertApp;