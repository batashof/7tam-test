import React from 'react';
import {ReactComponent as Logo} from '../../assets/icons/corex-logo.svg';
import {ReactComponent as LogoMobile} from '../../assets/icons/logo-mobile.svg';
import {ReactComponent as Controls} from '../../assets/icons/controls.svg';
import {ReactComponent as Language} from '../../assets/icons/language.svg';
import {ReactComponent as Cart} from '../../assets/icons/cart.svg';

import './header.scss';

const Header = ({itemsInCartNumber}) => {
    return (
        <header className="header">
            <div className="header-mobile__controls">
                <Controls/>
            </div>
            <div className="header__logo">
                <Logo/>
            </div>
            <div className="header-mobile__logo">
                <LogoMobile/>
            </div>
            <div className="header__language">

                <Language/>
                <span>ENG</span>
            </div>
            <div className="header__cart">
                <Cart/>
                <span>{itemsInCartNumber}</span>
            </div>

        </header>
    )
};

export default Header;