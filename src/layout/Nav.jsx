import React from 'react'
import { Link } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { MdOutlineInventory2 } from "react-icons/md";
import { MdOutlineListAlt } from "react-icons/md";
import { LuScrollText } from "react-icons/lu";
import { MdOutlineTableRestaurant } from "react-icons/md";

function Nav() {
    return (
        <div className="bg-navred h-screen col-span-2 flex flex-col">
            <Link className="text-white flex m-1 mx-2 pl-3 py-2 rounded-md text-xl hover:bg-hoverred" to="/"><button className="flex"><GoHome className="size-7 mr-2" />Início</button></Link>
            <Link className="text-white flex m-1 mx-2 pl-3 py-2 rounded-md text-xl hover:bg-hoverred" to="/inventario"><button className="flex"><MdOutlineInventory2 className="size-7 mr-2" />Inventário</button></Link>
            <Link className="text-white flex m-1 mx-2 pl-3 py-2 rounded-md text-xl hover:bg-hoverred" to="/pedidos"><button className="flex"><MdOutlineListAlt className="size-7 mr-2" />Pedidos</button></Link>
            <Link className="text-white flex m-1 mx-2 pl-3 py-2 rounded-md text-xl hover:bg-hoverred" to="/receitas"><button className="flex"><LuScrollText className="size-7 mr-2" />Receitas</button></Link>
            <Link className="text-white flex m-1 mx-2 pl-3 py-2 rounded-md text-xl hover:bg-hoverred" to="/mesas"><button className="flex"><MdOutlineTableRestaurant className="size-7 mr-2" />Mesas</button></Link>
        </div>
    )
}

export default Nav