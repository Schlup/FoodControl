import React from 'react'
import { Link } from 'react-router-dom'

function ModoPraparoBotao() {
    return (
        <Link to="/mododepreparo">
            <button className='bg-navred text-white p-1 px-2 rounded-lg'>
                Modo de Preparo
            </button>
        </Link>
    )
}

export default ModoPraparoBotao