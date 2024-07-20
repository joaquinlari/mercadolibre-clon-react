import React from "react"
import './header.scss'

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header-search">
                    <a href="#"><img className="header-search-img" src="src\assets\image.png" /></a>
                    <div className="header-search-nav">
                        <input className="header-search-nav_input"
                            type="text"
                            placeholder="Buscar productos,marcas y más...">
                        </input>
                        <button className="header-search-nav_button">
                            <img className="icon-svg"
                                src="src\assets\search-svgrepo-com.svg" />
                        </button>
                    </div>
                    <a href="#"><img className="header-search-img2" src="src\assets\disney.webp" /></a>
                </div>
                <div>

                </div>
            </header>

        </>
    )
}

export default Header