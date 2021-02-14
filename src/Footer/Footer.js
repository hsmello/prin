import './Footer.css'
import React from 'react';
import { Link } from 'react-router-dom'

export default function Footer() {

    return (
        <div className="footer">
            <div className="footerRow HeaderFR">

            </div>
            <div className="footerRow FirstFR">

                <div className="footerBlock FirstFB">
                    <div className="footerBlockTitle">
                        Comprar
                    </div>
                    <br />
                    <Link to="/">Encontre as diferentes Lojas</Link> <br />
                    <Link to="/">Envie o seu próprio design</Link> <br />
                    <Link to="/about">Como funciona</Link> <br />
                    <Link to="/faq">FAQ</Link> <br />
                    <Link to="/contact">Entre em contato</Link> <br />
                    <Link to="/login">Login</Link> <br />
                    <Link to="/signup">Inscreva-se</Link>
                </div>
                <div className="footerBlock SecondFB">
                    <div className="footerBlockTitle">
                        Vender
                    </div>
                    <br />
                    <Link to="/">Guia Inicial</Link> <br />
                    <Link to="/about">Como funciona</Link> <br />
                    <Link to="/faq">FAQ</Link> <br />
                    <Link to="/contact">Entre em contato</Link> <br />
                    <Link to="/login">Login</Link> <br />
                    <Link to="/signup">Inscreva-se</Link>
                </div>
                <div className="footerBlock ThirdFB">
                    Nos encontre por aí
                    <br />
                    redes sociais
                </div>
            </div>

            <div className="footerRow SecondFR">
                © 2021 All rights reserved -
                <div className="footerTerms">
                    <Link to="/">Termos e Condições de Usuário</Link>
                </div>
            </div>

        </div>
    )
}