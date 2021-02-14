import "./Toolbar.css"
import React from 'react';
import { Link } from 'react-router-dom'
import DrawerButton from './DrawerButton';

export default function Toolbar(props) {

    const StoreGender = () => (
        <>
            <Link to="/">Masculina</Link>
            <Link to="/">Feminina</Link>
            <Link to="/">Infantil</Link>
        </>
    )

    const StoreCategory = () => (
        <>
            <Link to="/">Humor</Link>
            <Link to="/">Rock</Link>
            <Link to="/">LGBT</Link>
            <Link to="/">Filosofia</Link>
            <Link to="/">Ver todas</Link>
        </>
    )


    return (
        <header className="header">
            <nav className="navArea">
                <div className="menuButton">
                    <DrawerButton onClick={props.onClick} />
                </div>
                <div className="toolbarOptions">
                    <div className="toolbarOptionsLeftBlock">
                        <Link to="/home">Logo</Link>
                        <Link to="/about">Sobre</Link>
                        <div className="stores">
                            <button>Lojas</button>
                            <div className="storeOptions">
                                <div className="storeGenderOptions">
                                    <div className="storeOptionsTitle">
                                        Camisas
                                    </div>
                                    <StoreGender />
                                </div>
                                <div className="storeCategoryOptions">
                                    <div className="storeOptionsTitle">
                                        Categorias populares
                                    </div>
                                    <StoreCategory />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="toolbarOptionsRightBlock">
                        <Link to="/signup">Sign up</Link>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}