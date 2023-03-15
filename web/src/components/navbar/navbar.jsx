import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

import './navbar.css';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar__left position-relative">
                <Link to="/home"><i className="pi pi-globe text-indigo-500 mr-2" style={{ fontSize: '2.5rem', cursor: 'pointer' }} ></i></Link>
                <div className={`search-field ${searchOpen ? 'search-open' : ''}`}>
                    <div className="flex">
                        {searchOpen ? <Button className="mr-2" icon="pi pi-arrow-left" rounded text onClick={() => setSearchOpen(false)} /> : null}
                        <span className={`w-full ${!searchOpen ? "p-input-icon-left" : ""}`}>
                            {!searchOpen ? <i className="pi pi-search" /> : null}
                            <InputText placeholder="Search" onFocus={() => setSearchOpen(true)} onBlur={() => setSearchOpen(false)} />
                        </span>
                    </div>
                    <div className="search-field__result"></div>
                </div>
            </div>
            <div className="navbar__center"></div>
            <div className="navbar__right"></div>
        </div>
    )
}

export default Navbar;