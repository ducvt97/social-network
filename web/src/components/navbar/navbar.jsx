import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

import './navbar.css';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Link } from 'react-router-dom';

const searchItems = ['Person 1', 'Person 1', 'Person 1', 'Person 1'];

const SearchItem = ({ item }) => (
    <li className="search-result-item">
        <i className="pi pi-search mr-3" />
        {item}
    </li>
);

const Navbar = () => {
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar__left position-relative">
                <Link to="/home"><i className="pi pi-globe text-indigo-500 mr-2" style={{ fontSize: '2.5rem', cursor: 'pointer' }} ></i></Link>
                <Button icon="pi pi-search" rounded text aria-label="More" className="block sm:hidden" onClick={() => setSearchOpen(true)} />
                <div className={`search-field ${searchOpen ? 'search-open' : ''} hidden sm:flex`}>
                    <div className="flex">
                        {searchOpen ? <Button className="mr-2" icon="pi pi-arrow-left" rounded text onClick={() => setSearchOpen(false)} /> : null}
                        <span className={`w-full ${!searchOpen ? "p-input-icon-left" : ""}`}>
                            {!searchOpen ? <i className="pi md pi-search" /> : null}
                            <InputText className="w-full" placeholder="Search" onFocus={() => setSearchOpen(true)} />
                        </span>
                    </div>
                    {searchOpen ?
                        <div className="search-field__result">
                            <ul className="search-result">{searchItems.map(item => <SearchItem item={item}></SearchItem>)}</ul>
                        </div>
                    : null}
                </div>
            </div>
            <div className="navbar__center"></div>
            <div className="navbar__right">
                <Button icon="pi md pi-bell" className="mr-2" rounded text aria-label="Notifications" />
                <Avatar icon="pi pi-user" size="large" shape="circle" style={{ cursor: 'pointer' }} />
            </div>
        </div>
    )
}

export default Navbar;