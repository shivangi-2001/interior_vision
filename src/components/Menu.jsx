import React from 'react'
import '../css/menu.css'

const Menu = ({ name }) => {
    return (
        <>
            <nav className="menu" aria-label="breadcrumb">
                <ol class="container breadcrumb mb-0">
                    <li class="breadcrumb-item active fs-3 p-0" aria-current="page" style={{ color: '#000' }}>{name}</li>
                </ol>
            </nav>
            
        </>
    );
}

export default Menu;