import React from 'react'
import './nav.scss'

const Nav = () => {
    return (
        <>
            <nav className="nav">
                <div className="nav-section-shipment">
                    <button className="nav-section-shipment_button">
                        <img src="src\assets\svg\map-point-com.svg"></img>
                        <a className="nav-section-shipment_button_text">
                            <span className="nav-section-shipment_button_text-shipment_line1">Enviar a</span><br />
                            <span className="nav-section-shipment_button_text-shipment_line2">Capital Federal</span>
                        </a>
                    </button>
                </div>
                <div className="nav-section_details">
                    <ul className="nav-section_details-list">
                        <li className="nav-section_details-list_item">Categorías</li>
                        <li className="nav-section_details-list_item">Ofertas</li>
                        <li className="nav-section_details-list_item">Historial</li>
                        <li className="nav-section_details-list_item">Supermercado</li>
                        <li className="nav-section_details-list_item">Moda</li>
                        <li className="nav-section_details-list_item">Mercado Play</li>
                        <li className="nav-section_details-list_item">Vender</li>
                        <li className="nav-section_details-list_item">Ayuda</li>
                    </ul>
                </div>
                <div className="nav-section_user">
                    <ul className="nav-section_user-list">
                        <li className="nav-section_user-list_item">Creá tu cuenta</li>
                        <li className="nav-section_user-list_item">Ingresá</li>
                        <li className="nav-section_user-list_item">Mis compras</li>
                        <li className="nav-section_user-list_item">
                            <a href="#">
                                <img className="nav-icon-cart" src="src\assets\svg\shopping-cart-svgrepo-com.svg" />
                            </a>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Nav