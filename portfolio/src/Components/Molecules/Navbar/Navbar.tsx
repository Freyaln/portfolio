import * as React from 'react';
import {FC, useState} from 'react';
import Typo, {TextType} from "../../Atoms/Typo/Typo";
import { v4 as uuidv4 } from 'uuid';
import './Navbar.scss';
import {navbarDatas} from "../../../Datas/Datas";
import { Link } from 'react-scroll';
import { slide as Menu } from 'react-burger-menu';
import {useDetectMobile} from "../../../Helpers/CheckRes";

interface INavbarPropsInterface {
    classname: string;
    options: navbarDatas[];
}

var styles = {
    bmBurgerButton: {
        position: 'relative',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px',
    },
    bmBurgerBars: {
        background: 'rgba(255,119,43,0.7)',
    },
    bmBurgerBarsHover: {
        background: '#a90000',
    },
    bmCrossButton: {
        height: '24px',
        width: '24px',
    },
    bmCross: {
        background: '#bdc3c7',
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '40rem',
    },
    bmMorphShape: {
        fill: '#373a47',
    },
    bmItemList: {
        color: '#b8b7ad',
        width: '1rem',
    },
    bmItem: {
        display: 'inline-block',
    },
}

const Navbar: FC<INavbarPropsInterface> = ({classname, options }) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const handleOpen = (state: { isOpen: boolean | ((prevState: boolean) => boolean) }) => {
        setMenuOpen(state.isOpen);
    }
    function handleClose() {
        setMenuOpen(false);
    }

    console.log(menuOpen)
    return (
        <nav>
            {useDetectMobile() ?
                <Menu right isOpen={menuOpen} onStateChange={handleOpen} styles={styles}>
                    <ol className={classname}>
                        {options.map((items, index) =>

                            <li key={uuidv4()}>
                                <Link key={uuidv4()} activeClass='active' to={items.path} smooth={true} onClick={() => handleClose()}>
                                    <Typo
                                        type={TextType.TEXT}
                                        className='header__block__navbar__items'>
                                        {items.title}
                                    </Typo>
                                </Link>
                            </li>
                        )}
                    </ol>
                </Menu>
                :
                <ol className={classname}>
                {options.map((items, index) =>

                        <li key={uuidv4()}>
                            <Link key={uuidv4()} activeClass='active' to={items.path} smooth={true}>
                                <Typo
                                    type={TextType.TEXT}
                                    className='header__block__navbar__items'>
                                    {items.title}
                                </Typo>
                            </Link>
                        </li>
                    )}
            </ol> }
        </nav>
    );
};

export default Navbar;