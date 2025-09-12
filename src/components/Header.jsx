import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ onCarritoClick, carritoCount }) => {
    return (
        <header>
            <nav className="header-nav">
                <div className="logo">
                    <Link to="/">AMERICAN BRANDS</Link>
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Buscar..." />
                    <i className="fas fa-search"></i>
                </div>

                <div className="icons">
                    <div className="user-menu">
                        <i className="fas fa-user"></i>
                        <div className="dropdown">
                            <Link to="/login">Iniciar sesión</Link>
                            <Link to="/registro">Registrarse</Link>
                        </div>
                    </div>

                    <div
                        className="shopping-bag"
                        id="carrito-icon"
                        onClick={onCarritoClick}
                        style={{ cursor: "pointer" }}
                    >
                        <i className="fas fa-shopping-bag"></i>
                        <span className="carrito-count">{carritoCount}</span>
                    </div>
                </div>
            </nav>

            <div className="sub-nav">
                <div className="menu-item has-dropdown">
                    <Link to="/dama">DAMA</Link>
                    <ul className="dropdown">
                        <li><Link to="#">Blusas</Link></li>
                        <li><Link to="#">Camisas</Link></li>
                        <li><Link to="#">Tops</Link></li>
                        <li><Link to="#">Camisetas</Link></li>
                        <li><Link to="#">Jeans</Link></li>
                        <li><Link to="#">Pantalones</Link></li>
                        <li><Link to="#">Faldas</Link></li>
                        <li><Link to="#">Chaquetas</Link></li>
                        <li><Link to="#">Sacos</Link></li>
                        <li><Link to="#">Blazers</Link></li>
                        <li><Link to="#">Vestidos</Link></li>
                        <li><Link to="#">Abrigos</Link></li>
                        <li><Link to="#">Sudaderas</Link></li>
                        <li><Link to="#">Accesorios</Link></li>
                    </ul>
                </div>

                <div className="menu-item has-dropdown">
                    <Link to="/caballero">CABALLERO</Link>
                    <ul className="dropdown">
                        <li><Link to="#">Camisas</Link></li>
                        <li><Link to="#">Camisetas</Link></li>
                        <li><Link to="#">Jeans</Link></li>
                        <li><Link to="#">Pantalones</Link></li>
                        <li><Link to="#">Chaquetas</Link></li>
                        <li><Link to="#">Sacos</Link></li>
                        <li><Link to="#">Abrigos</Link></li>
                        <li><Link to="#">Accesorios</Link></li>
                    </ul>
                </div>

                <div className="menu-item has-dropdown">
                    <Link to="/marcas">MARCAS</Link>
                    <ul className="dropdown">
                        <li><Link to="#">Fiorucci</Link></li>
                        <li><Link to="#">Bronco</Link></li>
                        <li><Link to="#">Lois</Link></li>
                        <li><Link to="#">1921 International</Link></li>
                        <li><Link to="#">Tayssir Jeans</Link></li>
                    </ul>
                </div>

                <div className="menu-item">
                    <Link to="/ofertas">OFERTAS RELÁMPAGO</Link>
                </div>
                <div className="menu-item">
                    <Link to="/basico">BÁSICO</Link>
                </div>
                <div className="menu-item">
                    <Link to="/nuevo">NUEVO</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;